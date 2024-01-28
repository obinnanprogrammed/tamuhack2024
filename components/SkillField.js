import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

// This component takes in a JS Object: {title, start, end, id}
const SkillField = ({ title, start, end, id, deleteFunc }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => deleteFunc(id)} style={styles.touchable} onPressIn={() => {setIsPressed(true)}} onPressOut={() => {setIsPressed(false)}}>
      <View style={[styles.container, isPressed && styles.containerPressed]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>
          {start} - {end}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F6E8",
    padding: 10,
    marginBottom: 12,
    width: 230,
    height: 60,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  containerPressed: {
    backgroundColor: "#e1e6d9",
  },

  title: {
    fontSize: 16,
  },

  date: {
    fontSize: 12,
    opacity: 0.5,
  },
});

export default SkillField;
