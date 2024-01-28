import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function Profile() {
  const [profileImage, setProfileImage] = useState('https://imgs.search.brave.com/Xj1va505hTraZfGFvQXZamtU8YdAR8EOotVBIymqhaU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sdW1p/ZXJlLWEuYWthbWFp/aGQubmV0L3YxL2lt/YWdlcy9pbWFnZV8w/ZDMwYjk5Ni5qcGVn/P3JlZ2lvbj0wLDAs/MTI4MCw3MjA');
  const username = "Mickey"; // Replace with the user's actual username
  const bio = "Software Developer"; // Replace with the user's actual bio

  const changeImage = () => {
    // Implement logic to change the profile image URL
    // For simplicity, we'll use a placeholder URL here
    setProfileImage('https://example.com/placeholder-profile-image.jpg');
  };

  return (
    <LinearGradient style={styles.container} colors={['#F0F6E8', '#F2DDC3']}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={changeImage}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        </TouchableOpacity>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.bio}>{bio}</Text>
        {/* Additional profile information can be added here */}
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
  // Other styles for additional profile information can be added here
});
