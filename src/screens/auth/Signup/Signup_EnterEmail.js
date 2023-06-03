import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { containerFull, goback } from '../../../commonCSS/pagecss'
import { AntDesign } from '@expo/vector-icons';

const Signup_EnterEmail = ({navigation}) => {
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
    </View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({})