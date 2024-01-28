import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Swipeable } from 'react-native-gesture-handler/Swipeable';
import { Chat, CreateAccount, Home, Login, Messages, Profile, RecCompany, 
  RecInternship, RecSkill, Settings, StudentORecruiter, StuExp, StuGrad, StuInterests,
  StuPic, StuSkill, UniAttend, Welcome } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    /*
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> */

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Chat">
    //     <Stack.Screen options={{ headerShown: false }} name="Chat" component={Chat}></Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Messages">
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Create Account" component={CreateAccount}></Stack.Screen> 
        <Stack.Screen options={{ headerShown: false }} name="Messages" component={Messages}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Chat" component={Chat}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Settings" component={Settings}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student/Recruiter" component={StudentORecruiter}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Experience" component={StuExp}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Grad Date" component={StuGrad}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Skills" component={StuSkill}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Pic Upload" component={StuPic}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student University" component={UniAttend}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Recruiter Company" component={RecCompany}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Recruiter Internships" component={RecInternship}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Recruiter Skills" component={RecSkill}></Stack.Screen>
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
