import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Header, Input, Avatar, Accessory, SearchBar } from 'react-native-elements';
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
        <View
          style={[
            screenStyles.Content,
            {
              width: wp('100%'),
              margin: wp('5%'),
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          ]}>
          <Text style={styles.HomeTextHeading}> This Week For You </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={[
                styles.HomeTextHeading,
                {
                  color: '#25ABC6',
                  textAlignVertical: 'center',
                  marginRight: '10%',
                },
              ]}>
              300
            </Text>
            <Image
              source={require('../assets/coin.png')}
              style={{ width: wp('6.25%'), height: wp('6.25%') }}
            />
          </View>
        </View>
        <View style={screenStyles.container}>
          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={hp('30%')}
            itemWidth={screenWidth - 130}
            data={homeCarousel}
            renderItem={renderItem}
            hasParallaxImages={true}
            firstItem={1}
            inactiveSlideScale={0.8}
          />
        </View>
        <View style={screenStyles.container}>
          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={hp('30%')}
            itemWidth={screenWidth-90}
            data={homeCarouselTip}
            renderItem={renderItemTip}
            hasParallaxImages={true}
            firstItem={1}
            inactiveSlideScale={0.85} 
            inactiveSlideOpacity={0.28}           
          />
        </View>
        <Text style={[styles.HomeTextHeading, {marginLeft: '5%'}]}> Search </Text>
        <View style={{alignItems: 'center', height:'10%'}}>
          <SearchBar
            placeholder="What are you looking for"
            placeholderTextColor = '#A7A7A7'
            onChangeText={(query) => setQuery(query)}
            value={query}
            lightTheme
            round
            showCancel
            searchIcon=<FontAwesomeIcon icon={faSearch} color="#E85F60" size={25} />
            containerStyle={{backgroundColor: 'transparent', width: '90%', borderRadius: 14, marginBottom: '2%'}}
            inputContainerStyle={{backgroundColor: 'white'}}
          />
        </View>
    </View>
  );
}

export default HomeScreen;

const screenStyles = StyleSheet.create({
  Content: {
    width: wp('79.5%'),
    alignItems: 'start',
  },
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
