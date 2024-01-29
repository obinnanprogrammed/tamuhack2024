import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Chat, CreateAccount, Home, Login, Messages, Profile, RecCompany, 
  RecInternship, RecHome, RecSkill, Settings, StudentORecruiter, StuExp, StuGrad, StuInterests,
  StuPic, StuSkill, StuUni, Welcome } from './screens';
import Notifications from './screens/Notifications';

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
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Create Account" component={CreateAccount}></Stack.Screen> 
        <Stack.Screen options={{ headerShown: false }} name="Messages" component={Messages}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Chat" component={Chat}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Rec Home" component={RecHome}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Settings" component={Settings}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Notifications" component={Notifications}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student/Recruiter" component={StudentORecruiter}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Experience" component={StuExp}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Grad Date" component={StuGrad}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Skills" component={StuSkill}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Interests" component={StuInterests}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student Pic Upload" component={StuPic}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Student University" component={StuUni}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Recruiter Company" component={RecCompany}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Recruiter Internships" component={RecInternship}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Recruiter Skills" component={RecSkill}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
