import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image, Alert ,ActivityIndicator} from 'react-native'
import PasswordTextBox from './PasswordTextBox';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Card, Right, Title, Body, Left, Text, Container, Header, Content, Form, Item, Input, Label, Icon, Button, View ,Spinner } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
var NetworkOperation = require("./NetworkOperation");
import Progress from "./Progress";
import Dialog, { DialogContent } from "react-native-popup-dialog";


var radio_props = [
  { label: 'param1', value: 0 },
  { label: 'param2', value: 1 }
]
let response;
export default class Register extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      custName: "",
      username: "",
      passwordStr: "",
      conPasswordStr: "",
      email: "",
      mobile: "",
      icon: "eye-off",
      passwordN: true,
      passwordC: true,
      msg: "",
      progress: false,
      isConnected: false,

    }

  }

  _changeIcon1() {
    this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
      passwordN: !prevState.passwordN
    }));
  }
  _changeIcon2() {
    this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
      passwordC: !prevState.passwordC
    }));
  }


  buttonPressed = currency => {
   
    this.setState({progress:true})

 /*  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
    let phoneno = /^\+?([6-9]{1})\)?([0-9]{9})$/;

    if (this.state.custName === "") {
      Alert.alert("Enter some value in customer name");
    }
    else 
    if(phoneno.test(this.state.mobile) === false) 
    { 
      Alert.alert("Invalid Mobile Number");
  
    } 
    else 
    if (this.state.mobile === "") {
      Alert.alert("Enter some value in Mobile");
    }
    else
    if (this.state.email === "") {
      Alert.alert("Enter some value in email");
    }
    else
    if(reg.test(this.state.email) === false) 
    { 
      Alert.alert("Invalid Email");
  
    } 
    else 
   
    if (this.state.username === "") {
      Alert.alert("Enter some value in username");
    }
    else
      if (this.state.passwordStr === "") {
        Alert.alert("Enter some value in password");
      }
      else
      if (this.state.conPasswordStr === "") {
        Alert.alert("Enter some value in confirm password");
      }
      else
      if (this.state.conPasswordStr !== this.state.passwordStr) {
        Alert.alert("password and new password does not match");
      }
      else
    */
      {
        this.doLogin();
      }

  };

doLogin =async() => {
    var formData = new FormData();
   /* formData.append("customer_name",this.state.custName);
    formData.append("customer_mobile",this.state.mobile);
    formData.append("customer_email",this.state.email);
    formData.append("customer_username",this.state.username);
    formData.append("customer_password", this.state.passwordN);*/
    formData.append("customer_name",'madhuri');
    formData.append("customer_mobile",'9090909090');
    formData.append("customer_email",'madhuri@gmail.com');
    formData.append("customer_username",'mm');
    formData.append("customer_password",'m');

    response = await NetworkOperation.executeFormData("insertcustomer", formData);
    console.log("response", response)

    if(response.status)
    {
      this.setState({progress:false})

      Alert.alert(response.msg);

      this.props.navigation.navigate('MobileVar',{userName: 'mm'})
    }
    else
    {
      this.setState({progress:false})

      Alert.alert(response.msg);
    }
  }
  render() {
    return (
     
      <ScrollView >

        <SafeAreaView style={styles.container}>
    
        <Dialog visible={this.state.progress}>
          <DialogContent style={{ width: "80%" }}>
            <Progress />
          </DialogContent>
        </Dialog>

          <Card style={styles.inputcard}>

            <Image source={require('../images/logo.jpg')}
              style={styles.image} />
            <Item floatingLabel style={{ marginTop: 10 }}>
              <Icon active name='person' />
              <Label>Customer Name</Label>
              <Input
                value={this.state.custName}
                onChangeText={custName =>
                  this.setState({
                    custName
                  })
                }
              />
            </Item>
            <Item floatingLabel style={{ marginTop: 10 }}>
              <Icon active name='call' />
              <Label>Mobile</Label>
              <Input
                ref='mobileNo'
                keyboardType='numeric'
                maxLength={10}
                value={this.state.mobile}
                onChangeText={mobile =>
                  this.setState({
                    mobile
                  })
                }
              />
            </Item>

            <Item floatingLabel style={{ marginTop: 10 }}>
              <Icon active name='mail' />
              <Label>Email</Label>
              <Input
                value={this.state.email}
                onChangeText={email =>
                  this.setState({
                    email
                  })
                } />
            </Item>
        
            <Item floatingLabel style={{ marginTop: 10 }}>
              <Icon active name='person' />
              <Label>User Name</Label>
              <Input
                value={this.state.username}
                onChangeText={username =>
                  this.setState({
                    username
                  })
                }
              />
            </Item>

            <Item floatingLabel style={{ marginTop: 10 }}>
              <Icon active name='lock' />
              <Label>Password</Label>
              <Input secureTextEntry={this.state.passwordN}
                value={this.state.passwordStr}
                onChangeText={passwordStr =>
                  this.setState({
                    passwordStr
                  })
                } />
              <Icon name={this.state.icon} onPress={() => this._changeIcon1()} />
            </Item>

            <Item floatingLabel style={{ marginTop: 10 }}>
              <Icon active name='lock' />
              <Label>Confirm Password</Label>
              <Input secureTextEntry={this.state.passwordC}
                value={this.state.conPasswordStr}
                onChangeText={conPasswordStr =>
                  this.setState({
                    conPasswordStr
                  })
                } />
              <Icon name={this.state.icon} onPress={() => this._changeIcon2()} />
            </Item>

            <TouchableOpacity
           
              onPress={() => this.buttonPressed()}
              style={styles.button}>
              <Text style={styles.text}>Signin</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{ alignSelf: 'center', color: '#0000EE', fontSize: 15, margin: 20, textDecorationLine: 'underline' }}>
                Back to Login</Text>
            </TouchableOpacity>

          </Card>
         
       
        </SafeAreaView>
       
      </ScrollView>
    
    
    );
  }
}

/*<RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
        />*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: '100%'
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#4D1426',
    padding: 10,
    marginTop: 50,
    width: 200,
    borderRadius: 10,
    textDecorationColor: 'white'
  },
  text: {
    color: 'white',
    fontWeight: "bold"
  },
  image:
  {
    resizeMode: 'contain',
    height: 150,
    width: 150,
  },
  inputcard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: '80%',
    height: '100%',
    borderWidth: 1,
    paddingStart: 30,
    paddingEnd: 30,
    borderRadius: 20,
    marginTop: 70
  },
});      