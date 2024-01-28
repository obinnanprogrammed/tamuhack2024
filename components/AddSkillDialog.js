import { StyleSheet } from "react-native";
import { View, Text, Dimensions } from "react-native";

const dialogWidth = 300;
const dialogHeight = 600;

const AddSkillDialog = (title) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F6E8",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 4,
    position: "absolute",
    width: dialogWidth,
    height: dialogHeight,
    left: (Dimensions.get('window').width - dialogWidth) / 2,
    top: (Dimensions.get('window').height - dialogHeight) / 2,
    padding: 32,
    zIndex: 100
  }
})
 
export default AddSkillDialog;