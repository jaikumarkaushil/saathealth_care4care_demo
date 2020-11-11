import React, {useState, useRef} from 'react'
import {Dimensions ,StyleSheet, View, Text, Image, Modal, SafeAreaView, TextInput, FlatList, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Header, Input, Button } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from '../assets/styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhoneInput from 'react-native-phone-number-input';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { FacebookSocialButton,  } from "react-native-social-buttons";
import { GoogleSocialButton } from "react-native-social-buttons";
import LogoImage from '../shared/LogoImage';

const Device_Width = Dimensions.get('screen').width;

const InputCode = ({navigation, next, setNext}) => {
  const [code, setCode] = useState("");
  return(
    <View style={screenStyles.container}>
        
        <Text style={{color: '#494a56', marginBottom: 1}}> Enter the otp send to your number </Text>
        <OTPInputView
          style={{width: '80%', height: 80}}
          pinCount={4}
          onCodeChanged = {code => { setCode({code})}}
          codeInputFieldStyle={screenStyles.borderStyleBase}
          codeInputHighlightStyle={screenStyles.borderStyleHighLighted}
          onCodeFilled = {() => setNext(true)}
          placeholderCharacter={'*'}
          placeholderTextColor={'red'}
          selectionColor={"#03DAC6"}
        />
       
        
          <TouchableOpacity style={{marginTop: hp('1%'), flexDirection: 'row'}} 
              onPress={() => { 
                setCode({code: ""});
                setNext(false);
          }}> 
          <Text>Didnt Receive? </Text>
            <Text style={{color: 'red', fontWeight: 'bold'}}> Resend Passcode </Text>
          </TouchableOpacity> 
      </View>
  )
}
  

function OtpVerification(props) {
  const [next, setNext] = useState(false);
  return (
    <View style={styles.MainBackground1}>
      <LogoImage/>
      <Image source={require('../assets/Path13508.png')} style={styles.SplashBackgroundCircle1} />
      <Image source={require('../assets/Path13391.png')} style={styles.SplashBackgroundCircle2} />
      <View style={{flexDirection: "column", alignItems: "center"}}>
        <View style={screenStyles.Content}>
          <Text style={styles.TextHeading}> Welcome to Care4Care </Text>
          <Text style={styles.TextSubHeading}> Create your account </Text>
        </View>
      </View>
      <InputCode navigation={props.navigation} next={next} setNext={setNext} />
      <View style={{alignItems: 'center', marginBottom: 15}}> 
        <Button title="Next" buttonStyle={styles.Button} onPress={() => {next ? props.navigation.navigate('Profile'): null} }/>
      </View>
    </View>
  );
}

export default OtpVerification;

const screenStyles = StyleSheet.create({
 
  Content: {
    width:wp('79.5%'),
    alignItems: 'start',
    

  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: hp('5%')
  },

  borderStyleBase: {
    width: wp('10%'),
    height: 45,
    borderColor: 'rgba(117, 110, 128, 0.9)',
    color: 'black',
    borderRadius: 4,
    boxShadowLeft: 20,
    boxShadowRight: 20,
    boxShadowBottom: 30
  },

  borderStyleHighLighted: {
    borderColor: "black",
    color: 'black',
    borderRadius: 4,
    boxShadowLeft: 20,
    boxShadowRight: 20,
    boxShadowBottom: 30
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  }
})