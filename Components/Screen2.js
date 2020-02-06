import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { screenStyles } from "../StyleSheets/ScreenStyles";
import firebase from "firebase";
import 'firebase/firestore';


export default class Screen2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            todoList:  this.props.navigation.state.params.todoListArg,
        }
    }

    componentDidMount(){
        alert(this.state.todoList);

        const dbh = firebase.firestore();
        

        for(var i = 0; i < this.state.todoList.length; i++){
            dbh.collection("response").doc(i.toString()).set({
                item: this.state.todoList[i]
            });
        }

    }
    render(){
        return(
            <LinearGradient colors={["#000046", "#1CB5E0"]} style={screenStyles.gradientBackground}>
                <Text style={screenStyles.title}>Screen Two</Text>
                
            </LinearGradient>
        );
    }
}


