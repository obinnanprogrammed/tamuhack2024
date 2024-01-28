import { Pressable, StyleSheet, Text } from "react-native";

const MultiSelectPill = ({ name, id, onPress }) => {
  return (
    <Pressable style={({pressed}) => [styles.pressable, pressed && styles.pressableSelected]} onPress={() => {onPress(id)}}>
      <Text>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: "#F0F6E8",
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginRight: 10,
    marginBottom: 5
  },
  
  pressableSelected: {
    backgroundColor: "#e1e6d9"
  }
})
 
export default MultiSelectPill;