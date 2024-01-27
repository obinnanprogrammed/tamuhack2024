import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import PalmTree from '../components/PalmTree';
import { useNavigation } from '@react-navigation/native';
import BlueButton from '../components/BlueButton';

export default function Login() {
  const navigation = useNavigation(); 
  const handleButtonPress = () => {
  // Your button press logic goes here
    console.log('Button pressed!');
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>
      <PalmTree imgSource={require('../assets/palm2.png')} children={(
        <View style={styles.whitePart}>
          <View>
            <Text style={styles.loginText}>Login</Text>
            <TouchableOpacity>
              <Text style={styles.dontHaveAccountText}>
                Don't have an account? 
                <Text style={styles.signUpText}> Sign up</Text>
              </Text>
            </TouchableOpacity>
            <View style = {{marginTop:50}}>
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
            <View style = {{marginTop:20, alignItems:'center'}}>
            <BlueButton
              onPress={handleButtonPress}
              title="Primary Layer"
              secondaryTitle="Get Started"
              style={styles.centeredButton}
            />
            </View>
            </View>
          </View>
        </View>
      )} />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#23c6cb', // Change this color to your desired background color
      alignItems: 'center',
      justifyContent: 'center',
    },
    centeredItems:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        marginTop:15
    },
    welcomeText:{
        marginTop: 200,
        color: '#ffffff',
        fontSize: 64,
        fontWeight: 'bold',
    },
  });