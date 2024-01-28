// import * as React from 'react';
// import { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Alert, Text, View, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// export default function Chat() {
//     return (
//         <View>
//             <Text>FIXME: create chat page</Text>
//         </View>
//     )
// }

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
      // You can add logic here to handle messages from other users or a chat server
    }
  };

  
  return (
    <View style={styles.component}>
      <LinearGradient style={styles.gradient} colors={["#F0F6E8", "#F2DDC3"]}>
        <PalmTree
          style={styles.centeredItems}
          imgSource={require("../assets/palm.png")}
        />
      </LinearGradient>
  
      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={item.sender === 'user' ? styles.userMessage : styles.otherMessage}>
              <Text>{item.text}</Text>
            </View>
          )}
        />
  
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={newMessage}
            onChangeText={(text) => setNewMessage(text)}
          />
          <Button title="Send" onPress={handleSendMessage} />
        </View>
      </View>
    </View>
  );
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#e6e6e6',
    padding: 8,
    margin: 4,
    borderRadius: 8,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
    padding: 8,
    margin: 4,
    borderRadius: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  }
});
