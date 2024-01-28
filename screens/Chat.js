// import * as React from 'react';
// import { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Alert, Text, View, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import PalmTree from "../components/PalmTree";
import { LinearGradient } from "expo-linear-gradient";
import BackNavBar from "../components/BackNavBar";
import { useNavigation } from "@react-navigation/native";

// export default function Chat() {
//     return (
//         <View>
//             <Text>FIXME: create chat page</Text>
//         </View>
//     )
// }

export default function Chat({ route }) {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const returnPage = () => {
    navigation.navigate("Messages");
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
      // You can add logic here to handle messages from other users or a chat server
    }
  };
  const profilePicture =route.params.sender.profilePic;
  const name = route.params.sender.sender;

  return (
    <View style={styles.component}>
      <LinearGradient style={styles.gradient} colors={["#F0F6E8", "#F2DDC3"]}>
        <PalmTree
          style={styles.centeredItems}
          imgSource={require("../assets/palm.png")}
          children={
            <View style={styles.container}>
              <View style={styles.backNavBar}>
                <BackNavBar onPress={() => alert("Hello")}></BackNavBar>
              </View>
              <View style={styles.header}>
                <Image
                  source={{ uri: profilePicture }}
                  style={styles.profilePicture}
                />
                <Text style={styles.title}>{name}</Text>
              </View>

              <FlatList
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View
                    style={
                      item.sender === "user"
                        ? styles.userMessage
                        : styles.otherMessage
                    }
                  >
                    <Text>{item.text}</Text>
                  </View>
                )}
              />

              <KeyboardAvoidingView behavior="padding">
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Type a message..."
                    value={newMessage}
                    onChangeText={(text) => setNewMessage(text)}
                  />
                  <Button title="Send" onPress={handleSendMessage} />
                </View>
              </KeyboardAvoidingView>
            </View>
          }
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
  },
  backNavBar: {
    position: "absolute",
    left: 20,
  },
  container: {
    flex: 1,
    paddingTop: 60,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#e6e6e6",
    padding: 8,
    margin: 4,
    marginRight: 20,
    borderRadius: 8,
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#f0f0f0",
    padding: 8,
    margin: 4,
    borderRadius: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    backgroundColor: "#fff",
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderRadius: 40,
    resizeMode: "cover",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
});
