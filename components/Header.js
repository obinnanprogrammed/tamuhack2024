import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
export default function Header() {
  const navigation = useNavigation();

  const openSettings = () => {
    navigation.navigate("Settings");
  }

  const openNotifications = () => {
    navigation.navigate("Notifications");
  }

    return(
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Insert Name Here :)</Text>
          <TouchableOpacity onPress={() => openNotifications()}>
            <Image
              source={require('../assets/Bell.png')}
              style={styles.settingsIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openSettings()}>
            <Image
              source={require('../assets/Setting.png')}
              style={styles.settingsIcon}
            />
          </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30, // Adjust as needed
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
      marginBottom: 20,
    },
    headerText: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    settingsIcon: {
      width: 40,
      height: 40,
    },
  });