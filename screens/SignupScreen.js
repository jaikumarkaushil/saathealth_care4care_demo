import React, {useState, useRef} from 'react'
import {Dimensions ,StyleSheet, View, Text, Image, Modal, SafeAreaView, TextInput, FlatList, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Header, Input, Button } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from '../assets/styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhoneInput from 'react-native-phone-number-input';
import { FacebookSocialButton,  } from "react-native-social-buttons";
import { GoogleSocialButton } from "react-native-social-buttons";
import LogoImage from '../shared/LogoImage';

const InputMobileNumber = ({navigation}) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [entered, setEntered] = useState(false);
  const phoneInput = useRef(null);
  return (
    <>
      <View style={screenStyles.Container}>
        <SafeAreaView style={{alignItems:'center'}}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            placeholder="Enter mobile number"
            placeholderColor="black"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
          />
          <TouchableOpacity
            style={styles.Button}
            onBlur={() => {
              setEntered(true);
            }}
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setValid(checkValid ? checkValid : false);
              setEntered(true);
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Next</Text>
          </TouchableOpacity>
        </SafeAreaView>
        {value ? entered ? valid ? navigation.navigate('OtpVerification') : <Text style={{marginTop: hp('3%'), color: 'red', fontWeight: 'bold'}}> Invalid Number </Text>: null : null}
      </View>
    </>
  );
};
  

function SignupScreen(props) {
  
  return (
    <View style={styles.MainBackground1}>
      <LogoImage/>
      <Image source={require('../assets/Path13508.png')} style={styles.SplashBackgroundCircle1} />
      <Image source={require('../assets/Path13391.png')} style={styles.SplashBackgroundCircle2} />
      <View style={styles.MainContainer}>
        <View style={screenStyles.Content}>
          <Text style={styles.TextHeading}> Welcome to Care4Care </Text>
          <Text style={styles.TextSubHeading}> Create your account </Text>
        </View>
      </View>
      <InputMobileNumber navigation={props.navigation} />
      <View style={{flexDirection: "column", alignItems: "center", position: "relative", top: -hp('10%')}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black', marginLeft: wp('10.5%')}} />
          <View>
            <Text style={{width: 80, textAlign: 'center'}}>Or</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black', marginRight: wp('10.5%')}} />
        </View>
        <GoogleSocialButton buttonViewStyle={{marginTop: hp('3%')}} />
        <FacebookSocialButton buttonViewStyle={{marginTop: hp('2.6%')}} />
        <Button title="Skip for Development purposes" buttonStyle={{marginTop: 10}} onPress={() => { props.navigation.navigate('OtpVerification')}} />
      </View>
    </View>
  );
}

export default SignupScreen;

const screenStyles = StyleSheet.create({
 
  Content: {
    width:wp('79.5%'),
    marginLeft: wp('10.25%')
  },
  Container: {
    flex: 1,
    alignItems: 'center',
    marginTop: hp('4%'),
    marginBottom: 0
  },
  
})