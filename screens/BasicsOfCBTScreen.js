import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CBTStatus from '../shared/CBTStatus';
import {
  Header,
  Input,
  Avatar,
  Button,
  Accessory,
  SearchBar,
} from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faList,
  faBell,
  faShareAlt,
  faSearch,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
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
  const Skill = homeCarousel[1];

  const CBTUpdates = () => {
    return CBTStatus.map((status, index) => {
      return(
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',borderRadius: 10 , marginLeft: '6%', marginRight: '6%', marginVertical: '2%', height: 60, padding: 16, backgroundColor: 'white' }}>
        <View > 
          <Text> Week {status.week} </Text>
          <Text> {status.completed} </Text>
        </View>
        <AnimatedCircularProgress
          size={wp('6.2%')}
          width={wp('1.2%')}
          fill={status.progress}
          tintColor="#25ABC6"
          onAnimationComplete={() => console.log('onAnimatioCoplete')}
          backgroundColor="#DEDEDE"
        />
      </View>
      )
    })
  }

  return (
    <View style={styles.MainBackground1}>
      <Image source={require('../assets/Path13508.png')} style={styles.SplashBackgroundCircle1} />
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
          avatarStyle={{ resizeMode: 'contain' }}
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
        rightComponent=<View style={{ flexDirection: 'row' }}>
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
      />
      <Text style={[styles.HomeTextHeading, {marginTop: '3%'}]}> <FontAwesomeIcon icon={faAngleLeft} color="#E85F60" /> Basics of CBT </Text>
      <View
        style={[
          screenStyles.Content,
          {
            width: wp('100%'),
            margin: wp('5%'),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }]
        }>
        <View style={{backgroundColor: 'white', width: wp('20%'), height: wp('20%'), justifyContent: 'center', alignItems: 'center'}}>
          <Image source={Skill.centerImage} style={{width: wp('12%'), height: wp('15%'), resizeMode: 'contain'}} />
        </View>
        
        <View style={{justifyContent: 'space-around', alignItems: 'center', marginRight: wp('15%')}}>
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
          <View style={{ flexDirection: 'row' }}>
            <AnimatedCircularProgress
              size={wp('5.8%')}
              width={2}
              fill={Skill.progressPercentage}
              tintColor="#25ABC6"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#DEDEDE"
            />
            <Text style={{ color: '#898989' }}>  {Skill.progressPercentage} % complete</Text>
          </View>
        </View>
      </View>
      <Text style={{marginLeft:'3%', marginRight: '3%', textAlign: 'center'}}> Cognitive behavioral therapy (CBT) is a psycho-social intervention that aims to improve mental health. CBT focuses on challenging and changing unhelpful cognitive distortions improving emotional regulation. </Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          buttonStyle={styles.Button}
          title="Continue"
        />
      </View>
      <ScrollView style={{marginTop: '5%'}}>
        {CBTUpdates()}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const screenStyles = StyleSheet.create({
  Content: {
    width: wp('79.5%'),
    marginLeft: wp('10.25%'),
    marginRight: wp('10.25%')
  }
});
