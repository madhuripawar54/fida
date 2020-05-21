
import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native'
import PasswordTextBox from './PasswordTextBox';
import { Alert, ActivityIndicator, Button } from 'react-native';
import { Body, Text, Item, Input, Label, Icon, Card, CardItem, View } from 'native-base';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
  {label: 'Left', value: 0 },
  {label: 'Right', value: 1 },
  {label: 'None', value: 2 }
]
export default class  Verification extends React.Component{

  constructor(props) {

    super(props);
    this.state = {
      sponcerId: "",
      isProgress: false
    }
  }


  buttonPressed = currency => {
    if(this.state.sponcerId==="")
    {
      this.props.navigation.navigate('Register')
    }
    else
    {
        fetch("http://fida.agpltest.com/api/check_sponser_available", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            {
              customer_invite_by: this.state.sponcerId
            }
          )
        })
          .then((response) => response.json())
          .then((responseData) => {
            if (responseData.status) {
              this.props.navigation.navigate('Register')
            }
            else {
              Alert.alert(
                "Alert",
                responseData.msg)
            }
          }).done();
        }
  };
  render()
  {
    return (
      
          <View style={styles.container}>

        <Card style={styles.containerCard}>
          <Text style={{color:'#ff0000'}}>* If you Have Sponcer ID Please Fill. Otherwise Continue...</Text>
          <Item floatingLabel style={{marginTop:20}}>
            
              <Label>Sponcer ID</Label>
              <Input
               value={this.state.sponcerId}
               onChangeText={sponcerId =>
                 this.setState({
                  sponcerId
                 })
                }
              />
            </Item>
            
            <TouchableOpacity
                onPress={() => this.buttonPressed()}
                style={styles.button}>
                <Text style={styles.text}>Continue</Text>        
            </TouchableOpacity>
            <RadioForm
          radio_props={radio_props}
          initial={0}
          borderRadius='1'
          formHorizontal={true}
          onPress={(value) => {this.setState({value:value})}}
        />

            </Card>
          </View>
       
    );
    }
}
const styles = StyleSheet.create({  
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      padding: 50,
    },
    containerCard: {
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf:'center',
      margin: 10,
      borderRadius:20,
      padding:10
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
      backgroundColor: '#4D1426',
      padding: 10,
      margin:50,
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