import palm from '../assets/palm.png'
import { ImageBackground, View, Text} from 'react-native';

const PalmTree = ({ style, children, imgSource }) => {
  return (
    <ImageBackground source={imgSource} style={{
      opacity: 1,
      width: '100%',
      height: '100%',
    }}>
      {children}
    </ImageBackground>
  );
}
 
export default PalmTree;