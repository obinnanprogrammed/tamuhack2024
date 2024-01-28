import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

const BottomNavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Image
          source={require('../assets/chat.png')} // Replace with your icon path
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Image
          source={require('../assets/home.png')} // Replace with your icon path
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Image
          source={require('../assets/user.png')} // Replace with your icon path
          style={styles.icon}
        />
      </TouchableOpacity>
      {/* Add more icons as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#23c6cb',
    height: 75,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    // Style your icon as needed
  },
});

export default BottomNavBar;