import { StyleSheet, Text, TouchableOpacity, View,Image,TextInput } from 'react-native'
import React from 'react'
import { containerFull, goback, logo1,row } from '../../../commonCSS/pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png';
import { formHead2, formInput, formbtn } from '../../../commonCSS/formcss'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Signup_AccountCreated = ({navigation}) => {
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
      
      <View style={row}>
        <MaterialCommunityIcons name="check-decagram" size={30} color="#99B83C" />
        <Text style={formHead2}>Account created successfully!</Text>
      </View>
        
      <Text style={formbtn}
      onPress={()=>navigation.navigate('Login')}
      >Let's Roll</Text>
      
    </View>
  )
}

export default Signup_AccountCreated

const styles = StyleSheet.create({})