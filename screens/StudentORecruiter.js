import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PalmTree from '../components/PalmTree';
import { LinearGradient } from 'expo-linear-gradient';
import PromptButton from '../components/PromptButton';
import TwoLayerButton from '../components/Button';

export default function StudentORecruiter() {
    return (    
        <View style={styles.component}>
            <LinearGradient style={styles.gradient} colors={["#F0F6E8", "#F2DDC3"]}>
                <PalmTree style={styles.centeredItems} imgSource={require("../assets/palm.png")} children={(
                    <View style={styles.centeredItems}>
                    <Text style = {styles.text}>I am a...</Text>
                    <PromptButton title="Student" style={{marginTop: 60}} onPress={() => alert("Hell")}></PromptButton>
                    <PromptButton title="Recruiter" style={{marginTop: 20}}></PromptButton>
                </View>
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
    },

    text: {
        marginTop: 150,
        color: '#000',
        fontSize: 48,
        fontWeight: 'bold',
    },
})