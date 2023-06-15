import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNavBar from '../../components/BottomNavBar'
import TopNavBar from '../../components/TopNavBar'
import FollowersRandomPost from '../../components/FollowersRandomPost'

const MainPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} page="MainPage"/>
      <FollowersRandomPost/>
      <BottomNavBar navigation={navigation} page="MainPage"/>
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    paddingVertical:50
  }
})