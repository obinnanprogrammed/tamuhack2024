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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PalmTree from "../components/PalmTree";
import { LinearGradient } from "expo-linear-gradient";
import BackNavBar from "../components/BackNavBar";
import BlueButton from "../components/BlueButton";
import { useState } from "react";

export default function StuGrad() {
  const navigation = useNavigation();
  const [message, setMessage] = useState("");
  const [sMonth, setSMonth] = useState();
  const [sYear, setSYear] = useState();
  const [gMonth, setGMonth] = useState();
  const [gYear, setGYear] = useState();

  const validateInput = (text, id) => {
    
  };

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
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.wide}>
                <BackNavBar
                  onPress={() => navigation.navigate("Student University")}
                ></BackNavBar>
                <View style={styles.centeredItems}>
                  <Text style={styles.text}>
                    When is your start date and expected graduation date?
                  </Text>

                  <View style={{ marginBottom: 20, alignItems: "center" }}>
                    <Text style={styles.label}>Start Date</Text>
                    <View style={styles.inputRow}>
                      <TextInput
                        keyboardType="number-pad"
                        placeholder="MM"
                        maxLength={2}
                        style={{
                          width: 30,
                          textAlign: "center",
                          borderBottomWidth: 1,
                          borderColor: "black",
                        }}
                        onChangeText={(text) => validateInput(text, 1)}
                      ></TextInput>

                      <Text>-</Text>

                      <TextInput
                        keyboardType="number-pad"
                        placeholder="YYYY"
                        maxLength={4}
                        style={{
                          width: 40,
                          textAlign: "center",
                          borderBottomWidth: 1,
                          borderColor: "black",
                        }}
                        onChangeText={(text) => validateInput(text, 2)}
                      ></TextInput>
                    </View>
                  </View>

                  <View style={{ marginBottom: 20, alignItems: "center" }}>
                    <Text style={styles.label}>Expected Graduation Date</Text>
                    <View style={styles.inputRow}>
                      <TextInput
                        keyboardType="number-pad"
                        placeholder="MM"
                        maxLength={2}
                        style={{
                          width: 30,
                          textAlign: "center",
                          borderBottomWidth: 1,
                          borderColor: "black",
                        }}
                        onChangeText={(text) => validateInput(text, 3)}
                      ></TextInput>

                      <Text>-</Text>

                      <TextInput
                        keyboardType="number-pad"
                        placeholder="YYYY"
                        maxLength={4}
                        style={{
                          width: 40,
                          textAlign: "center",
                          borderBottomWidth: 1,
                          borderColor: "black",
                        }}
                        onChangeText={(text) => validateInput(text, 4)}
                      ></TextInput>
                    </View>
                  </View>

                  <Text style={styles.message}>{message}</Text>

                  <View style={{ paddingTop: 40 }}>
                    <BlueButton
                      secondaryTitle="Next"
                      onPress={() => handleInput()}
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

  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "25%",
  },

  text: {
    marginTop: 50,
    marginBottom: 30,
    paddingHorizontal: 10,
    color: "#000",
    fontSize: 30,
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
