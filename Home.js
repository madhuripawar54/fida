import React, { useEffect  } from 'react'
import { Text,StyleSheet,Image,ActivityIndicator,StatusBar,View  } from 'react-native'
import {Footer,FooterTab, Container, Header, Title,Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Grid from './Grid'


import { ScrollView } from 'react-native-gesture-handler';

export default class Home extends React.Component {
 render(){
     return(
      <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
            <Title>Angaksha</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='notifications' />
            </Button>
            <Button transparent>
              <Icon name='contact' />
            </Button>
        
          </Right>
        </Header>
       <ScrollView>
      <Grid/>
     </ScrollView>
     <Footer>
          <FooterTab>
         
            <Button vertical>
              <Icon name="apps" />
              <Text>Account</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Exams</Text>
            </Button>
            <Button vertical>
              <Icon active name="navigate" />
              <Text>My Results</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>T & C</Text>
            </Button>
            <Button vertical>
              <Icon name="logout" />
              <Text>Logout</Text>
            </Button>
          </FooterTab>
        </Footer>
          </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin:5,
    padding:5

  },
  image: {
    width: 50,
    height:50,
    borderRadius: 50,
    alignSelf:"center"
  },
  textstyle:{
    alignSelf:"center",
    margin:5
  },
  backg:{
    margin:5,
    padding:5
  }
});