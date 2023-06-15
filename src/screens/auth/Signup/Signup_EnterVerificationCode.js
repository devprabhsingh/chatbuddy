import { StyleSheet, Text, TouchableOpacity, View,Image,TextInput } from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback, logo1 } from '../../../commonCSS/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formHead3, formInput, formbtn } from '../../../commonCSS/formcss'

const Signup_EnterVerificationCode = ({ navigation, route }) => {
  
  const { userEmail, userVCode } = route.params
  const [vCode, setVCode] = useState('')
  
  const handleVCode = () => {
    if (vCode != userVCode) {
      alert('Invalid verification code')
    } else if(vCode==userVCode){
      alert('Email verified success!')
      navigation.navigate('Signup_ChooseUsername', {
        email:userEmail
      })
    }
    else {
      alert('Please try again')
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
        <Text style={formHead3}>A verification code has been sent to your email address</Text>
        <TextInput placeholder="Enter 6-digit code"
        style={formInput}
        onChangeText={(text)=>setVCode(text)}
      />
      <Text style={formbtn}
      onPress={handleVCode}>
        Next
      </Text>
    </View>
  )
}

export default Signup_EnterVerificationCode

const styles = StyleSheet.create({})