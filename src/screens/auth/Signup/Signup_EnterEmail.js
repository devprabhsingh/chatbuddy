import { StyleSheet, Text, TouchableOpacity, View,Image,TextInput, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { containerFull, goback, logo1 } from '../../../commonCSS/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formHead2, formInput, formbtn } from '../../../commonCSS/formcss'

const Signup_EnterEmail = ({ navigation }) => {
  
  const [email, setEmail] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const handleEmail = () => {
    
    if (email == '') {
      alert('Please enter email')
    } else {
      setLoading(true)
      fetch('http://10.0.0.51:3000/verify', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          email:email
        })
      }).then(res => 
        res.json()
      ).then(data => {
        if (data.msg === 'Invalid Credentials') {
          alert(data.msg)
          setLoading(false)
        } else if (data.msg === "Email sent") {
          setLoading(false)
          alert("Verification code sent to your email")
          navigation.navigate('Signup_EnterVerificationCode', {
            userEmail: data.email,
            userVCode:data.vCode
          })
        }
      }).catch(err=>console.log(err))
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
        <Text style={formHead2}>Create a new account</Text>
        <TextInput placeholder="Enter your email"
        style={formInput}
        onChangeText={(text) => {
          setEmail(text)
        }}
      />
      {
        loading ?
          <ActivityIndicator size="large" color="white"/>
        :
        <Text style={formbtn}
      onPress={()=>handleEmail()}>
        Next
      </Text>
      }
     
    </View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({})