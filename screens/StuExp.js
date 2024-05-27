import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PalmTree from "../components/PalmTree";
import { LinearGradient } from "expo-linear-gradient";
import BackNavBar from "../components/BackNavBar";
import BlueButton from "../components/BlueButton";
import { useState, useEffect } from "react";
import SkillField from "../components/SkillField";
import AddSkillDialog from "../components/AddSkillDialog";
import AddButton from "../components/AddButton";

export default function StuExp({ route }) {
  const navigation = useNavigation();
  const [experience, setExperience] = useState([
    { title: "Google", start: "2024-01-01", end: "2024-03-01", id: 0 },
  ]);
  const { email, firstName, lastName, university, 
    major, startMonth, startYear, gradMonth, gradYear } = route.params;
  const handleInput = () => {
    navigation.navigate("Student Skills", {
      email: email,
      firstName: firstName,
      lastName: lastName,
      university: university,
      major: major,
      startMonth: startMonth,
      startYear: startYear,
      gradMonth: gradMonth,
      gradYear: gradYear,
      experience: experience
    });
  };
  

  const [isAdding, setIsAdding] = useState(false);

  const deleteExperience = (id) => {
    setExperience(experience.filter((object) => object.id != id));
  };

  const addExperience = (title, start, end) => {
    newObject = { title: title, start: start, end: end, id: experience.length-1 };
    setExperience((objects) => [...objects, newObject]);
    setIsAdding(false);
  };

  useEffect(() => {
    console.log(experience);
  });

  return (
    <View style={styles.component}>
      <LinearGradient style={styles.gradient} colors={["#F0F6E8", "#F2DDC3"]}>
        <PalmTree
          style={styles.centeredItems}
          imgSource={require("../assets/palm.png")}
          children={
            <View style={styles.wide}>
              <AddSkillDialog
                title="Add Experience"
                active={isAdding}
                addExpFunc={addExperience}
              />

              <BackNavBar
                onPress={() => navigation.navigate("Student Grad Date")}
              ></BackNavBar>
              <View style={styles.centeredItems}>
                <Text style={styles.text}>Previous Experience</Text>

                <View style={styles.experienceContainer}>
                  <AddButton onPress={() => setIsAdding(true)} />

                  <Text
                    style={{
                      fontSize: 20,
                      marginVertical: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Experience
                  </Text>
                  <ScrollView
                    contentContainerStyle={[styles.scroll]}
                  >
                    <View>
                      {experience.map((object) => {
                        return (
                          <SkillField
                            key={object.id}
                            title={object.title}
                            start={object.start}
                            end={object.end}
                            id={object.id}
                            deleteFunc={deleteExperience}
                          ></SkillField>
                        );
                      })}
                    </View>
                  </ScrollView>
                </View>

                <View style={{ paddingTop: 40 }}>
                  <BlueButton
                    secondaryTitle="Next"
                    onPress={handleInput}
                    off={isAdding}
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
