import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import PalmTree from "../components/PalmTree";
import { useNavigation } from "@react-navigation/native";
import BlueButton from "../components/BlueButton";

export default function CreateAccount() {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    // Your button press logic goes here
    navigation.navigate("Student/Recruiter");
  };
  const handleToSignupPress = () => {
    // Your button press logic goes here
    navigation.navigate("Login");
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
                flexDirection: "column-reverse",
                borderWidth: 5,
                borderColor: "black",
              }}
            >
              <View style={styles.whitePart}>
                <View>
                  <Text style={styles.loginText}>Create An Account</Text>
                  <TouchableOpacity onPress={handleToSignupPress}>
                    <Text style={styles.dontHaveAccountText}>
                      Already have an account?
                      <Text style={styles.signUpText}> Login</Text>
                    </Text>
                  </TouchableOpacity>
                  <View style={{ marginTop: 25 }}>
                    <TextInput
                      style={styles.input}
                      placeholder="First Name"
                      underlineColorAndroid="transparent"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Last Name"
                      underlineColorAndroid="transparent"
                    />
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
                    <TextInput
                      style={styles.input}
                      placeholder="Confirm Password"
                      secureTextEntry
                      underlineColorAndroid="transparent"
                    />
                  </View>
                  <View>
                    <View
                      style={{
                        marginTop: 20,
                        marginBottom: 30,
                        alignItems: "center",
                      }}
                    >
                      <BlueButton
                        onPress={handleButtonPress}
                        title="Primary Layer"
                        secondaryTitle="Sign Up"
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
    borderRadius: 0,
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  centeredButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  debug: {
    borderColor: "black",
    borderWidth: 2,
  },
});
