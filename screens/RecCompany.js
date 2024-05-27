import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
//...import InputField from "../components/InputField";
import BlueButton from "../components/BlueButton";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import PalmTree from "../components/PalmTree";
import { LinearGradient } from "expo-linear-gradient";
import BackNavBar from "../components/BackNavBar";
import {TextInput } from "react-native";


export default function RecCom({ route }) {
  const navigation = useNavigation();
  const [company, setCompany] = useState("");

  const { email, firstName, lastName } = route.params;
  const handleInput = () => {
    navigation.navigate("Recruiter Skills", { 
      email: email, 
      firstName: firstName, 
      lastName: lastName, 
      company: company });
  };

  return (
    <View style={styles.component}>
      <LinearGradient style={styles.gradient} colors={["#F0F6E8", "#F2DDC3"]}>
        <PalmTree
          style={styles.centeredItems}
          imgSource={require("../assets/palm.png")}
          children={
            <View style={styles.wide}>
              <BackNavBar
                onPress={() => navigation.navigate("Student/Recruiter")}
              ></BackNavBar>
              <View style={styles.centeredItems}>
                <Text style={styles.text}>What company do you recruit for?</Text>
                <TextInput placeholder={"Type in your company"} style={[{
                  marginBottom: 30,
                  borderColor: "black",
                  borderBottomWidth: 1,
                  fontSize: 20,
                  width: 300,
                  textAlign: "center",
        
                }]} onChangeText={(text) => setCompany(text)}/>
                <BlueButton secondaryTitle="Next" onPress={handleInput}></BlueButton>
              </View>
            </View>
          }
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: "#F0F6E8",
  },

  centeredItems: {
    alignItems: "center",
    justifyContent: "center",
  },

  gradient: {
    width: "100%",
    height: "100%",
  },

  text: {
    marginTop: 50,
    paddingHorizontal: 20,
    color: "#000",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 150,
  },

  wide: {
    padding: 20,
    width: "100%",
  },
});
