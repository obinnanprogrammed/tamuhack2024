import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import PalmTree from "../components/PalmTree";
import { useNavigation } from "@react-navigation/native";
import BlueButton from "../components/BlueButton";
import { TouchableWithoutFeedback } from "react-native";

export default function Login() {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    // Your button press logic goes here
    navigation.navigate('Home');
  };
  const handleToSignupPress = () => {
    // Your button press logic goes here
      navigation.navigate('Create Account');
  };
  return (
    <View style={styles.container}>
      <PalmTree
        imgSource={require("../assets/palm2.png")}
        children={
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              behavior="padding"
              style={{
                height: "100%",
                flexDirection: "column-reverse"
              }}
            >
              <View style={styles.whitePart}>
                <View>
                  <Text style={styles.loginText}>Login</Text>
                  <TouchableOpacity onPress={handleToSignupPress}>
                    <Text style={styles.dontHaveAccountText}>
                      Don't have an account?
                      <Text style={styles.signUpText}> Sign up</Text>
                    </Text>
                  </TouchableOpacity>
                  <View style={{ marginTop: 40 }}>
                    <TextInput
                      style={styles.input}
                      placeholder="Email"
                      underlineColorAndroid="transparent"
                    />

                    {/* Password input */}
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      secureTextEntry
                      underlineColorAndroid="transparent"
                    />
                  </View>
                  <View>
                    <View style={{ marginBottom: 20, alignItems: "center" }}>
                      <BlueButton
                        onPress={handleButtonPress}
                        title="Primary Layer"
                        secondaryTitle="Login"
                        style={styles.centeredButton}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23c6cb",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredItems: {
    alignItems: "center",
    justifyContent: "center",
  },
  dontHaveAccountText: {
    marginTop: 5,
    color: "#333333", // Change this color to your desired color
    fontSize: 16,
  },
  signUpText: {
    color: "#22afa9", // Change this color to your desired color
  },
  loginText: {
    marginTop: 30,
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",
  },
  whitePart: {
    backgroundColor: "#F0F6E8",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: "50%",
    alignItems: "center"
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 30,
  },
  centeredButton: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
