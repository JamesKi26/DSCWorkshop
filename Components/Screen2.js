import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { screenStyles } from "../StyleSheets/ScreenStyles";




export default class Screen2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            todoNode:  this.props.navigation.state.params.todoListArg,
        }
    }

    componentDidMount(){
        alert(this.state.todoNode);
    }
    render(){
        return(
            <LinearGradient colors={["#000046", "#1CB5E0"]} style={screenStyles.gradientBackground}>
                <Text style={screenStyles.title}>Screen Two</Text>
                
            </LinearGradient>
        );
    }
}


