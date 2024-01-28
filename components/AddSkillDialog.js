import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { StyleSheet } from "react-native";
import { View, Text, Dimensions, TextInput, Image } from "react-native";
import BlueButton from "./BlueButton";
import { useState } from "react";

const dialogWidth = 300;
const dialogHeight = 600;

const AddSkillDialog = ({ title, active, addExpFunc }) => {
  const [currTitle, setCurrTitle] = useState();
  const [currSMonth, setCurrSMonth] = useState();
  const [currSDay, setCurrSDay] = useState();
  const [currSYear, setCurrSYear] = useState();
  const [currEMonth, setCurrEMonth] = useState();
  const [currEDay, setCurrEDay] = useState();
  const [currEYear, setCurrEYear] = useState();

  const addExperience = () => {
    let startFormatted = `${currSMonth}-${currSDay}-${currSYear}`;
    let endFormatted = `${currEMonth}-${currEDay}-${currEYear}`;
    addExpFunc(currTitle, startFormatted, endFormatted);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={[
          styles.container,
          active ? { display: "flex" } : { display: "none" },
        ]}
      >
        <Text style={styles.title}>{title}</Text>

        <View style={styles.inputGroup}>
          <View>
            <Text style={styles.inputLabel}>Experience Title</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setCurrTitle(text)}
            ></TextInput>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Start Date</Text>
          <View style={styles.dateView}>
            <TextInput
              placeholder="MM"
              style={styles.input}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={(text) => setCurrSMonth(text)}
              defaultValue=""
            ></TextInput>
            <Text>-</Text>
            <TextInput
              placeholder="DD"
              style={styles.input}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={(text) => setCurrSDay(text)}
              defaultValue=""
            ></TextInput>
            <Text>-</Text>
            <TextInput
              placeholder="YYYY"
              style={styles.input}
              keyboardType="number-pad"
              maxLength={4}
              onChangeText={(text) => setCurrSYear(text)}
              defaultValue=""
            ></TextInput>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>End Date</Text>
          <View style={styles.dateView}>
            <TextInput
              placeholder="MM"
              style={styles.input}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={(text) => setCurrEMonth(text)}
              defaultValue=""
            ></TextInput>
            <Text>-</Text>
            <TextInput
              placeholder="DD"
              style={styles.input}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={(text) => setCurrEDay(text)}
              defaultValue=""
            ></TextInput>
            <Text>-</Text>
            <TextInput
              placeholder="YYYY"
              style={styles.input}
              keyboardType="number-pad"
              maxLength={4}
              onChangeText={(text) => setCurrEYear(text)}
              defaultValue=""
            ></TextInput>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <BlueButton
            secondaryTitle={"Add"}
            onPress={() => {
              addExperience();
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F6E8",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    position: "absolute",
    width: dialogWidth,
    height: dialogHeight,
    left: (Dimensions.get("window").width - dialogWidth) / 2,
    top: (Dimensions.get("window").height - dialogHeight) / 2,
    padding: 32,
    zIndex: 100,
    borderRadius: 30,
  },

  inputGroup: {
    marginBottom: 20,
  },

  buttonGroup: {
    marginTop: 200,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },

  dateView: {
    flexDirection: "row",
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },

  inputLabel: {
    fontSize: 18,
    paddingBottom: 12,
  },
});

export default AddSkillDialog;
