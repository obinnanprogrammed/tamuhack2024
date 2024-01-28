import { StyleSheet, View } from "react-native";
import { Pressable, Image } from "react-native";

const BackNavBar = ({ onPress = () => {}, source=require("../assets/back-button.png")}) => {
  return (
    <View>
      <Pressable onPress={() => onPress()} style={styles.container}>
        <Image source={source} style={{
          width: 25,
          height: 25
        }}></Image>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    width: 40
  }
})

export default BackNavBar;
