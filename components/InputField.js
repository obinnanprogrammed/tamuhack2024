import { TextInput } from "react-native-gesture-handler";

const InputField = () => {
  return (
    <TextInput placeholder={"Hello"} style={{
      borderColor: "black",
      borderWidth: 1
    }} />
  );
}
 
export default InputField;