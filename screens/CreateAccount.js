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
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

export default function CreateAccount() {
  const navigation = useNavigation();
  
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const handleButtonPress = async () => {
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    
        console.log('Account created:', user);
        // Optionally, you can automatically sign in the user after account creation
        await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate('Student/Recruiter');
      } catch (error) {
        console.error('Account creation error:', error.message);
        // Handle error, e.g., show error message
      }
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
                flexDirection: "column-reverse"
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
                      value={firstName}
                      onChangeText={(text) => setFirstName(text)}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Last Name"
                      underlineColorAndroid="transparent"
                      value={lastName}
                      onChangeText={(text) => setLastName(text)}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Email"
                      underlineColorAndroid="transparent"
                      value={email}
                      onChangeText={(text) => setEmail(text)}
                    />

                    {/* Password input */}
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      secureTextEntry
                      underlineColorAndroid="transparent"
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Confirm Password"
                      secureTextEntry
                      underlineColorAndroid="transparent"
                      value={confirmPassword}
                      onChangeText={(text) => setConfirmPassword(text)}
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
