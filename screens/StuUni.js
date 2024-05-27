import * as React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Alert,
  Text,
  View,
  Button,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PalmTree from "../components/PalmTree";
import { LinearGradient } from "expo-linear-gradient";
import BackNavBar from "../components/BackNavBar";
import BlueButton from "../components/BlueButton";
import { Keyboard } from "react-native";

export default function UniAttend({ route }) {
  const navigation = useNavigation();
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");
  
  const { email, firstName, lastName } = route.params;
  // Handle database stuff here
  const handleUniversityInput = () => {
    navigation.navigate("Student Grad Date", { 
      email: email, 
      firstName: firstName, 
      lastName: lastName, 
      university: university, 
      major: major });
  };

  return (
    <View style={styles.component}>
      <LinearGradient style={styles.gradient} colors={["#F0F6E8", "#F2DDC3"]}>
        <PalmTree
          style={styles.centeredItems}
          imgSource={require("../assets/palm.png")}
          children={
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.wide}>
                <BackNavBar
                  onPress={() => navigation.navigate("Student/Recruiter")}
                ></BackNavBar>
                <View style={styles.centeredItems}>
                  <View style={styles.centeredItems}>
                    <Text style={styles.text}>What college do you attend?</Text>
                    <TextInput
                      placeholder={"Enter your university"}
                      style={styles.input}
                      onChangeText={(text) => setUniversity(text)}
                    />
                  </View>

                  <View style={styles.centeredItems}>
                    <Text style={styles.majorText}>What is your major?</Text>
                    <TextInput
                      placeholder={"Enter your major"}
                      style={styles.input}
                      onChangeText={(text) => setMajor(text)}
                    />
                  </View>

                  <View style={{ paddingTop: 40 }}>
                    <BlueButton
                      secondaryTitle="Next"
                      onPress={handleUniversityInput}
                    ></BlueButton>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
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
    marginBottom: 30,
    paddingHorizontal: 20,
    color: "#000",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },

  wide: {
    padding: 20,
    width: "100%",
  },

  majorText: {
    color: "#000",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    borderColor: "black",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 90,
    fontSize: 20,
    width: 300,
    textAlign: "center",
  },
});
