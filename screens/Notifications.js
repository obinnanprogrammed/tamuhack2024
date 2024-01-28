import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function Notifications() {
  const [profileImage, setProfileImage] = useState('https://imgs.search.brave.com/Xj1va505hTraZfGFvQXZamtU8YdAR8EOotVBIymqhaU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sdW1p/ZXJlLWEuYWthbWFp/aGQubmV0L3YxL2lt/YWdlcy9pbWFnZV8w/ZDMwYjk5Ni5qcGVn/P3JlZ2lvbj0wLDAs/MTI4MCw3MjA');
  const username = "Mickey"; // Replace with the user's actual username
  const bio = "Software Developer"; // Replace with the user's actual bio

  return (
    <LinearGradient style={styles.container} colors={['#F0F6E8', '#F2DDC3']}>
      <View style={styles.profileContainer}>
        <Text style={styles.title}>Notifications</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Updated to 'flex-start'
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
    fontWeight: "bold"
  }
  // Other styles for additional profile information can be added here
});
