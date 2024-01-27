import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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