import { StyleSheet, Text, TouchableOpacity, View,Image,TextInput, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { containerFull, goback, logo1 } from '../../../commonCSS/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formHead2, formInput, formbtn } from '../../../commonCSS/formcss'

const ForgotPassword_ChoosePassword = ({ navigation, route }) => {
  
  const {email} = route.params
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  
  const handlePassword = () => {
    if (password == '' || cPassword == '') {
      alert('Please fill all the fields')
    } else if (password !== cPassword) {
      alert('password and confirm password dont match')
    } else {
      setLoading(true)

      fetch('http://10.0.0.51:3000/resetPassword', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          email,password
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.msg == 'password changed successfully') {
            alert(data.msg)
            setLoading(false)
            navigation.navigate('ForgotPassword_AccountRecovered')
          } else {
            alert(data.msg)
        }
      }).catch(err=>alert(err))
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

export default ForgotPassword_ChoosePassword

const styles = StyleSheet.create({})