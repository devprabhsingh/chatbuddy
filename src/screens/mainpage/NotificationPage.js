import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNavBar from '../../components/BottomNavBar'
import TopNavBar from '../../components/TopNavBar'
import FollowersRandomPost from '../../components/FollowersRandomPost'

const NotificationPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} />
      <BottomNavBar navigation={navigation} page="NotificationPage" />
      
      <View style={styles.c1}>
        
      <View style={styles.notification}>
                    <Text style={styles.txt}>Some Notification</Text>
                </View>
                <View style={styles.notification}>
                    <Text style={styles.txt}>Some Notification</Text>
                </View>
                <View style={styles.notification}>
                    <Text style={styles.txt}>Some Notification</Text>
                </View>
                <View style={styles.notification}>
                    <Text style={styles.txt}>Some Notification</Text>
                </View>

      </View>
    </View>
  )
}

export default NotificationPage

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    paddingVertical: 50,
},
c1: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
},
notification: {
    width: '98%',
    height: 50,
    backgroundColor: '#111111',
  marginTop: 10,
  justifyContent: 'center',
    alignItems:'center'
  },
  txt: {
    color: 'white',
}
})