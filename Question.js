import React, { Component } from 'react';
import { TouchableOpacity,StyleSheet} from 'react-native'
import PasswordTextBox from './PasswordTextBox';

import {ListItem,CheckBox,Title,Body,Left,Text, Container, Header, Content, Form, Item, Input, Label,Icon ,Button, View} from 'native-base';
export default function  Question({ navigation, route })  {

    return (
      <Container>
        <Content>
        <View style={{flexDirection:'row',padding:20}}>
        <Text>Q 1.  </Text>
        <Text>Here is the question of any subject.Question lines are not fixed so we have give a whole screen to question session</Text>
        </View>
        <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>A. Option 1</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>B. Option 2</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>C. Option 3</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>D. Option 4</Text>
            </Body>
          </ListItem>
        <TouchableOpacity
                onPress={() => {navigation.push('Home')}}
                style={styles.button}>
                <Text style={styles.text}>Submit</Text>        
            </TouchableOpacity>
        </Content>
      </Container>
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
      margin:50,
      width: null,
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