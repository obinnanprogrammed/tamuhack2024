import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screen from './screens';

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
      <Stack.Navigator initialRouteName="Student University">
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Screen.Welcome}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Screen.Login}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Create Account" component={Screen.CreateAccount}></Stack.Screen> 
        <Stack.Screen options={{ headerShown: false }} name="Messages" component={Screen.Messages}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Profile" component={Screen.Profile}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Chat" component={Screen.Chat}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Screen.Home}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Rec Home" component={Screen.RecHome}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Settings" component={Screen.Settings}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Notifications" component={Screen.Notifications}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student/Recruiter" component={Screen.StudentORecruiter}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Experience" component={Screen.StuExp}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Grad Date" component={Screen.StuGrad}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Skills" component={Screen.StuSkill}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Interests" component={Screen.StuInterests}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Pic Upload" component={Screen.StuPic}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student University" component={Screen.StuUni}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Recruiter Company" component={Screen.RecCompany}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Recruiter Internships" component={Screen.RecInternship}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Recruiter Skills" component={Screen.RecSkill}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
