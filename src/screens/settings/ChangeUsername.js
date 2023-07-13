import { StyleSheet, Text, TouchableOpacity, View,Image,TextInput, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { containerFull, goback, logo1 } from '../../commonCSS/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../assets/logo.png';
import { formHead2, formInput, formbtn } from '../../commonCSS/formcss'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangeUsername = ({ navigation }) => {
  
  const [username, setNewUsername] = useState('')
  const [loading, setLoading] = useState(false)
  
  const handleChangeUsername = () => {
    if (username=='') {
      alert('Please enter username')
    } else {
        setLoading(true)
        
        AsyncStorage.getItem('user')
            .then(data => {
        
                fetch('http://10.0.0.51:3000/setUsername', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email:JSON.parse(data).user.email,
                        username
                    })
                }).then(res => res.json())
                    .then(data => {
                        if (data.msg === 'Username changed successfully') {
                            setLoading(false)
                            alert('Username has been changed successfully')
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

      <Image source={logo} style={logo1} />
        <Text style={formHead2}>Change Username</Text>
        <TextInput placeholder="Choose your new username"
        style={formInput}
        onChangeText={(text)=>setNewUsername(text)}
      />
      {
        loading ?
          <ActivityIndicator />
          :
          <Text style={formbtn}
      onPress={handleChangeUsername}>
        Save
      </Text>
     }
    </View>
  )
}

export default ChangeUsername

const styles = StyleSheet.create({})