/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer,createAppContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Varification from './components/Varification';
import Home from './components/Home';
import Question from './components/Question';
import grid from './components/Grid';
import Splash from './components/Splash';
import Login from './components/Login';
import Introduction from './components/Introduction';
import Register from './components/Register';
import MobileVar from './components/MobileVar';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App: () => React$Node = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator mode="modal">   
    <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
    <Stack.Screen name='Question' component={Question}/>
    <Stack.Screen name='MobileVar' component={MobileVar} options={{ headerShown: false }}/>
    <Stack.Screen name='Home' component={Home} options={{  headerShown: false }}/>
    <Stack.Screen name='grid' component={grid} options={{ headerShown: false  }} />
    <Stack.Screen name='Introduction' component={Introduction} options={{ headerShown: false }} />
    <Stack.Screen name='Varification' component={Varification} options={{ headerShown: false }}/>
    <Stack.Screen name='Register' component={Register}  options={{ headerShown: false }}/>
    
    </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;

