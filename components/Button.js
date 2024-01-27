import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TwoLayerButton({ onPress, title, secondaryTitle }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.outerContainer}>
        <View style={styles.secondaryLayer}>
          <Text style={styles.secondaryText}>{secondaryTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row', // Arrange the inner containers horizontally
  },
  innerContainer: {
    backgroundColor: '#23c6cb',
    padding: 10,
    borderRadius: 15,
    marginRight: 5, // Adjust the spacing between the layers
  },
  secondaryLayer: {
    backgroundColor: '#F2DDC3',
    padding: 10,
    borderRadius: 30,
    shadowOffset: {
        width: 0,
        height: 8
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowColor: "#D9D9D9",
    width: 225,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondaryText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});