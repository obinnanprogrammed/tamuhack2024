import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PalmTree from '../components/PalmTree';

export default function Login() {
    return (
        <View style={styles.container}>
            <PalmTree imgSource={require('../assets/palm2.png')}children={(
                <View style={styles.centeredItems}>
                    <Text style = {styles.welcomeText} >Welcome</Text>
                </View>
            )}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#23c6cb', // Change this color to your desired background color
      alignItems: 'center',
      justifyContent: 'center',
    },
    centeredItems:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        marginTop:15
    },
    welcomeText:{
        marginTop: 200,
        color: '#ffffff',
        fontSize: 64,
        fontWeight: 'bold',
    },
  });