import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PalmTree from "../components/PalmTree";
import { LinearGradient } from "expo-linear-gradient";
import BackNavBar from "../components/BackNavBar";
import BlueButton from "../components/BlueButton";
import MultiSelect from "../components/MultiSelect";

export default function StuExp() {
  const navigation = useNavigation();
  const handleInput = () => {
    navigation.navigate("Student Interests");
  };

  // THESE ARE TESTS ARRAYS, IMPLEMENT DATABASE PLS <3
  const [languages, setLanguages] = useState([])
  const [libraries, setLibraries] = useState([])
  const [devTools, setDevTools] = useState([])
  
  return (
    <View style={styles.component}>
      <LinearGradient style={styles.gradient} colors={["#F0F6E8", "#F2DDC3"]}>
        <PalmTree
          style={styles.centeredItems}
          imgSource={require("../assets/palm.png")}
          children={
            <View style={styles.wide}>
              <BackNavBar
                onPress={() => navigation.navigate("Student Experience")}
              ></BackNavBar>
              <View style={styles.centeredItems}>
                <Text style={styles.text}>Skills</Text>

                <MultiSelect name="Coding Languages" list={languages} setList={setLanguages}></MultiSelect>
                <MultiSelect name="Libraries and Frameworks" list={libraries} setList={setLibraries}></MultiSelect>
                <MultiSelect name="Developer Tools" list={devTools} setList={setDevTools}></MultiSelect>

                <View style={{ paddingTop: 40 }}>
                  <BlueButton
                    secondaryTitle="Next"
                    onPress={() => handleInput()}
                  ></BlueButton>
                </View>
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

  scrollStyle: {},

  scroll: {
    width: 250,
    marginBottom: 20,
    backgroundColor: "#F0F6E8",
    alignItems: "center",
    borderRadius: 30,
  },

  experienceContainer: {
    height: 200,
    borderWidth: 1,
    borderColor: "black",
    width: 300,
    marginBottom: 20,
    backgroundColor: "#F0F6E8",
    alignItems: "center",
    borderRadius: 30,
  },

  text: {
    marginTop: 50,
    marginBottom: 30,
    paddingHorizontal: 10,
    color: "#000",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },

  wide: {
    padding: 20,
    width: "100%",
  },

  label: {
    fontSize: 20,
  },

  message: {
    height: 30,
  },
});
