import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import logo from '../../assets/logo.png'
import { logo2,icons1 } from '../commonCSS/pagecss'
import { Ionicons } from '@expo/vector-icons';
const TopNavBar = ({ navigation, page }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={logo2} />
      {page === "MainPage" &&
        <Ionicons name="chatbubbles-sharp" size={24} color="black" style={icons1}
          onPress={() => navigation.navigate('AllChats')} />}
      {
        page === "MyUserProfile" &&
        <Ionicons name="settings-sharp" size={24} color="black" style={[icons1,{marginRight:20}]}
          onPress={() => navigation.navigate('Settings1')} />
      }
    </View>
  )
}

export default TopNavBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position:'absolute',
        top: 0,
        zIndex: 100,
        backgroundColor:'#111111'
    }
})