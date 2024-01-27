import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Swipeable } from 'react-native-gesture-handler/Swipeable';
import * as Screens from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    /*
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> */
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Screens.Welcome}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Screens.Login}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Create Account" component={Screens.CreateAccount}></Stack.Screen> 
        <Stack.Screen options={{ headerShown: false }} name="Messages" component={Screens.Message}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Profile" component={Screens.Profile}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Chat" component={Screens.Chat}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Screens.Home}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Settings" component={Screens.Settings}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student/Recruiter" component={Screens.StudentORecruiter}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Experience" component={Screens.StuExp}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Grad Date" component={Screens.StuGrad}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Skills" component={Screens.StuSkill}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Pic Upload" component={Screens.StuSkill}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student University" component={Screens.UniAttend}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Recruiter Company" component={Screens.RecCompany}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Recruiter Internships" component={Screens.RecInternship}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Recruiter Skills" component={Screens.RecSkill}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
