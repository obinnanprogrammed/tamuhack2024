import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PalmTree from '../components/PalmTree';
import TwoLayerButton from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation(); 
    const handleButtonPress = () => {
        // Your button press logic goes here
        console.log('Button pressed!');
        navigation.navigate('Login');
    };
    return (
        <View style={styles.container}>
            <PalmTree imgSource={'../assets/palm.png'} children={(
                <View style={styles.centeredItems}>
                    <Text style = {styles.welcomeText} >Welcome</Text>
                    <View style={styles.button}>
                        <TwoLayerButton
                            onPress={handleButtonPress}
                            title="Primary Layer"
                            secondaryTitle="Get Started"
                        />
                    </View>
                </View>
            )} />
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