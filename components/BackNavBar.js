import { View } from "react-native";
import { Pressable, Image } from "react-native";

const BackNavBar = ({ onPress = () => {}}) => {
  return (
    <View>
      <Pressable onPress={() => onPress()}>
        <Image source={require("../assets/back-button.png")} style={{
          marginTop: 80,
          width: 25,
          height: 25
        }}></Image>
      </Pressable>
    </View>
  );
};

export default BackNavBar;
