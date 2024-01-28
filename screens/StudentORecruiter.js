import * as React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Alert, Text, View, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PalmTree from "../components/PalmTree";
import { LinearGradient } from "expo-linear-gradient";
import PromptButton from "../components/PromptButton";
import TwoLayerButton from "../components/Button";
import BackNavBar from "../components/BackNavBar";
import BlueButton from "../components/BlueButton";

export default function StudentORecruiter() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.component}>
      <LinearGradient style={styles.gradient} colors={["#F0F6E8", "#F2DDC3"]}>
        <PalmTree
          style={styles.centeredItems}
          imgSource={require("../assets/palm.png")}
          children={
            <View style={styles.wide}>
              <View style={styles.centeredItems}>
                <Text style={styles.text}>I am a...</Text>
                <PromptButton
                  title="Student"
                  style={{ marginTop: 60 }}
                  id={1}
                  selected={selected}
                  onPress={() => setSelected(1)}
                ></PromptButton>
                <PromptButton
                  title="Recruiter"
                  style={{ marginTop: 20, marginBottom: 40 }}
                  id={2}
                  selected={selected}
                  onPress={() => setSelected(2)}
                ></PromptButton>
                <BlueButton secondaryTitle="Next" onPress={() => navigation.navigate("Student University")}></BlueButton>
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
    marginTop: 50,
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
  },

  wide: {
    padding: 20,
    width: "100%",
  },
});
