import React, { Component } from 'react'
import { StyleSheet,Text,TouchableOpacity,Image} from 'react-native'
import {Card,CardItem,Body, View} from 'native-base';

export default function Introduction({ navigation, route }) {
 
    return(
      <Card  style={{flex: 1,alignItems: 'center',
        justifyContent: 'center'}}>
        <Image
        source={require('../images/logo.jpg')}  
        style={styles.image}
        />

        <View style={{flexDirection:'row',margin:20}}>
        <TouchableOpacity
        onPress={() => {navigation.push('Login')}}
        style={styles.button}
        >
          <Text
          style={styles.text}
          >Signin</Text>        
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {navigation.push('Register')}}
        style={styles.button}
        >
          <Text
          style={styles.text}
          >Signup</Text>        
        </TouchableOpacity>   
        </View>    
        </Card>
    );
}
export const MENU_LIST = [
  { index: 1, name: 'Action' },
  { index: 2, name: 'Sign Out' },
]

const styles = StyleSheet.create({  
    container: {
      flex: 5,
      backgroundColor:"#fff",
      alignItems: 'center',
      justifyContent: 'center'
    },
    containercard: {
      flex: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth:1,
      borderColor: 'black',
      borderRadius:10,
      margin: 10,
    },
    welcome: {  
      fontSize: 20,  
      textAlign: 'center',  
      margin: 10,  
    } , 
    button: {
      alignItems: 'center',
      backgroundColor: '#87CEEB',
      padding: 10,
      margin:10,
      width:150,
      borderRadius:10,
      textDecorationColor: 'white'
    },
    text:{
      color:'white',
      fontWeight:"bold"
    },
    image:
    {
      flex: 0.5,
     resizeMode:'contain',
    }
  });      