import { ScrollView, StatusBar, StyleSheet, Text, View,Image,ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import BottomNavBar from '../../components/BottomNavBar'
import TopNavBar from '../../components/TopNavBar'
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyUserProfile = ({ navigation }) => {

  const [data, setUserdata] = React.useState({})
  const [loading, setLoading] = React.useState(true)
  
  const loaddata = async () => {

    AsyncStorage.getItem('user')
      .then(async (value) => {
        fetch('http://10.0.0.51:3000/userData', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(value).token
          }
        })
          .then(res => res.json()).then(data => {
            if (data.msg == 'User found') {
              setUserdata(data.user)
              setLoading(false)
            }
            else {
              alert('Login Again')
              navigation.navigate('Login')
            }
          })
          .catch(err => {
            navigation.navigate('Login')
          })
      })
      .catch(err => {
        navigation.navigate('Login')
      })
  }
  useEffect(() => {
    loaddata() 
  }, [])
  
  
  return (
  
  <View style={styles.container}>
    <StatusBar />
    <TopNavBar navigation={navigation} page="MyUserProfile" />
      <BottomNavBar navigation={navigation} page="MyUserProfile" />
      {loading ?
        <ActivityIndicator />
        :
      
      
        <ScrollView>
          <View style={styles.c1}>
            {data.hasOwnProperty('profile_image') ?
              <Image source={{ uri: data.profile_image }} style={styles.profilepic} /> :
              ''}
            <Text style={styles.txt}>{data.username}</Text>

            <View style={styles.c11}>
              <View style={styles.c111}>
                <Text style={styles.txt1}>Followers</Text>
                <Text style={styles.txt2}>{data.followers.length}</Text>
              </View>
              <View style={styles.vr1}></View>
              <View style={styles.c111}>
                <Text style={styles.txt1}>Following</Text>
                <Text style={styles.txt2}>{data.following.length}</Text>
              </View>
              <View style={styles.vr1}></View>
              <View style={styles.c111}>
                <Text style={styles.txt1}>Posts</Text>
                <Text style={styles.txt2}>{data.posts.length}</Text>
              </View>
            </View>

            <Text style={styles.description}>{data.description}</Text>
          </View>


          <View style={styles.c1}>
            <Text style={styles.txt}>Your Posts</Text>
            <View style={styles.c13}>
              {data.posts ?
                data.posts.map(
                  (item, index) => {
                    return (
                      <Image key={index} source={{ uri: item.post_image }} style={styles.postpic} />
                    )
                  }
                )
                : ''}
            </View>
          </View>
        </ScrollView>
      }
  </View>

  )
}

export default MyUserProfile

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    paddingVertical:50
  },
  c1: {
    width: '100%',
    alignItems:'center'
  },
  profilepic: {
    width: 150,
    height: 150,
    borderRadius:75
  },
  txt: {
    fontSize:20,
    color: 'white',
    fontWeight: 'bold',
    margin: 10,
    backgroundColor: '#111111',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius:20
  },
  txt1: {
    color: 'white',
    fontSize:15
  },
  txt2: {
    color: 'white',
    fontSize:20
  },
  c11: {
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  c111: {
    alignItems:'center'
  },
  vr1: {
    width: 1,
    height: 50,
    backgroundColor:'white'
  },
  description: {
    color: 'white',
    fontSize: 15,
    marginVertical: 10,
    backgroundColor: '#111111',
    width: '100%',
    paddingVertical: 20,
    paddingLeft:20
  },
  postpic: {
    width: '30%',
    height: 120,
    margin:5
  },
  c13: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    justifyContent:'center'
  }

})