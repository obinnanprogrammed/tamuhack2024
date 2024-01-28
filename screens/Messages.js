import * as React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PalmTree from "../components/PalmTree";

export default function MessagesHome() {
  const data = [
    { id: "1", sender: "Tom", message: "Hello there!", profilePic: "https://imgs.search.brave.com/r2vmNVKwdB_xlEQYbsOwpmZFQh4akcJjNTjApKPxzyU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZXRy/by5jby51ay93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wMS9T/RUlfMTg3Mjg1OTUz/LWUzNzIuanBnP3F1/YWxpdHk9OTAmc3Ry/aXA9YWxsJnpvb209/MSZyZXNpemU9NjQ0/LDQyOQ" },
    { id: "2", sender: "Alice", message: "How are you?", profilePic: "https://imgs.search.brave.com/j-rsyVP0gE5nSXqDAP70tk-EBXrzHbX1BzvvzJCW8qM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5qYzFNelkw/TlRndE5XSmxNUzAw/TWpRNUxUbGxNemt0/TVdJd01EazRNemho/TldGaFhrRXlYa0Zx/Y0dkZVFWUm9hWEpr/VUdGeWRIbEpibWRs/YzNScGIyNVhiM0py/Wm14dmR3QEAuX1Yx/X1FMNzVfVVg1MDBf/Q1IwLDAsNTAwLDI4/MV8uanBn" },
    { id: "3", sender: "Mickey", message: "Meeting tmr?", profilePic: "https://imgs.search.brave.com/awdguRICbw9H5Ew9DZy2j-H0hHfXCPPsb64m8DW4Msc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzE4LzgzLzgx/LzM2MF9GXzUxODgz/ODEwOV9wRlBnS2ps/bnBZMFdzS1ZKWHpT/QURVamk1UHZjSnQ1/Ui5qcGc" },
    // Add more messages as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.messageItem}>
      <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
      <View style={styles.messageContent}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.component}>
      <LinearGradient style={styles.gradient} colors={["#F0F6E8", "#F2DDC3"]}>
        <PalmTree
          style={styles.centeredItems}
          imgSource={require("../assets/palm.png")}
          children={
            <View style={styles.wide}>
              <View style={styles.centeredItems}>
                <Text style={styles.text1}>Messages</Text>
                <Text style={styles.text}>________________</Text>
              </View>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          }
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: "#F0F6E8",
  },

  centeredItems: {
    alignItems: "center",
    justifyContent: "center",
  },

  gradient: {
    flex: 1,
  },

  text1: {
    marginTop: 70,
    marginBottom: 0,
    color: "#000",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
  },

  text: {
    marginTop: 0,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: "#000",
    fontSize: 40,
    textAlign: "left",
  },

  wide: {
    padding: 20,
    width: "100%",
    flex: 1,
  },

  messageItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10, // Set border radius to make square bubbles
    backgroundColor: "#e0e0e0", // Set background color for bubbles
    marginBottom: 10,
  },

  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  messageContent: {
    flex: 1,
  },

  sender: {
    fontSize: 18,
    fontWeight: "bold",
  },

  message: {
    fontSize: 16,
  },
});
