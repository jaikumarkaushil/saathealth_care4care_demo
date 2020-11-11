import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  Header,
  Input,
  Button,
  Avatar,
  Accessory,
  Icon
} from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import AvatarImages from '../shared/AvatarImages';
import LogoImage from '../shared/LogoImage';
import styles from '../assets/styles/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const {width: screenWidth} = Dimensions.get('window');

const AvatarImage = ({navigation, route}) => {
  const [avatarPath, setAvatarPath] = useState();

  const carouselRef = useRef(null);
  
  const goForward = () => {
    carouselRef.current.snapToNext();
  };
  const goBackward = () => {
    carouselRef.current.snapToPrev();
  };
useEffect(() => {
  setAvatarPath(carouselRef.current._activeItem);
}, [])
console.log(avatarPath);
  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={screenStyles.item}>
        <ParallaxImage
          source={item.avatar}
          containerStyle={screenStyles.imageContainer}
          style={screenStyles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
     <View style={styles.MainBackground1}>
      <LogoImage />
      <Image
        source={require('../assets/Path13508.png')}
        style={styles.SplashBackgroundCircle1}
      />
      <Image
        source={require('../assets/Path13391.png')}
        style={styles.SplashBackgroundCircle2}
      />
    
      <View style={screenStyles.Content}>
        <Text style={[styles.TextSubHeadingLight, {marginLeft: '5%'}]}> Set up your profile </Text>
        <Text style={{marginLeft: '5%', marginTop: '5%'}}> Choose your avatar ? </Text>
      </View>
      <View style={screenStyles.container}>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 150}
          data={AvatarImages}
          enableSnap={false}
          renderItem={({item, index}, parallaxProps) => renderItem({item, index}, parallaxProps)}
          hasParallaxImages={true}
          firstItem= {1}
          inactiveSlideScale={0.6}
          onSnapToItem={(index) => setAvatarPath(index)}
        />
        <View style={{flexDirection: 'row', justifyContent:"center", marginTop: '-10%'}}>
          <TouchableOpacity onPress={goBackward} style={{marginRight: 40}}>
            <Text><FontAwesomeIcon icon={ faArrowAltCircleLeft} size={32} color='#EC6664' /></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goForward}>
            <Text><FontAwesomeIcon icon={ faArrowAltCircleRight} size={32} color='#EC6664' /></Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems: "center", marginBottom: 15}}>
        <Button
            buttonStyle={styles.Button}
            title="Done"
            onPress={() => {navigation.navigate('Home', {
                              screen: 'Home',
                              params: {
                                userName: route.params.userName,
                                avatar: avatarPath
                              }
                            });}}
        />
      </View>
    </View>
  );
};

export default AvatarImage;

const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 100,
    height: screenWidth - 100,
    resizeMode: 'contain'
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    borderRadius: 8,
  },
  image: {
    resizeMode: 'contain',
  },
  Content: {
    width: wp('79.5%'),
    alignItems: 'start',
    top: '-5%',
  }
});