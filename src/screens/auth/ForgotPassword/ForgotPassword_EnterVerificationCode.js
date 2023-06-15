import { StyleSheet, Text, TouchableOpacity, View,Image,TextInput } from 'react-native'
import React,{useState} from 'react'
import { containerFull, goback, logo1 } from '../../../commonCSS/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formHead3, formInput, formbtn } from '../../../commonCSS/formcss'

const ForgotPassword_EnterVerificationCode = ({ navigation, route }) => {
  const { vCode,email } = route.params
  const [userVCode,setUserVCode] = useState('')

  const handleVCode = () => {
    if (vCode == userVCode) {
      alert('Email verified successfully!')  
      navigation.navigate('ForgotPassword_ChoosePassword',{email})
    } else if (vCode != userVCode) {
      alert('wrong verification code')
    } else {
      alert('please try again')
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
        <Text style={formHead3}>A verification code has been sent to your email</Text>
        <TextInput placeholder="Enter your code here"
        style={formInput}
        onChangeText={(text)=>setUserVCode(text)}
      />
     
        <Text style={formbtn}
      onPress={handleVCode}>
        Next
      </Text>
      
    </View>
  )
}

export default ForgotPassword_EnterVerificationCode

const styles = StyleSheet.create({})