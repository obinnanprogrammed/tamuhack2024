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

export default function StuGrad({ route }) {
  const navigation = useNavigation();
  const [sMonth, setSMonth] = useState(1);
  const [sYear, setSYear] = useState(1900);
  const [gMonth, setGMonth] = useState(1);
  const [gYear, setGYear] = useState(2001);
  const [message, setMessage] = useState("");
  const { email, firstName, lastName, university, major } = route.params;

  const validateInput = (text, id) => {
    switch(id) {
      case 1:
        if(text < 1 || text > 12) {
          setMessage("Month must be between January (1) and December (12).");
        } else {
          setMessage("");
          setSMonth(text);
        }
      case 2:
        if(text < 1900) {
          setMessage("You cannot have possibly started that early.");
        } else if(text > 2024) {
          setMessage("Dude, we are not time traveling.");
        } else {
          setMessage("");
          setSYear(text);
        }
      case 3:
        if(text < 1 || text > 12) {
          setMessage("Month must be between January (1) and December (12).")
        } else if(text < sMonth && sYear === gYear) {
          setMessage("Graduation date cannot be before start date.")
        } else {
          setMessage("");
          setGMonth(text);
        }
      case 4:
        if(text < 1900) {
          setMessage("You cannot have possibly started that early.");
        } else if(text < sYear) {
          setMessage("Graduation date cannot be before start date.");
        } else {
          setMessage("");
          setGYear(text);
        }
    }
  };

  const handleInput = () => {
    navigation.navigate("Student Experience", {
      email: email,
      firstName: firstName,
      lastName: lastName,
      university: university,
      major: major,
      startMonth: sMonth,
      startYear: sYear,
      gradMonth: gMonth,
      gradYear: gYear
    });
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
                      onPress={handleInput}
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
