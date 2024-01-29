import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PalmTree from '../components/PalmTree';
import Carousel from 'react-native-new-snap-carousel';
import Header from '../components/Header';
import BottomNavBar from '../components/BottomNavBar';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function Home() {
  const carouselHeight = screenHeight - 225;
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
                        title: 'Wednesday',
                        text: 'Google',
                        skillsText: 'Desired Skills:: React Native, Java, C++',
                        image: {uri: 'https://imgs.search.brave.com/UNeuI5yzLgjVCVcAcc6X2cPEaAlNCbWpcGEKscWRq8Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzlkL2U5/L2E1LzlkZTlhNTUw/NjViZWRkZWJhMmE1/OTQwYzllYzU2ODk2/LmpwZw' },
                    },
                    {
                        title: 'Jackson Blaziken',
                        text: 'American Airlines ',
                        skillsText: 'Desired Skills:: Getting GPA Gamed',
                        image: {uri: 'https://imgs.search.brave.com/3crl31mvZSWUHoXJwerdIxbEDdBqimUJrNdNkYwXtIs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/Z2FtZTguY28vMzY5/MjEyMi82NjZmZmE2/YjdiZDFiMjM1YWUy/NDk4MjM2YWY4ODNh/MC5wbmcvc2hvdw.jpeg' },
                      },
                    {
                        title: 'Dahomie Mark',
                        text: 'TI',
                        skillsText: 'Desired Skills: Live. Laugh. Love.',
                        image: {uri: 'https://imgs.search.brave.com/K4RVh62FN4LaxUnDOD9hi-XMm9a9v1oOMSvbZf1dnCM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aC10/aHVtYm5haWxlci5j/ZG4tc2ktZWR1LmNv/bS93TkRJdDhVQWdw/NWZ2X0c2eEdGMWJw/MEFqanc9LzEwMDB4/NzUwL2ZpbHRlcnM6/bm9fdXBzY2FsZSgp/L2h0dHBzOi8vdGYt/Y21zdjItc21pdGhz/b25pYW5tYWctbWVk/aWEuczMuYW1hem9u/YXdzLmNvbS9maWxl/ci8yMDExMDkyMzAy/NTAxM2RhaG9tZXkt/d2Fycmlvci5qcGc' },
                    },
                    {
                        title: 'Lacy Berd',
                        text: 'Sandia National Labs',
                        skillsText: 'Desired Skills: Getting finessed by the homie Mark',
                        image: require('../assets/theHomieMark.jpg'),
                        image: {uri: 'https://imgs.search.brave.com/b6OtbeoveokusKpqwXhobnbMJXfohPsSIVOCr0rjdXQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzU4LzQ2Lzk5/LzM2MF9GXzU1ODQ2/OTk0MV95OHZqODdC/ZnJpQ3FKa2tXZW5N/NW51VkFsY0JJOXkx/ay5qcGc' },
                    
                    },
                    {
                        title: 'Yo Mama',
                        text: 'Harvard',
                        skillsText: 'Skills: Bruh imagine',
                        image: {uri: 'https://imgs.search.brave.com/9gg657tRvTWU16Iz6IN3GEmOBNgYhS2t_4Zv7KgQ5ds/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMyLzRl/LzQ0LzMyNGU0NGI0/YWYyZmFlZWVkMTlm/NmU3N2MxN2U3MTc0/LmpwZw' },
                    
                    },
                    ]}
                    renderItem={({ item, index }) => (
                    <View
                        style={{
                        backgroundColor: 'floralwhite',
                        height: carouselHeight,
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
                    sliderWidth={screenWidth}
                    itemWidth={screenWidth } // Adjust margin as needed
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
            <BottomNavBar />
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