import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { icons1 } from '../commonCSS/pagecss';

const BottomNavBar = ({navigation, page}) => {
  return (
    <View style={styles.container}>
      {page === 'MainPage' ?
        <MaterialCommunityIcons name="home-variant" size={24} color="black"
          onPress={() => navigation.navigate('MainPage')}
          style={styles.activeicons1} />
        :
        <MaterialCommunityIcons name="home-variant" size={24} color="black" style={icons1}
          onPress={() => navigation.navigate('MainPage')} />
      }
      
      {page === 'SearchUserPage' ?
      <Ionicons name="search" size={24} color="black" style={styles.activeicons1} 
         onPress={() => navigation.navigate('SearchUserPage')}
        />
        :
        <Ionicons name="search" size={24} color="black" style={icons1} 
         onPress={() => navigation.navigate('SearchUserPage')}
        />
      }
    
      {page === 'NotificationPage' ?
      <Ionicons name="ios-heart" size={24} color="black" style={styles.activeicons1} 
         onPress={() => navigation.navigate('NotificationPage')}
        />
        :
        <Ionicons name="ios-heart" size={24} color="black" style={icons1} 
         onPress={() => navigation.navigate('NotificationPage')}
        />
      }
   
      {page === 'MyUserProfile' ?
      <FontAwesome name="user" size={24} color="black" style={styles.activeicons1}
          onPress={() => navigation.navigate('MyUserProfile')} />
        :
        <FontAwesome name="user" size={24} color="black" style={icons1}
          onPress={() => navigation.navigate('MyUserProfile')} />
      }
    </View>
  )
}

export default BottomNavBar

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopLeftRadius: 20,
        borderTopRightRadius:20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 100,
        paddingVertical: 10,
    backgroundColor: '#111111',
        alignItems:'center'
  },
  activeicons1: {
    backgroundColor: 'white',
    borderRadius:50,
    fontSize: 30,
    padding:10
  }
})