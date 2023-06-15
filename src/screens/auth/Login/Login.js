import { StyleSheet, Text, View,Image,TextInput, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull,hr80,logo1 } from '../../../commonCSS/pagecss'
import { formInput,formHead, formbtn, formTextLinkCenter } from '../../../commonCSS/formcss';
import { formTextLinkRight } from '../../../commonCSS/formcss';

const Login = ({ navigation }) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    
    const handleLogin = () => {
        if (email == '' || password == '') {
            alert('Please fill all the fields')
        } else {
            setLoading(true)
            fetch('http://10.0.0.51:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email,password
                })
            }).then(res => res.json())
                .then(data => { 
                    setLoading(false)
                    if (data.error) {  
                        alert(data.error)
                    } else if (data.msg == 'Login Success') {
                        navigation.navigate('MainPage',{data})
                    }
                })
                .catch(err => {
                    setLoading(false)
                    alert(err)
            })
        }
        
    }
  return (
      <View style={containerFull}>
          <Image style={logo1} source={logo} />
          <Text style={formHead}>Login</Text>
          <TextInput placeholder="Enter your email" placeholderTextColor="grey" style={formInput}
              onChangeText={text=>setEmail(text)}
      />
          <TextInput placeholder="Enter your password" placeholderTextColor="grey" style={formInput}
              secureTextEntry={true}
              onChangeText={text=>setPassword(text)}
          />
          <Text style={formTextLinkRight} onPress={() => navigation.navigate('ForgotPassword_EnterEmail')}>
              Forgot Password?
          </Text>
        
          {loading ?
              <ActivityIndicator size="large" color="white" />
              :
              <Text style={formbtn} onPress={handleLogin}>Submit</Text>
         }
          
          <View style={hr80}></View>

          <Text style={formTextLinkCenter}>
              Don't have an account? <Text style={{ color: 'white' }}
                  onPress={() => navigation.navigate('Signup_EnterEmail')}>
                  Signup
              </Text>
          </Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})