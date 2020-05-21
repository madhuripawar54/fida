
import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native'
import PasswordTextBox from './PasswordTextBox';
import { Alert, ActivityIndicator, Button } from 'react-native';
import { Body, Text, Item, Input, Label, Icon, Card, CardItem, View, Root } from 'native-base';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
var NetworkOperation = require("./NetworkOperation");
let response;

export default class  MobileVar extends React.Component{
  userName="";
   static navigationOptions = ({ navigation }) => ({
    headerTitle: "View Homework",
    headerStyle: { backgroundColor: "#2196f3" },
    headerTintColor: "#fff"
  });
  constructor(props) {
    super(props);
    this.props=props
    const { navigation } = props;
   

    this.state = {
      
      otp: "",
      usrName:"",
      isProgress: false
    }
  }
 /* showDetails(){
    const title = params ? params.title: null;

    const { params } = this.props.navigation.state;
    const userName = params ? params.userName : null;
    console.log("userName",userName)

  }*/
  buttonPressed = a => {
    this.verifyOtp()
  }

  verifyOtp =async() => {

    var formData = new FormData();
    formData.append("customer_username", this.props.navigation.params.userName);
    formData.append("customer_otp",this.state.otp);

    response = await NetworkOperation.executeFormData("check_reg_otp", formData);
    console.log("response", response)

    if(response.status)
    {
      Alert.alert(response.msg);

      this.props.navigation.navigate('Home')
    }
    else
    {
      Alert.alert(response.msg);
    }
  }
   
    
  render()
  {
    

   return(
          <View style={styles.container}>

        <Card style={styles.containerCard}>

          <Text style={{color:'#ff0000'}}></Text>
          <Item floatingLabel style={{marginTop:20}}>
            
              <Label>OTP</Label>
              <Input
               value={this.state.otp}
               onChangeText={otp =>
                 this.setState({
                  otp
                 })
                }
              />
            </Item>
            
            <TouchableOpacity
              onPress={() => this.buttonPressed()}
              style={styles.button}>
                <Text style={styles.text}>Continue</Text>        
            </TouchableOpacity>
          

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