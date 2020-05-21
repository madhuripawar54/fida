import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native'
import PasswordTextBox from './PasswordTextBox';
import { Alert, ActivityIndicator, Button } from 'react-native';
import { Body, Text, Item, Input, Label, Icon, Card, CardItem, View } from 'native-base';

export default class Login extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      username: "",
      password1: "",
      icon: "eye-off",
      password: true,
      msg: "",
      isProgress: false
    }


  }
  showLoader = () => { this.setState({ isProgress: true }); };
  hideLoader = () => { this.setState({ isProgress: false }); };
  _changeIcon() {
    this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
      password: !prevState.password
    }));
  }


  buttonPressed = currency => {


    if (this.state.username === "") {
      this.hideLoader();

      Alert.alert("Enter some value in username");

    }
    else
      if (this.state.password1 === "") {
        this.hideLoader();

        Alert.alert("Enter some value in password");
      }
      else {
        this.hideLoader();

        fetch("http://fida.agpltest.com/api/login", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            {
              customer_username: this.state.username,
              customer_password: this.state.password1
            }
          )
        })
          .then((response) => response.json())
          .then((responseData) => {
            if (responseData.status) {
              this.hideLoader();

              this.props.navigation.navigate('Home')
            }
            else {
              this.hideLoader();

              Alert.alert(
                "Alert",
                responseData.msg)
            }


          })
          .catch(error=>console.log(error));
        // this.props.navigation.navigate("Home")
      };

  };

  render() {
    if (this.state.isProgress) {
      return (
        <ActivityIndicator size="large" color="#0000ff" />)
    }
    else
      return (
        <SafeAreaView style={styles.container}>

          <Image
            source={require('../images/logo.jpg')}
            style={styles.image}
          />

          <View style={{ flex: 3, height: '100%', width: '100%' }}>
            <Card style={styles.inputcard}>
              <CardItem>
                <Body>
                  <Item floatingLabel>
                    <Icon active name='person' />
                    <Label>Username</Label>
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
                    <Input secureTextEntry={this.state.password}
                      value={this.state.password1}
                      onChangeText={password1 =>
                        this.setState({
                          password1
                        })
                      } />
                    <Icon name={this.state.icon} onPress={() => this._changeIcon()} />
                  </Item>

                  <TouchableOpacity
                    onPress={() => {
                       this.buttonPressed()
                    }}
                    style={styles.button}>
                    <Text style={styles.text}>Signin</Text>
                  </TouchableOpacity>
                  

                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={{ alignSelf: 'center', color: '#0000EE', fontSize: 15, margin: 25, textDecorationLine: 'underline' }}>
                      New User? Register Here!</Text>
                  </TouchableOpacity>

                </Body>
              </CardItem>
            </Card>
          </View>
        </SafeAreaView>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',

    padding: 50,
    height: '100%',
    width: '100%'
  },
  containerView: {
    height: '100%',
    width: '100%',
    backgroundColor: '#2F0132'
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
  inputcard: {
    flex:4,
    width: '100%',
    height: '70%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#4D1426',
    width: '100%',
    borderRadius: 10,
    textDecorationColor: 'white',
    padding: 10,
    marginTop: 30
  },
  text: {
    color: 'white',
    fontWeight: "bold"
  },
  image:
  {
    flex: 1,
    resizeMode: 'contain',
    height: 140,
    width: 140,
  }
});      