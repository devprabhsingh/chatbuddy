import { StyleSheet, Text, TouchableOpacity, View,Image,TextInput, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { containerFull, goback, logo1 } from '../../../commonCSS/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formHead2, formInput, formbtn } from '../../../commonCSS/formcss'

const ForgotPassword_EnterEmail = ({ navigation }) => {
  const [loading, setLoading] = useState('')
  const [email,setEmail] = useState('')
  
  const handleEmail = () => {
    if (email == '') {
      alert('Please enter email')
    } else {
      setLoading(true)
      fetch('http://10.0.0.51:3000/verifyfp', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          email
        })
      })
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          if (data.msg == 'Email sent') {
            navigation.navigate('ForgotPassword_EnterVerificationCode',{vCode:data.vCode,email})
          } else if(data.msg=='Invalid credentials'){
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
        <Text style={formHead2}>Verify your email</Text>
        <TextInput placeholder="Enter your Email"
        style={formInput}
        onChangeText={(text)=>setEmail(text)}
      />
      {loading ?
        <ActivityIndicator />
        :
        <Text style={formbtn}
          onPress={handleEmail}>
        Next
      </Text>
      }
    </View>
  )
}

export default ForgotPassword_EnterEmail

const styles = StyleSheet.create({})