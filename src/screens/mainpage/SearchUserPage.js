import { ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import BottomNavBar from '../../components/BottomNavBar'
import TopNavBar from '../../components/TopNavBar'
import UserCard from '../../cards/UserCard'

const SearchUserPage = ({ navigation }) => {
    
    let data = [
        {
            username:"prabh",
            profile_image:'https://picsum.photos/200/300'
        },
        {
            username:"singh",
            profile_image:'https://picsum.photos/200/300'
        },
        {
            username:"ravi",
            profile_image:'https://picsum.photos/200/300'
        },
        {
            username:"kumar",
            profile_image:'https://picsum.photos/200/300'
        },
        {
            username:"shubham",
            profile_image:'https://picsum.photos/200/300'
        },
        {
            username:"yash",
            profile_image:'https://picsum.photos/200/300'
        },
        {
            username:"naman",
            profile_image:'https://picsum.photos/200/300'
        },
        {
            username:"jass",
            profile_image:'https://picsum.photos/200/300'
        },
        ,
        {
            username:"harjeet",
            profile_image:'https://picsum.photos/200/300'
        },
        {
            username:"pratham",
            profile_image:'https://picsum.photos/200/300'
        },
        {
            username:"priya",
            profile_image:'https://picsum.photos/200/300'
        },
        ,
        {
            username:"harry",
            profile_image:'https://picsum.photos/200/300'
        },
        {
            username:"pradeep",
            profile_image:'https://picsum.photos/200/300'
        },
        {
            username:"prem",
            profile_image:'https://picsum.photos/200/300'
        }

    ]

    const [keyword,setKeyword]= useState('')
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} />
          <BottomNavBar navigation={navigation} page="SearchUserPage"/>
          <TextInput placeholder='Search...'
              style={styles.searchInput}
              onChangeText={(text)=>setKeyword(text)}
          />
          <ScrollView style={styles.usersList}>
              {
                  data.filter((user) => {
                      if (keyword === "") {
                          return null
                      }
                      else if (user.username.toLowerCase().includes(keyword.toLowerCase())) {
                          return user
                      }
                  }
                  ).map((user, index) => {
                      return <UserCard user={user} key={index} />
                  })
              }
          </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    paddingVertical: 50,
    paddingHorizontal:10
    },
    searchInput: {
        backgroundColor: 'white',
        borderRadius: 30,
        width: '90%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        fontSize: 18,
        alignSelf:'center'
    },
    usersList: {
        width:'100%',
        marginTop:20
    }
})
export default SearchUserPage

