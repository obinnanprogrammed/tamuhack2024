import { useState } from "react";
import { Pressable } from "react-native";
import { StyleSheet, View, Image } from "react-native";

const AddButton = ({ onPress }) => {

  return (
    <Pressable style={({pressed}) => [styles.plusButton, pressed && styles.plusButtonPressed]} onPress={() => onPress()}>
      <Image
        style={styles.plusImage}
        source={require("../assets/plus.png")}
      ></Image>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  plusButton: {
    position: "absolute",
    top: 7,
    left: 14,
  },

  plusButtonPressed: {
    opacity: 0.5
  },

  plusImage: {
    height: 40,
    resizeMode: "contain",
  },
});

export default AddButton;
