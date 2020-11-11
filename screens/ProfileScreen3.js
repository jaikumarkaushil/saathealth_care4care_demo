import React, { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  Modal,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import {
  Header,
  Input,
  Button,
  Avatar,
  Accessory,
} from 'react-native-elements';
import Works from '../shared/Works';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from '../assets/styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhoneInput from 'react-native-phone-number-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { RadioButton } from 'react-native-paper';
import { FacebookSocialButton } from 'react-native-social-buttons';
import { GoogleSocialButton } from 'react-native-social-buttons';
import LogoImage from '../shared/LogoImage';

function Profile3({ navigation, route }) {
  const [experienceLevel, setExperienceLevel] = useState('1-4');
  const [next, setNext] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState();
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    errors,
  } = useForm();
  const [work, setWork] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDateOfBirth(date);
    hideDatePicker();
  };
  const workIcons = () => {
    return Works.map((category, index) => {
      return(
        <View key={index} style={{width: '50%', alignItems:'center'}} >
        <Avatar 
          rounded
          source={
            category.path
          }
          containerStyle={work === category.work ? {backgroundColor: '#EC6664'} : {backgroundColor: 'white'}}
          size="large"
          avatarStyle={ work === category.work ? [screenStyles.icon, {tintColor: 'white'}] : screenStyles.icon}
          onPress={() => setWork(category.work)}
        />
        <Text style={{ textAlign: "center", marginTop: '5%', marginBottom: '8%',}}> {category.work} </Text>
        </View>
      )
      })
  }

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
        <Text style={[styles.TextSubHeadingLight, {marginLeft: '5%', color: '#25ABC6'}]}> How can Care4Care help? </Text>
        <Text style={{marginLeft: '5%', marginTop: '5%'}}> Choose the areas you want to work on </Text>
        <Text style={{marginLeft: '5%', marginTop: '5%'}}> I want to </Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', width: wp('100%'), justifyContent: 'space-around'}}>
        {workIcons()}
      </View>
      
        <View style={{alignItems: "center", marginBottom: 15}}>
          <Button
              buttonStyle={styles.Button}
              title="Next"
              onPress={() => {work ? navigation.navigate('Avatar', {userName: route.params.userName}) : null}}
            />
        </View>
    </View>
  );
}

export default Profile3;

const screenStyles = StyleSheet.create({
  Content: {
    width: wp('79.5%'),
    alignItems: 'start',
    top: '-5%',
  },
  icon: {
    width: '70%',
    height: '70%',  
    margin: '15%', 
    resizeMode: 'contain'
  }
  
});
