import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PalmTree from '../components/PalmTree';
import TwoLayerButton from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation(); 
    const handleButtonPress = () => {
        // Your button press logic goes here
        console.log('Button pressed!');
        navigation.navigate('Login');
    };
    return (
        <View style={styles.container}>
            <PalmTree imgSource={require('../assets/palm.png')} children={(
                <View style={styles.centeredItems}>
                    <Image style={styles.image} source={require("../assets/logo-shadow.png")} />
                    <Text style = {styles.welcomeText} >Welcome</Text>
                    <View style={styles.button}>
                        <TwoLayerButton
                            onPress={handleButtonPress}
                            title="Primary Layer"
                            secondaryTitle="Get Started"
                        />
                    </View>
                </View>
            )} />
        </View>
    )
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
        color: '#ffffff',
        fontSize: 64,
        fontWeight: 'bold',
    },

    image: {
        width: 150,
        height: 200,
        resizeMode: "contain",
        marginTop: 50,
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 0,
            height: 0
        },
    }
  });