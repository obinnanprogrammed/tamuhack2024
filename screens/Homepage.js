import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PalmTree from '../components/PalmTree';
import Carousel from 'react-native-new-snap-carousel';
export default function Home() {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={['#F0F6E8', '#F2DDC3']}
    >
      <PalmTree
        imgSource={require('../assets/palm.png')}
        children={(
          <View style={styles.container}>
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
            {/* Add other components or content here */}
            <View>
                <Carousel
                    data={[
                    {
                        title: 'Item 1',
                        text: 'Text 1',
                        image: require('../assets/theHomieMark.jpg'),
                    },
                    {
                        title: 'Item 2',
                        text: 'Text 2',
                        image: require('../assets/theHomieMark.jpg'),
                    },
                    {
                        title: 'Item 3',
                        text: 'Text 3',
                        image: require('../assets/theHomieMark.jpg'),
                    },
                    {
                        title: 'Item 4',
                        text: 'Text 4',
                        image: require('../assets/theHomieMark.jpg'),
                    },
                    {
                        title: 'Item 5',
                        text: 'Text 5',
                        image: require('../assets/theHomieMark.jpg'),
                    },
                    ]}
                    renderItem={({ item, index }) => (
                    <View
                        style={{
                        backgroundColor: 'floralwhite',
                        height: 620,
                        marginLeft: 20,
                        marginRight: 20,
                        borderRadius: 20,
                        }}
                    >
                    <Image
                      source={item.image}
                      style={{ flex: 1, width: '100%', resizeMode: 'cover', borderRadius: 20 }}
                    />

                    </View>
                    )}
                    sliderWidth={380}
                    itemWidth={390}
                    layout={'tinder'}
                />
            </View>
          </View>
        )}
      />
    </LinearGradient>
  );
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