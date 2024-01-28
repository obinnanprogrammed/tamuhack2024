import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PalmTree from '../components/PalmTree';
import BottomNavBar from '../components/BottomNavBar';
import Carousel from 'react-native-snap-carousel';

export default function StuPic() {
  const data = [
    {
      title: 'Select a Profile Pic',
    },
  ];

  const renderItem = ({ item, index }) => (
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
      </View>
    </View>
  );

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#F0F6E8', '#F2DDC3']}>
      <PalmTree imgSource={require('../assets/palm.png')}>
        <View style={styles.container}>
          <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={380}
            itemWidth={390}
            layout={'tinder'}
          />
          <View style={styles.circleButtonContainer}>
            <TouchableOpacity style={styles.circleButton}>
              <Image
                source={require('../assets/x_icon.png')}
                style={styles.circleButtonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleButton}>
              <Image
                source={require('../assets/heart_icon.png')}
                style={styles.circleButtonImage}
              />
            </TouchableOpacity>
          </View>
          <BottomNavBar />
        </View>
      </PalmTree>
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
    color: 'black',
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
