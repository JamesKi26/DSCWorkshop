import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Screen1Screen from "./Components/Screen1";



class App extends Component{
 render(){
   return <AppContainer/>
 } 
}
export default App
const AppSwitchNavigator = createStackNavigator(
  {
    Screen1: {screen: Screen1Screen, navigationOptions: { headerShown: false } },
    

  },
  {
    headerMode: "none",
    navigationOptions:{headerVisible: false,},
    initialRouteName: "Screen1",
    headerMode: "float"
  }
)
const AppContainer =  createAppContainer(AppSwitchNavigator);