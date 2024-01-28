import * as React from "react";
import { StyleSheet, Alert, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PalmTree from "../components/PalmTree";
import { LinearGradient } from "expo-linear-gradient";
import BackNavBar from "../components/BackNavBar";
import InputField from "../components/InputField";
import BlueButton from "../components/BlueButton";

export default function UniAttend() {
  const navigation = useNavigation();

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
                <Text style={styles.text}>What college do you attend?</Text>
                <InputField></InputField>
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
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },

  wide: {
    padding: 20,
    width: "100%",
  },
});
