import { StyleSheet, Text, TouchableOpacity, View,Image,TextInput, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { containerFull, goback, logo1 } from '../../../commonCSS/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formHead2, formInput, formbtn } from '../../../commonCSS/formcss'

const Signup_ChooseUsername = ({ navigation, route }) => {
  
  const { email } = route.params
  const [username, setUsername] = useState('')
  
  const [loading, setLoading] = useState(false)
  
  const handleUsername = () => {
    if (username=='') {
      alert('Please enter username')
    } else {
      setLoading(true)
      fetch('http://10.0.0.51:3000/checkUsername', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          email,
          username
        })
      }).then(res => res.json())
        .then(data => {
          if (data.msg === 'Username available') {
            setLoading(false)
            alert('Username has been set successfully')
            navigation.navigate('Signup_ChoosePassword', {
              email,username
            })
          } else {
            setLoading(false)
            alert('Username not available')
          }
        })
      .catch(err=>console.log(err))
      
    }
  }
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={goback}>
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
        <Text style={formHead2}>Choose a Username</Text>
        <TextInput placeholder="Choose your username"
        style={formInput}
        onChangeText={(text)=>setUsername(text)}
      />
      {
        loading ?
          <ActivityIndicator />
          :
          <Text style={formbtn}
      onPress={handleUsername}>
        Next
      </Text>
     }
    </View>
  )
}

export default Signup_ChooseUsername

const styles = StyleSheet.create({})