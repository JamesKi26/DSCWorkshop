import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView  } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { screenStyles } from "../StyleSheets/ScreenStyles";



export default class Screen1 extends Component {
    //constructor 
    constructor(props){
        super(props);
        this.state = {
            todoList: [],
            todoItem: "",
        }
    }
    
    render(){
        return(
            <LinearGradient colors={["#000046", "#1CB5E0"]} style={screenStyles.gradientBackground}>
                <Text style={screenStyles.title}>Screen One</Text>
                
                <KeyboardAvoidingView  behavior="padding" enabled>
                    <Text style = {screenStyles.text}>Type out a reminder</Text>
                    <TextInput
                        style={screenStyles.input}
                        editable={true}
                        placeholder="Add Reminder"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        onChangeText = {(text) => this.setState({todoItem: text})
                    }/>
                </KeyboardAvoidingView>
                
                <TouchableOpacity onPress = {()=> {
                    alert("added item to list")
                    this.state.todoList.push(this.state.todoItem)
                }}
                style={screenStyles.buttonContainer}>
                    <Text style = {screenStyles.buttonText}>Add to List</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress = {()=> {this.props.navigation.navigate("Screen2", {todoListArg: this.state.todoList})}}
                style={screenStyles.buttonContainer}>
                    <Text style = {screenStyles.buttonText}>Navigate to Screen 2</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}


