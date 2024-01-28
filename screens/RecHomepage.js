import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PalmTree from '../components/PalmTree';
import Carousel from 'react-native-new-snap-carousel';
import Header from '../components/Header';
import BottomNavBar from '../components/BottomNavBar';
const screenWidth = Dimensions.get('window').width;
export default function RecHome() {
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
                        title: 'Sheldon',
                        text: 'Harvard',
                        skillsText: 'Skills: React Native, Java, C++',
                        image: {uri: 'https://imgs.search.brave.com/3RYZaRHD0HD9T1KmnPKZR2q-aoTwYPN3GAarR2_sqyc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9vcGVyLmNvbS9p/bWcvZ2FsbGVyeS9l/dmVyeS15b3VuZy1z/aGVsZG9uLWNoYXJh/Y3Rlci1yYW5rZWQt/d29yc3QtdG8tYmVz/dC9pbnRyby0xNjg2/NTgyODU0LmpwZw' },
                    },
                    {
                        title: 'Jackson Blaziken',
                        text: 'Jane Street ',
                        skillsText: 'Skills: Getting GPA Gamed',
                        image: {uri: 'https://imgs.search.brave.com/qaGPQjUwDwRxLNYruehGf6ojGEoqy9J2UEpVMIddPHs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGV4ZXJ0by5jb20v/Y2RuLWNnaS9pbWFn/ZS93aWR0aD0zODQw/LHF1YWxpdHk9NzUs/Zm9ybWF0PWF1dG8v/aHR0cHM6Ly9lZGl0/b3JzLmRleGVydG8u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzExLzI0L21h/bmR5LXlvdW5nLXNo/ZWxkb24tMTAyNHg1/NzUuanBn' },
                    
                    },
                    {
                        title: 'Dahomie Mark',
                        text: 'Community College',
                        skillsText: 'Skills: Live. Laugh. Love.',
                        image: {uri: 'https://imgs.search.brave.com/DGOI0tJKAO7DrzXb3VL5WdX60E-XdA5wInT2QCvNcks/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9vcGVyLmNvbS9p/bWcvZ2FsbGVyeS90/aGUteW91bmctc2hl/bGRvbi1hY3Rvci15/b3UtZm9yZ290LXBs/YXllZC1hLWNvbXBs/ZXRlbHktZGlmZmVy/ZW50LWNoYXJhY3Rl/ci1vbi1iYnQvaW50/cm8tMTY1NTg1NTg4/NS5qcGc' },
                    
                    },
                    {
                        title: 'Ur Mom',
                        text: 'TAMU',
                        skillsText: 'Skills: Getting finessed by the homie Mark',
                        image: {uri: 'https://imgs.search.brave.com/4iS6eGbTOLgXjRidCfPA0ex0QTGLvKXmxxLHJorqU4U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGV4ZXJ0by5jb20v/Y2RuLWNnaS9pbWFn/ZS93aWR0aD0zODQw/LHF1YWxpdHk9NzUs/Zm9ybWF0PWF1dG8v/aHR0cHM6Ly9lZGl0/b3JzLmRleGVydG8u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzExLzI0L21p/c3N5LWNvb3Blci0x/MDI0eDU3Ni5qcGc' },
                    
                    },
                    {
                        title: 'Yo Mama',
                        text: 'TU',
                        skillsText: 'Skills: Bruh imagine',
                        image: {uri: 'https://imgs.search.brave.com/qjvKWheU_1bQdAbeokJ0amKD4AOPRpIRLVG0eG-30-E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGFy/dGVmYWN0cy5jb20v/azIvbmV3cy82MTAv/dXBsb2FkL2VkaXRv/ci95b3VuZyUyMHNo/ZWxkb24lMjBjYnMu/anBn' },
                    
                    },
                    ]}
                    renderItem={({ item, index }) => (
                    <View
                        style={{
                        backgroundColor: 'floralwhite',
                        height: 620,
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