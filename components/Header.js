import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Amaranth_400Regular, Amaranth_700Bold } from '@expo-google-fonts/amaranth';
import { useFonts } from 'expo-font';
export default function Header() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Amaranth_700Bold,
    Amaranth_400Regular,
  });

  const openSettings = () => {
    navigation.navigate("Settings");
  }

  const openNotifications = () => {
    navigation.navigate("Notifications");
  }

    return(
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>SwipeTern</Text>
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
      fontFamily: 'Amaranth_700Bold',
      fontSize: 30,
      fontWeight:'400',
      marginRight: 110
    },
    settingsIcon: {
      width: 40,
      height: 40,
    },
  });