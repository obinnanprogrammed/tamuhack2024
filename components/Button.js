import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function TwoLayerButton({ onPress, secondaryTitle }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.pressable,
        pressed && styles.pressableSelected,
      ]}
    >
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
  pressable: {
    backgroundColor: "#F0F6E8",
    padding: 10,
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowColor: "#DADFD4",
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
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
