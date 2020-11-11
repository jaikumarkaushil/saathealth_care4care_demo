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
import Areas from '../shared/Areas';
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

function Profile2({ navigation, route }) {
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
  const [area, setArea] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const onSubmit = (data) => {
    navigation.navigate('Profile3', {
      userName: route.params.userName
    });
  };

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
  const areaIcons = () => {
    return Areas.map((category, index) => {
      return(
        <View key={index} style={{width: '30%', alignItems:'center'}} >
        <Avatar 
          rounded
          source={
            category.path
          }
          containerStyle={area === category.area ? {backgroundColor: '#EC6664'} : {backgroundColor: 'white'}}
          size="large"
          avatarStyle={ area === category.area ? [screenStyles.icon, {tintColor: 'white'}] : screenStyles.icon}
          onPress={() => setArea(category.area)}
        />
        <Text style={{ textAlign: "center", marginTop: '5%', marginBottom: '8%',}}> {category.area} </Text>
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
        <Text style={[styles.TextSubHeadingLight, {marginLeft: '5%'}]}> Set up your profile </Text>
        <Text style={{marginLeft: '5%', marginTop: '5%'}}> Which of these are your area of focus? </Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', width: wp('100%'), justifyContent: 'space-around'}}>
        {areaIcons()}
      </View>
      <View style={{position: 'absolute', top: '70%', marginLeft: '5%'}}>
        <Text style={styles.TextSubHeading} > Experience Level </Text>
        <RadioButton.Group onValueChange={value => setExperienceLevel(value)} value={experienceLevel}>
          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            <RadioButton.Item label="0-4 years   " value="1-4" color="#EC6664" />
            <RadioButton.Item label="5-9 years   " value="5-9" color="#EC6664" />
            <RadioButton.Item label="10-14 years" value="10-14" color="#EC6664" />
            <RadioButton.Item label="15 + years" value="15+" color="#EC6664" />
          </View>
        </RadioButton.Group>
        <View style={{alignItems: "center", bottom: 15}}>
          <Button
              buttonStyle={styles.Button}
              title="Next"
              onPress={() => {area ? navigation.navigate('Profile3', {userName: route.params.userName}) : null}}
            />
        </View>
      </View>
    </View>
  );
}

export default Profile2;

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
