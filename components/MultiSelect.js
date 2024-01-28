import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";
import MultiSelectPill from "./MultiSelectPill";

const MultiSelect = ({ list, setList }) => {
  const addElement = (name) => {
    setList((list) => [...list, name]);
  };
  
  const deleteElement = (id) => {
    setList((list) => list.filter((element, index) => index != id));
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Coding Languages</Text>

      <View>
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
    height: 120,
    padding: 10,
  },

  title: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 13,
  },

  scrollable: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    height: 60,
  },
});

export default MultiSelect;
