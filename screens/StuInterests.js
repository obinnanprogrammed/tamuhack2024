import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PalmTree from "../components/PalmTree";
import { LinearGradient } from "expo-linear-gradient";
import BackNavBar from "../components/BackNavBar";
import BlueButton from "../components/BlueButton";
import MultiSelect from "../components/MultiSelect";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function StuExp({ route }) {
  const navigation = useNavigation();
  const [locations, setLocations] = useState(["Houston", "Jackson", "Albany"])
  const [roles, setRoles] = useState(["CEO", "Software Developer", "AI Engineer"])
  const { email, firstName, lastName, university, major, startMonth, 
    startYear, gradMonth, gradYear, experience, languages, libraries, devTools } = route.params;
  
  const handleInput = async () => {
    try {
      const accountProps = {
        devtools: devTools,
        email: email,
        experience: experience,
        firstName: firstName,
        gradMonth: gradMonth,
        gradYear: gradYear,
        languages: languages,
        lastName: lastName,
        libraries: libraries,
        locations: locations,
        major: major,
        roles: roles,
        startMonth: startMonth,
        startYear: startYear,
        university: university
      };
      const doc = await addDoc(collection(db, "students"), accountProps);
      console.log("Document successfully written with ID", doc.id);
      navigation.navigate("Home", {
        email: email,
        firstName: firstName,
        lastName: lastName,
        status: "student"
      });
    } catch(error) {
      console.error("Error adding document: ", error)
    }
    
  };

  return (
    <View style={styles.component}>
      <LinearGradient style={styles.gradient} colors={["#F0F6E8", "#F2DDC3"]}>
        <PalmTree
          style={styles.centeredItems}
          imgSource={require("../assets/palm.png")}
          children={
            <View style={styles.wide}>
              <BackNavBar
                onPress={() => navigation.navigate("Student Skills")}
              ></BackNavBar>
              <View style={styles.centeredItems}>
                <Text style={styles.text}>Interested Locations</Text>

                <MultiSelect name="Locations" list={locations} setList={setLocations}></MultiSelect>

                <Text style={styles.text}>Interested Roles</Text>
                <MultiSelect name="Roles" list={roles} setList={setRoles}></MultiSelect>
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
    fontSize: 32,
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
