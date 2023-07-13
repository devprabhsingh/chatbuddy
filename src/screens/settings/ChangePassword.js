import { StyleSheet, Text, TouchableOpacity, View,Image,TextInput, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { containerFull, goback, logo1 } from '../../commonCSS/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../assets/logo.png';
import { formTextLinkRight } from '../../commonCSS/formcss';
import { formHead2, formInput, formbtn } from '../../commonCSS/formcss'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangePassword = ({ navigation }) => {
  
  
  const [loading, setLoading] = useState(false)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  const handlePasswordChange = () => {
    if (oldPassword == '' || confirmPassword == '' || newPassword == '') {
      alert('Please fill all the fields')
    } else if (newPassword !== confirmPassword) {
      alert('New password and confirm password dont match')
    } else {
      setLoading(true)

      AsyncStorage.getItem('user')
        .then(data => {
          fetch('http://10.0.0.51:3000/changePassword', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email:JSON.parse(data).user.email, oldPassword, newPassword
            })
          })
            .then(res => res.json())
            .then(data => {
              if (data.msg == 'Password changed successfully') {
                alert(data.msg)
                setLoading(false)
                AsyncStorage.removeItem('user')
                navigation.navigate('Login')
              } else{
                alert(data.err)
                setLoading(false)
              }
            }).catch(err => alert(err))
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
      <Text style={formHead2}>Choose a strong Password</Text>
       <TextInput placeholder="Enter old password"
        style={formInput} secureTextEntry
        onChangeText={(text)=>setOldPassword(text)}
      />
        <TextInput placeholder="Enter new password"
        style={formInput} secureTextEntry
        onChangeText={(text)=>setNewPassword(text)}
      />
       <TextInput placeholder="Confirm new password"
        style={formInput} secureTextEntry
        onChangeText={(text)=>setConfirmPassword(text)}
      />
      <Text style={formTextLinkRight} onPress={() => navigation.navigate('ForgotPassword_EnterEmail')}>
              Forgot Password?
          </Text>
      {
        loading ?
          <ActivityIndicator />
          :
          <Text style={formbtn}
      onPress={handlePasswordChange}>
        Next
      </Text>
      }
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({})