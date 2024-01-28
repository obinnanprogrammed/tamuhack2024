import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function BlueButton({ onPress, secondaryTitle, off = false }) {
  return (
    <Pressable onPress={onPress} disabled={off} style={({pressed}) => [styles.pressable, pressed && styles.pressableSelected]}>
      <View>
        <Text style={styles.secondaryText}>{secondaryTitle}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row", // Arrange the inner containers horizontally
  },
  innerContainer: {
    backgroundColor: "#23c6cb",
    padding: 10,
    borderRadius: 15,
    marginRight: 5, // Adjust the spacing between the layers
  },
  pressable: {
    backgroundColor: "#23C6CB",
    padding: 10,
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowColor: "#9ADBDF",
    width: 225,
  },
  pressableSelected: {
    shadowOpacity: 0,
    transform: [
      {translateY: 8}
    ]
  },

  secondaryText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
