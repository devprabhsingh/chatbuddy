import { StyleSheet, Text, View,Image,TextInput } from 'react-native'
import React from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull,hr80,logo1 } from '../../../commonCSS/pagecss'
import { formInput,formHead, formbtn, formTextLinkCenter } from '../../../commonCSS/formcss';
import { formTextLinkRight } from '../../../commonCSS/formcss';

const Login = ({navigation}) => {
  return (
      <View style={containerFull}>
          <Image style={logo1} source={logo} />
          <Text style={formHead}>Login</Text>
      <TextInput placeholder="Enter your email" placeholderTextColor="grey" style={formInput}/>
          <TextInput placeholder="Enter your password" placeholderTextColor="grey" style={formInput}
              secureTextEntry={true}
          />
          <Text style={formTextLinkRight} onPress={() => navigation.navigate('ForgotPassword_EnterEmail')}>
              Forgot Password?
          </Text>
        
          <Text style={formbtn} onPress={() => navigation.navigate('Home')}>Submit</Text>
          
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