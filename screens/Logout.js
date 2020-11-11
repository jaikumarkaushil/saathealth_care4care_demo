import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Header, Input, Avatar, Accessory, SearchBar, Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faList, faBell, faShareAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../assets/styles/styles';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LogoImage from '../shared/LogoImage';
const { width: screenWidth } = Dimensions.get('window');
import { homeCarousel, homeCarouselTip } from '../shared/HomeCarousels';
import Tabs from '../shared/Tabs';

function HomeScreen({ navigation, route }) {
  const [avatars, setAvatars] = useState();
  const [query, setQuery] = useState();
  const carouselRef = useRef(null);
  const [tab, setTab] = useState();
  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={screenStyles.item}>
        <Image
          source={item.leftIcon}
          style={{
            position: 'absolute',
            top: 15,
            left: 15,
            resizeMode: 'contain',
            width: wp('7%'),
            height: hp('3%'),
          }}
        />
        <Image
          source={item.rightIcon}
          style={{
            position: 'absolute',
            top: 15,
            right: 15,
            resizeMode: 'contain',
            width: wp('7%'),
            height: hp('3%'),
          }}
        />
        <Image
          source={item.centerImage}
          style={{
            width: wp('16.5%'),
            height: hp('8.54%'),
            resizeMode: 'contain',
          }}
        />

        <Text
          style={{
            fontSize: wp('100%') * 0.048,
            color: '#494A56',
            marginTop: 4,
          }}>
          {item.title}
        </Text>
        <Text style={{ textAlign: 'center' }}> {item.progressPercentage} </Text>
        <View>
          {item.progressPercentage ? (
            <View style={{ flexDirection: 'row' }}>
              <AnimatedCircularProgress
                size={17}
                width={2}
                fill={item.progressPercentage}
                tintColor="#25ABC6"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#DEDEDE"
              />
              <Text style={{ color: '#898989' }}>
                {' '}
                {item.progressPercentage} % complete{' '}
              </Text>
            </View>
          ) : (
            <Text style={{ color: '#898989' }}>
              {' '}
              Earn {item.coins}{' '}
              <Image
                source={require('../assets/coin.png')}
                style={{ width: wp('5%'), height: wp('5%') }}
              />{' '}
              complete to unlock{' '}
            </Text>
          )}
        </View>
      </View>
    );
  };

  const renderItemTip = ({ item, index }, parallaxProps) => {
    return (
      <LinearGradient
        colors={['#25ABC6', '#1D8397', '#1D8397']}
        style={screenStyles.itemTip}>
        <Text
          style={{
            fontSize: wp('100%') * 0.048,
            color: '#494A56',
            marginTop: 4,
          }}>
          <Image
            source={item.bellIcon}
            style={{ width: wp('4.8%'), height: hp('2.7%') }}
          />
          {'  '}
          {item.title}
        </Text>
        <Text style={{ textAlign: 'center', color: 'white' }}> {item.subHeading}</Text>

        <Text style={{textAlign: 'center', color: 'white' }}> {item.text} </Text>
      </LinearGradient>
    );
  };


  return (
    <View style={styles.MainBackground1}>
      <Image source={require('../assets/Path13508.png')} style={styles.SplashBackgroundCircle1} />
      <Image source={require('../assets/Path13391.png')} style={styles.SplashBackgroundCircle2} />
      <Header
        placement="left"
        backgroundColor="transparent"
        containerStyle={{
          margin: '2%',
          height: hp('10%'),
          borderBottomWidth: 0,
        }}
        leftComponent=<Avatar
          source={require('../assets/avatar2.png')}
          rounded
          size="medium"
          avatarStyle={{resizeMode: 'contain'}}
          containerStyle={{ backgroundColor: 'white' }}
        />
        centerComponent=<Text
          style={{
            fontWeight: 'bold',
            color: '#434450',
            fontSize: wp('4.12%'),
          }}>
          {' '}
          Jai Kumar{' '}
        </Text>
        rightComponent=<Text>
          {' '}
          <FontAwesomeIcon icon={faList} color="#E85F60" size={25} />{' '}
          <FontAwesomeIcon icon={faBell} size={25} color="#E85F60" />{' '}
          <FontAwesomeIcon icon={faShareAlt} size={25} color="#E85F60" />{' '}
        </Text>
      />
        <View style={{height: hp('80%'), justifyContent: 'center', alignItems: 'center'}}>
          <Button 
            title="Logout"
            buttonStyle={styles.Button}
            color 
            onPress={() => {
              Alert.alert("Logout", "You have successfully logged out!", [{
                  title: "OK",
                  onPress: () => navigation.navigate('SplashScreen')
              }])
          }} />
        </View>
    </View>
  );
}

export default HomeScreen;

const screenStyles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    width: screenWidth - 130,
    height: hp('25%'),
    marginBottom: 23,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  itemTip: {
    borderRadius: 8,
    padding: 15,
    width: screenWidth-90,
    height: hp('25%'),
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
