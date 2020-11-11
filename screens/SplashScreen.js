import React from 'react'
import { ScrollView, StyleSheet ,View, Text, Button, Image } from 'react-native';
import { Dimensions } from 'react-native';
import SignUp from './SignupScreen';
import { Icon } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const {vw, vh, vmin, vmax} = require('react-native-viewport-units');
const Device_Width = Dimensions.get('screen').width;

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from '../assets/styles/styles';

function SplashScreen( props ) {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({headerShown: false});
  }, [props.navigation]);
  return (
    <View style= {styles.MainBackground1}>
      <View style={{flexDirection: "column", alignItems: "center"}}>       
        <Image source={require('../assets/Path13508.png')} style={styles.SplashBackgroundCircle1} />
        <Image source={require('../assets/Path13391.png')} style={styles.SplashBackgroundCircle2} />
        <Image source={require('../assets/Group6956.png')} style={screenStyles.SplashWelcome} />
        <View style={screenStyles.WelcomeContent}>
          <Image source={require('../assets/care4care.png')} style={screenStyles.Logo} />
          <Text style={screenStyles.TextHeading}>Welcome to Care4Care</Text>
          <Text style={screenStyles.TextSubHeading}>Sign up for your personalised programme to support your resilience and wellbeing</Text>

          <Text onPress={() => props.navigation.navigate("Signup")} style={{marginTop: 20, textAlign:'center', fontSize: 16}}>Click to SignUp <FontAwesomeIcon icon={ faArrowCircleRight} size={16} /></Text>
        </View>
      </View>
    </View>
  );
}

export default SplashScreen;

const screenStyles = StyleSheet.create({
  SplashWelcome: {
    width: wp('100%'), 
    height: hp('49%'), 
    left: 0, 
    top: hp('53.6%'), 
    position: 'absolute',
    resizeMode: 'contain'
  },
  WelcomeContent: {
    marginTop: hp('10%'), 
  },
  Logo: {
    position: 'relative',
    width: wp('66.14%'), 
    height: hp('11.72%'),
    top: 0,
    resizeMode: 'contain'
  },
  TextHeading: {
    marginTop: hp('4.5%'),
    fontWeight: 'bold',
    color: '#756E80',
    fontSize: Math.round( Device_Width * 0.055),
    letterSpacing: 1.5,
    textAlign: 'center'
  },
  TextSubHeading: {
    marginTop: 5,
    color: '#756E80',
    width: wp('80%'),
    textAlign: 'center'
  }
})
