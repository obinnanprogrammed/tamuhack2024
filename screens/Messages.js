
import * as React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PalmTree from "../components/PalmTree";
import BottomNavBar from '../components/BottomNavBar';
import { useNavigation } from '@react-navigation/native';

export default function MessagesHome() {
  const navigation = useNavigation();
  const data = [
    { id: "1", sender: "Tom", message: "Hello there!", profilePic: "https://imgs.search.brave.com/r2vmNVKwdB_xlEQYbsOwpmZFQh4akcJjNTjApKPxzyU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZXRy/by5jby51ay93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wMS9T/RUlfMTg3Mjg1OTUz/LWUzNzIuanBnP3F1/YWxpdHk9OTAmc3Ry/aXA9YWxsJnpvb209/MSZyZXNpemU9NjQ0/LDQyOQ" },
    { id: "2", sender: "Alice", message: "How are you?", profilePic: "https://imgs.search.brave.com/j-rsyVP0gE5nSXqDAP70tk-EBXrzHbX1BzvvzJCW8qM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5qYzFNelkw/TlRndE5XSmxNUzAw/TWpRNUxUbGxNemt0/TVdJd01EazRNemho/TldGaFhrRXlYa0Zx/Y0dkZVFWUm9hWEpr/VUdGeWRIbEpibWRs/YzNScGIyNVhiM0py/Wm14dmR3QEAuX1Yx/X1FMNzVfVVg1MDBf/Q1IwLDAsNTAwLDI4/MV8uanBn" },
    { id: "3", sender: "Mickey", message: "Come to Disney!", profilePic: "https://imgs.search.brave.com/awdguRICbw9H5Ew9DZy2j-H0hHfXCPPsb64m8DW4Msc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzE4LzgzLzgx/LzM2MF9GXzUxODgz/ODEwOV9wRlBnS2ps/bnBZMFdzS1ZKWHpT/QURVamk1UHZjSnQ1/Ui5qcGc" },
    { id: "4", sender: "Sophia", message: "For Real?!", profilePic: "https://imgs.search.brave.com/aBS0oGBHl24PQcuCudT1tIPg5J9woUoEuufy9GEMkEw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ExLzIw/LzI1L2ExMjAyNTM1/MzU2NDYyNjRlNGYy/NGFiZjAxZTcwNGUz/LmpwZw" },
    { id: "5", sender: "Peter", message: "Meeting tmr?", profilePic: "https://imgs.search.brave.com/gBF3YLaOkKBlIhvZPX0NenDXBr_TOIBwAUQaSw8VBrE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Rp/c25leS9pbWFnZXMv/Mi8yNS9QZXRlcl9Q/YW5faW5fS2luZ2Rv/bV9IZWFydHMucG5n/L3JldmlzaW9uL2xh/dGVzdC9zY2FsZS10/by13aWR0aC1kb3du/LzI1MD9jYj0yMDE0/MDYwODE4MjEyMA.jpeg" },
    { id: "6", sender: "Jyo", message: "Bobba?", profilePic: "https://imgs.search.brave.com/19YQBJQY_EPEgcErHEb2da7pTjnPh1mqT_B3damNr2Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZ29vZnktcGlj/dHVyZXMtcGpvMmto/NHNraTNzcTY1YS5q/cGc" },
    { id: "7", sender: "Obinna", message: "No!More Physics?!", profilePic: "https://imgs.search.brave.com/vjM7vSDXxgcf_N6SI9lYaPQBgmLVH8y10GC-0ZLFcnc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/NS81Ny9NYXVpX0Rp/c25leS53ZWJwLzUx/MnB4LU1hdWlfRGlz/bmV5LndlYnAucG5n" },
    // Add more messages as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.messageItem}
      onPress={() => navigation.navigate('Chat', { sender: item.sender, messages: [item] })}
    >
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
              <View style={[styles.centeredItems, styles.bottomBorder]}>
                <Text style={styles.text1}>Messages</Text>
              </View>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
              <BottomNavBar />
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
    marginBottom: 5,
    color: "#000",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
  },

  bottomBorder: {
    borderBottomWidth: 1,
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
    borderRadius: 10,
    backgroundColor: "#ffffff",
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

  shadow: {
    paddingTop: 40,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 4
    }
  }
});
