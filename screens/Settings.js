import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";


export default function Settings() {
  const navigation = useNavigation();
  const [profileImage, setProfileImage] = useState('https://imgs.search.brave.com/Xj1va505hTraZfGFvQXZamtU8YdAR8EOotVBIymqhaU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sdW1p/ZXJlLWEuYWthbWFp/aGQubmV0L3YxL2lt/YWdlcy9pbWFnZV8w/ZDMwYjk5Ni5qcGVn/P3JlZ2lvbj0wLDAs/MTI4MCw3MjA');
  const signOut = () => {
    console.log("Signing out...");
    auth.signOut()
      .then(() => {
        console.log("Sign out successful.");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.error("Sign out error:", error.message);
      });
  }

  return (
    <LinearGradient style={styles.container} colors={['#F0F6E8', '#F2DDC3']}>
      <View style={styles.profileContainer}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.logoutView}>
            <TouchableOpacity onPress={signOut}>
              <Text style={styles.logoutText}>
                Log Out
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    gap: 8,
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 70,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    paddingTop: 70,
    fontWeight: "bold",
  },
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    alignItems: 'flex-start', // Align items to the start (left)
    paddingHorizontal: 25,   // Add some padding for better appearance        // Add some margin to separate from other content
  },
  logoutView: {
    // Removed alignItems from here
  },
  logoutText: {
    fontSize: 16,
  }
});
