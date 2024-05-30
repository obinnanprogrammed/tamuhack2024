import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
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
          <Image 
            source = {require('../assets/swipetern-text.png')}
            style = {styles.headerText}
          />
          <View style = {styles.iconsContainer}>
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
    iconsContainer:{
      flexDirection: 'row',
      gap:10,
    },
    headerText: {
      width: 144,
      height: 32,
    },
    settingsIcon: {
      width: 40,
      height: 40,
    },
  });