import * as React from "react";
import { StyleSheet, Alert, Text, View, Button, TextInput, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PalmTree from "../components/PalmTree";
import { LinearGradient } from "expo-linear-gradient";
import BackNavBar from "../components/BackNavBar";
import BlueButton from "../components/BlueButton";
import { Keyboard } from "react-native";

export default function UniAttend() {
  const navigation = useNavigation();

  return (
    <View style={styles.component}>
      <LinearGradient style={styles.gradient} colors={["#F0F6E8", "#F2DDC3"]}>
        <PalmTree
          style={styles.centeredItems}
          imgSource={require("../assets/palm.png")}
          children={
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.wide}>
              {/* <BackNavBar
                onPress={() => navigation.navigate("Student/Recruiter")}
              ></BackNavBar> */}
              <View style={styles.centeredItems}>
                <Text style={styles.text1}>Messages</Text>
                <Text style={styles.text}>________________</Text>
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

  text1: {
    marginTop: 70,
    marginBottom: 0,
    color: "#000",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
  },

  text: {
    marginTop: 0,
    marginBottom: 0,
    paddingHorizontal: 10,
    color: "#000",
    fontSize: 40,
    textAlign: "left",
  },

  wide: {
    padding: 20,
    width: "100%",
  },
});
