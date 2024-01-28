import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PalmTree from '../components/PalmTree';
import Carousel from 'react-native-new-snap-carousel';
import Header from '../components/Header';

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
            <Header />
            {/* Add other components or content here */}
            <View>
                <Carousel
                    data={[
                    {
                        title: 'Joe Mama',
                        text: 'Da googs',
                        skillsText: 'Skills: React Native, Java, C++',
                        image: require('../assets/theHomieMark.jpg'),
                    },
                    {
                        title: 'Jackson Blaziken',
                        text: 'Jane Street ',
                        skillsText: 'Skills: Getting GPA Gamed',
                        image: require('../assets/theHomieMark.jpg'),
                    },
                    {
                        title: 'Dahomie Mark',
                        text: 'Community College',
                        skillsText: 'Skills: Live. Laugh. Love.',
                        image: require('../assets/theHomieMark.jpg'),
                    },
                    {
                        title: 'Ur Mom',
                        text: 'TAMU',
                        skillsText: 'Skills: Getting finessed by the homie Mark',
                        image: require('../assets/theHomieMark.jpg'),
                    },
                    {
                        title: 'Yo Mama',
                        text: 'Harvard',
                        skillsText: 'Skills: Bruh imagine',
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
                        <View style={styles.overlayTextContainer}>
                          <Text style={styles.overlayTextTitle}>{item.title}</Text>
                          <Text style={styles.overlayText}>{item.text}</Text>
                          <Text style={styles.overlayText}>{item.skillsText}</Text>
                          <TouchableOpacity style={styles.showMoreButton}>
                            <Text style={styles.showMoreButtonText}>
                                Show More
                            </Text>
                          </TouchableOpacity>
                        </View>

                    </View>
                    )}
                    sliderWidth={380}
                    itemWidth={390}
                    layout={'tinder'}
                />
              <View style={styles.circleButtonContainer}>
                <TouchableOpacity style={styles.circleButton}>
                  <Image
                    source={require('../assets/x_icon.png')} // Specify your image path
                    style={styles.circleButtonImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleButton}>
                <Image
                    source={require('../assets/heart_icon.png')} // Specify your image path
                    style={styles.circleButtonImage}
                  />
                </TouchableOpacity>
              </View>
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
  overlayTextContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 20,
    marginBottom: 40,
  },
  overlayTextTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  overlayText: {
    fontSize: 16,
    color: 'white',
  },
  showMoreButton: {
    marginTop: 10,
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: 90,
  },
  showMoreButtonText: {
    color: 'white',
  },
  circleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 80,
  },
  circleButton: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: -30,
  },
  circleButtonImage: {
    width: 50,
    height: 50,
  },
});