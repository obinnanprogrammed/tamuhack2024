import { View, TextInput } from "react-native";


const InputField = () => {
  return (
    <View>
      <TextInput placeholder={"Type in your university"} style={[
        {
          borderColor: "black",
          borderBottomWidth: 1,
          fontSize: 20,
          width: 300,
          textAlign: "center"
        }
      ]} />
    </View>
  );
}
 
export default InputField;