import { StyleSheet, Text } from "react-native";
import { Pressable } from "react-native";

const SkillField = ({ title="Experience", startDate="2024-01-01", endDate="2024-01-01" }) => {
  return (
    <Pressable style={styles.container} onPress={() => {}}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{startDate} - {endDate}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {

    padding: 10,
    marginBottom: 12,
    width: '100%',
    height: '40%',
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20
  },

  title: {
    fontSize: 16
  },

  date: {
    fontSize: 12,
    opacity: 0.5
  }
})
 
export default SkillField;