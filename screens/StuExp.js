import * as React from "react";
import {
  StyleSheet,
  Alert,
  Text,
  View,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PalmTree from "../components/PalmTree";
import { LinearGradient } from "expo-linear-gradient";
import BackNavBar from "../components/BackNavBar";
import BlueButton from "../components/BlueButton";
import { useState } from "react";
import SkillField from "../components/SkillField";
import AddSkillDialog from "../components/AddSkillDialog";

export default function StuExp() {
  const navigation = useNavigation();
  const [message, setMessage] = useState("");
  const [sMonth, setSMonth] = useState();
  const [sYear, setSYear] = useState();
  const [gMonth, setGMonth] = useState();
  const [gYear, setGYear] = useState();

  const handleInput = () => {
    navigation.navigate("Student Experience");
  };

  return (
    <View style={styles.component}>
      <LinearGradient style={styles.gradient} colors={["#F0F6E8", "#F2DDC3"]}>
        <PalmTree
          style={styles.centeredItems}
          imgSource={require("../assets/palm.png")}
          children={
            <View style={styles.wide}>
            <AddSkillDialog title="Add Skill"/>

              <BackNavBar
                onPress={() => navigation.navigate("Student Grad Date")}
              ></BackNavBar>
              <View style={styles.centeredItems}>
                <Text style={styles.text}>
                  Previous Experience and Involvement
                </Text>

                <View style={styles.experienceContainer}>
                    <Text style={{ fontSize: 20, marginVertical: 16, fontWeight: "bold" }}>Experience</Text>
                  <ScrollView contentContainerStyle={styles.scroll}>

                    <SkillField />
                    <SkillField />
                   
                  </ScrollView>
                </View>

                <View style={styles.experienceContainer}>
                    <Text style={{ fontSize: 20, marginTop: 16, fontWeight: "bold" }}>Insert Involvement</Text>
                  <ScrollView contentContainerStyle={styles.scroll}>

                    <SkillField />
                   
                  </ScrollView>
                </View>
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

  scroll: {
    height: '100%',
    width: 250,
    marginBottom: 20,
    backgroundColor: "#F0F6E8",
    alignItems: "center",
    borderRadius: 30
  },

  experienceContainer: {
    height: 200,
    borderWidth: 1,
    borderColor: "black",
    width: 300,
    marginBottom: 20,
    backgroundColor: "#F0F6E8",
    alignItems: "center",
    borderRadius: 30
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
