import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MultiSelect from "../components/MultiSelect";
import BackNavBar from "../components/BackNavBar";
import BottomNavBar from "../components/BottomNavBar";

export default function Profile() {
  const [profileImage, setProfileImage] = useState(
    "https://imgs.search.brave.com/Xj1va505hTraZfGFvQXZamtU8YdAR8EOotVBIymqhaU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sdW1p/ZXJlLWEuYWthbWFp/aGQubmV0L3YxL2lt/YWdlcy9pbWFnZV8w/ZDMwYjk5Ni5qcGVn/P3JlZ2lvbj0wLDAs/MTI4MCw3MjA"
  );
  const username = "Mickey"; // Replace with the user's actual username
  const bio = "Software Developer"; // Replace with the user's actual bio
  const education = "Texas A&M University";

  const changeImage = () => {
    // Implement logic to change the profile image URL
    // For simplicity, we'll use a placeholder URL here
    setProfileImage("https://example.com/placeholder-profile-image.jpg");
  };

  const [skills, setSkills] = useState([
    "Software Developer",
    "Artificial Intelligence"
  ]);
  const [experience, setExperience] = useState([
    "Google",
    "Microsoft"
  ]);
  const [interests, setInterests] = useState([
    "Artificial Intelligence",
    "Web Development"
  ]);

  return (
    <LinearGradient style={styles.container} colors={["#F0F6E8", "#F2DDC3"]}>
      {/* <View style={styles.backNav}>
        <BackNavBar onPress={() => alert("Hi")} />
      </View>
      <View style={styles.chatNav}>
        <BackNavBar source={require("../assets/chat.png")} onPress={() => alert("Hi")} />
      </View> */}
      <View style={styles.profileContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={changeImage}>
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          </TouchableOpacity>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.field}>{bio}</Text>
          <Text style={styles.field}>{education}</Text>
        </View>
        {/* Additional profile information can be added here */}

        <View style={styles.profileInfo}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <MultiSelect
              name="Skills"
              list={skills}
              setList={setSkills}
              disabled
            ></MultiSelect>
            <MultiSelect
              name="Experience"
              list={experience}
              setList={setExperience}
              disabled
            ></MultiSelect>
            <MultiSelect
              name="Interests"
              list={interests}
              setList={setInterests}
              disabled
            ></MultiSelect>
          </ScrollView>
        </View>

      </View>
        <BottomNavBar></BottomNavBar>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start", // Updated to 'flex-start'
  },
  backNav: {
    position: "absolute",
    right: 330
  },
  chatNav: {
    position: "absolute",
    right: 0
  },
  profileContainer: {
    alignItems: "center",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 70,
    marginBottom: 20,
  },
  profileInfo: {
    marginTop: 20,
    height: 500,
  },
  scrollView: {
    // height:
  },
  username: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },

  header: {
    alignItems: "center",
  },

  field: {
    fontSize: 16,
    color: "gray",
    marginBottom: 2,
  },
  // Other styles for additional profile information can be added here
});
