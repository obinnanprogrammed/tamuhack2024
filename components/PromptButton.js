import { useState } from "react";
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  Pressable,
  Animated,
} from "react-native";

const PromptButton = ({ title, onPress = () => {}, style, selected, id}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.mainButton,
        style,
        pressed && styles.mainButtonHighlighted,
        (selected === id) && styles.mainButtonSelected,
      ]}
      onPress={() => onPress()}
    >
      <Text style={[
        styles.buttonText,
        (selected === id) && styles.buttonTextSelected]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: "#F0F6E8",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    width: 280,
    height: 60,
    justifyContent: "center",
    alignContent: "center",
  },

  mainButtonHighlighted: {
    backgroundColor: "#e7eddf"
  },

  mainButtonSelected: {
    backgroundColor: "#d6dbce",
  },

  buttonText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },

  buttonTextSelected: {
    fontWeight: "bold"
  }
});

export default PromptButton;
