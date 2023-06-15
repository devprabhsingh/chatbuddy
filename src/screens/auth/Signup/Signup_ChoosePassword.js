import { StyleSheet, Text, TouchableOpacity, View,Image,TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback, logo1 } from '../../../commonCSS/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formHead2, formInput, formbtn } from '../../../commonCSS/formcss'

const Signup_ChoosePassword = ({ navigation,route }) => {
  const { email, username } = route.params
  
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const [loading, setLoading] = useState(false)
  
  const handlePassword = () => {
    
    if (password == '' || cPassword == '') {
      alert('Please enter password')
    } else if (password != cPassword) {
      alert('Password does not match')
    } else {
      setLoading(true)
      fetch('http://10.0.0.51:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          email,username,password
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.msg == 'user registered successfully') {
            setLoading(false)
            alert(data.msg)
            navigation.navigate('Signup_AccountCreated')
          } else {
            setLoading(false)
            alert('Please try again')
          }
          
      })
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
        <Text style={formHead2}>Choose a strong Password</Text>
        <TextInput placeholder="Enter password"
        style={formInput} secureTextEntry
        onChangeText={(text)=>setPassword(text)}
      />
       <TextInput placeholder="Confirm password"
        style={formInput} secureTextEntry
        onChangeText={(text)=>setCPassword(text)}
      />
      {
        loading ?
          <ActivityIndicator />
          :
          <Text style={formbtn}
      onPress={handlePassword}>
        Next
      </Text>
      }
    </View>
  )
}

export default Signup_ChoosePassword

const styles = StyleSheet.create({})