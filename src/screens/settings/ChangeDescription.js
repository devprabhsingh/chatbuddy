import {  StyleSheet, Text, TextInput, View,ActivityIndicator,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { containerFull,goback} from '../../commonCSS/pagecss';
import { AntDesign } from '@expo/vector-icons';
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter, formTextLinkRight } from '../../commonCSS/formcss';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangeDescription = ({ navigation }) => {

    const [description, setDescription] = useState('');
    const [loading,setLoading] = useState(false)
      
    const handleDesc = () => {
        if (description=='') {
          alert('Please enter description')
        } else {
            setLoading(true)
            
            AsyncStorage.getItem('user')
                .then(data => {
            
                    fetch('http://10.0.0.51:3000/setDescription', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email:JSON.parse(data).user.email,
                            description
                        })
                    }).then(res => res.json())
                        .then(data => {
                            if (data.msg == 'Description changed successfully') {
                                setLoading(false)
                                alert(data.msg)
                                navigation.navigate('MyUserProfile')
                            } else {
                                setLoading(false)
                                alert('Unable to process your request')
                            }
                        })
                        .catch(err => console.log(err))
                })
        }
      }
   
    return (
        <View style={containerFull}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings1')} style={goback}>

        <AntDesign name="back" size={28} color="grey" />
        <Text style={{
          color: 'grey',
          fontSize: 16,
          marginLeft: 10,
          fontWeight:'bold'
        }}>
          Go Back
        </Text>   

        </TouchableOpacity>

        <Text style={formHead2}>Change Description</Text>
        <TextInput placeholder="Enter new description" style={formInput}
            onChangeText={(text) => setDescription(text)}
            multiline={true}
            numberOfLines={5}
        />

        {
            loading ? <ActivityIndicator /> :
                <Text style={formbtn}
                    onPress={() => handleDesc()}
                >
                    Save
                </Text>
        }
    </View>
      
    )
}

export default ChangeDescription

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    
    descBox: {
        
        backgroundColor: 'white'
    }
})