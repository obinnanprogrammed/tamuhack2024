import { Pressable, StyleSheet, Text, View, Image, Alert } from "react-native";
import { ScrollView } from "react-native";
import MultiSelectPill from "./MultiSelectPill";

const MultiSelect = ({ name, list, setList, disabled=false }) => {
  const addElement = () => {
    Alert.prompt("Add Activity", "", (text) => {
      setList((list) => [...list, text]);
    });
  };

  const deleteElement = (id) => {
    setList((list) => list.filter((element, index) => index != id));
  };

  return (
    <View style={styles.main}>
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressablePressed,
          disabled && {display: "none"}
        ]}
        onPress={addElement}
      >
        <Image
          style={styles.image}
          source={require("../assets/plus.png")}
        ></Image>
      </Pressable>
      <Text style={styles.title}>{name}</Text>
      {/* TODO: FIX BUTTON */}
      <View style={{ height: 75}}>
        <ScrollView contentContainerStyle={styles.scrollable}>
          {list.map((text, index) => (
            <MultiSelectPill
              name={text}
              key={index}
              id={index}
              onPress={deleteElement}
            ></MultiSelectPill>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F0F6E8",
    borderWidth: 1,
    borderRadius: 30,
    width: 300,
    height: 130,
    padding: 14,
    marginBottom: 10,
  },

  title: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5
  },

  scrollable: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10
  },

  pressable: {
    position: "absolute",
    left: 250,
  },

  pressablePressed: {
    opacity: 0.5,
  },

  image: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
});

export default MultiSelect;
