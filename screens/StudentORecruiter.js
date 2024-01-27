import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PalmTree from '../components/PalmTree';  

export default function StudentORecruiter() {
    return (
        <View style={styles.component}>
            <PalmTree imgSource={require('../assets/palm.png')} children={(
                <View style={styles.centeredItems}>
                    <Text style = {styles.welcomeText}>Welcome</Text>
                </View>
            )} />
        </View>
    )
}

const styles = StyleSheet.create({
    component: {
        backgroundColor: '#F0F6E8'
    },

    centeredItems:{
        alignItems: 'center',
        justifyContent: 'center',
    },
})