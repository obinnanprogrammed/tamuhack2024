import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PalmTree from '../components/PalmTree';
import { LinearGradient } from 'expo-linear-gradient';

export default function StudentORecruiter() {
    return (    
        <View style={styles.component}>
            <LinearGradient style={styles.gradient} colors={["#F0F6E8", "#F2DDC3"]}>
                <PalmTree imgSource={require("../assets/palm.png")} children={(
                    <Text>Hello</Text>
                )} />
            </LinearGradient>
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

    gradient: {
        width: '100%',
        height: '100%'
    }
})