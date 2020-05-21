import {
    Text,
    View,
    ActivityIndicator
  } from "react-native";
  import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import Dialog, { DialogContent } from "react-native-popup-dialog";

  export class Progress extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <SafeAreaView style={{ width: "100%" }}>
          <Text
            style={{
              fontSize: 17,
              marginBottom: 10,
              marginTop: 10,
              padding: 10,
              color: "#0099cc"
            }}
          >
            Loading
          </Text>
          <ActivityIndicator />
        </SafeAreaView>
       
      );
    }
  }
  export default Progress;
  