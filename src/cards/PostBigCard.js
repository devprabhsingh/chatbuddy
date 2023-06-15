import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { icons1 } from '../commonCSS/pagecss'
import { FontAwesome } from '@expo/vector-icons';
const PostBigCard = ({
    postPic,
    profilePic,
    username,
    likes,
    comments}
) => {

    const [isLiked, setIsLiked] = useState(false);
    const [showComments, setShowComments] = useState(false);
  return (
      <View style={styles.container}>
          <View style={styles.c1}>
          <Image style={styles.profilePic} source={{uri:profilePic}}/>
              <Text style={styles.username}>{username}</Text>
          </View>
          <Image source={{ uri: postPic }} style={styles.image} />
          
          <View style={styles.s2}>
              {
                  isLiked ? 
                  <View style={styles.s21}>
                          <AntDesign style={styles.iconLiked} name="heart" size={24}
                              color="black" onPress={() => {
                                  setIsLiked(false)
                              }}/>
                          <Text style={styles.liked}>{likes.length+1}</Text>
                      </View>
                      : 
                      <View style={styles.s21}>
                          <AntDesign style={icons1} name="hearto" size={24}
                              color="black" onPress={() => {
                                  setIsLiked(true)
                              }}/>
                          <Text style={styles.notLiked}>{likes.length}</Text>
                      </View>
              }
              
              <View style={styles.s22}>
                  <FontAwesome name="comment" size={24} style={icons1} color="black"
                      onPress={() => {
                          setShowComments(!showComments)
                      } } />
              </View>
          </View>

          {
              showComments == true && 
              <View style={styles.s3}>
                      {
                          comments.map((item, index) => {
                              return (
                                  <View style={styles.s31} key={item.id}>
                                      <Text style={styles.commentUser}>{item.username}</Text>
                                      <Text style={styles.commentText}>{item.comment}</Text>
                                      </View>
                              )
                          })
                      }
              </View>
          }
    </View>
  )
}

export default PostBigCard

const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            width: '100%',
            // height: 350,
            borderRadius: 10,
            marginVertical: 10,
            overflow: 'hidden',
            borderColor: 'white',
            borderWidth: 1,
        },
        c1: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            backgroundColor: 'black',
        },
        profilePic: {
            width: 30,
            height: 30,
            borderRadius: 30,
            borderColor: 'white',
            borderWidth: 1,
        },
        username: {
            color: 'white',
            marginLeft: 10,
            fontSize: 17,
            fontWeight: 'bold',
        },
        image: {
            width: '100%',
            aspectRatio: 1,
        },
        s2: {
            width: '100%',
            flexDirection: 'row',
            backgroundColor: 'black',
            padding: 10,
            alignItems: 'center',
        },
        s21: {
            // width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
        },
        notLiked: {
            color: 'grey',
            marginLeft: 5,
            fontSize: 25,
        },
        liked: {
            color: '#DC143C',
            marginLeft: 5,
            fontSize: 25,
        },
        iconLiked: {
            color: '#DC143C',
            fontSize: 30,
        },
        s22: {
            marginLeft: 20,
        },
        s3: {
            width: '100%',
            backgroundColor: '#111111',
            padding: 10,
        },
        commentUser: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 17,
    
        },
        commenttext: {
            color: 'grey',
            fontSize: 17,
            marginLeft: 5,
        },
        s31: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 3,
        }
})