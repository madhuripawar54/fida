import React, { Component } from 'react'
import { Image,SafeAreaView,Text, View,TouchableOpacity,StyleSheet,TextInput} from 'react-native'
import {Card,CardItem,Body} from 'native-base';
export default function LoginN({ navigation, route }) {

    return(
    <SafeAreaView style={styles.container}> 
    <TextInput  
      placeholder={'Username'}
      style={styles.input}></TextInput>
    <TextInput 
      placeholder={'Password'}
      secureTextEntry={true}
      style={styles.input}></TextInput>
    <TouchableOpacity
      onPress={() => {navigation.push('Home')}}
      style={styles.button}>
      <Text style={styles.text}>Signin</Text>        
    </TouchableOpacity>
    <TouchableOpacity  
      onPress={() => {navigation.push('Register')}}
          >
          <Text style={{marginTop:30,color:'blue'}}
          >Not A Member?? Please Signup</Text>
          </TouchableOpacity >
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({  
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      padding: 50,
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
      flex: 1,
     resizeMode:'cover',
    }
  });      