import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function Header() {
    return(
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Insert Name Here :)</Text>
          <TouchableOpacity>
            <Image
              source={require('../assets/Bell.png')}
              style={styles.settingsIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
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