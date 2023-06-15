import { ScrollView, StatusBar, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import BottomNavBar from '../../components/BottomNavBar'
import TopNavBar from '../../components/TopNavBar'

const MyUserProfile = ({ navigation }) => {
  
  const data = {
    username: 'Prabhjot',
    followers: 1134,
    following: 347,
    description: 'I am a fullstack developer and I love coding',
    profile_image: 'https://picsum.photos/500/500',
    posts: [
      {
        id: 1,
        post_image:'https://picsum.photos/400/400'
      },
      {
        id: 2,
        post_image:'https://picsum.photos/300/300'
      },
      {
        id: 3,
        post_image:'https://picsum.photos/440/440'
      },
      {
        id: 4,
        post_image:'https://picsum.photos/470/470'
      },
      {
        id: 5,
        post_image:'https://picsum.photos/390/390'
      },
      {
        id: 6,
        post_image:'https://picsum.photos/410/410'
      },
      {
        id: 7,
        post_image:'https://picsum.photos/405/410'
      },
      {
        id: 8,
        post_image:'https://picsum.photos/410/430'
      },
    ]
  }
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} page="MyUserProfile"/>
      <BottomNavBar navigation={navigation} page="MyUserProfile" />
      <ScrollView>
        <View style={styles.c1}>
          <Image source={{ uri: data.profile_image }} style={styles.profilepic} />
          <Text style={styles.txt}>{data.username}</Text>

          <View style={styles.c11}>
            <View style={styles.c111}>
              <Text style={styles.txt1}>Followers</Text>
              <Text style={styles.txt2}>{data.followers}</Text>
            </View>
            <View style={styles.vr1}></View>
            <View style={styles.c111}>
            <Text style={styles.txt1}>Following</Text>
              <Text style={styles.txt2}>{data.following}</Text>
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
            {
              data.posts.map(
                (item, index) => {
                  return (
                    <Image key={index} source={{uri:item.post_image}} style={styles.postpic} />
                  )
                }
              )
            }
          </View>
        </View>
      </ScrollView>
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