import React, { Component } from 'react'
import { StyleSheet,Text,TouchableOpacity,Image, SafeAreaView} from 'react-native'
import {Card,CardItem,Body} from 'native-base';
export default function  Splash({ navigation, route })  {

    return(
        <SafeAreaView  style={{flex: 1,alignItems: 'center',
          justifyContent: 'center',backgroundColor:'#E9FDFC'}}>
          <Image
          source={require('../images/logo.jpg')}  
          style={styles.image}
          />
          </SafeAreaView>
      );
  }
  
  const styles = StyleSheet.create({  
      container: {
        flex: 1,
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
        width:200,
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
       margin:90,
       height:200,
       width:200
      }
    });      