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
  TouchableHighlight
} from 'react-native';
import {
  Header,
  Input,
  Button,
  Avatar,
  Accessory,
} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from '../assets/styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhoneInput from 'react-native-phone-number-input';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FacebookSocialButton } from 'react-native-social-buttons';
import { GoogleSocialButton } from 'react-native-social-buttons';
import LogoImage from '../shared/LogoImage';

function Profile({navigation, userAccount}) {
  const [next, setNext] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState();
  const { register, setValue, handleSubmit, control, reset, errors } = useForm();
  const circleBackground = require('../assets/circleBackground.png');
  const circleBackground_click = require('../assets/circleBackground_click.png');
  const [gender, setGender] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const onSubmit = (data) => {
    let username = data.familyName.replace(/ /g,'') + ' ' + data.givenName.replace(/ /g,''); 
    navigation.navigate('Profile2', {userName: username});
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
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <View style={screenStyles.Content}>
          <Text style={styles.TextSubHeadingLight}> Set up your profile </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'space-around' }}>
          <TouchableHighlight
            style={{ flex: 1, flexDirection: 'column' }}
            onPress={() => setGender('Male')}>
            <ImageBackground
              source={gender === "Male" ? circleBackground_click : circleBackground}
              style={{
                  width: wp('32%'),
                  height: wp('40%'),
                  flex: 1,
                  resizeMode: 'cover',
                  justifyContent: 'center',
                  alignItems: 'center',
              }}>
              <Image
                source={require('../assets/Male.png')}
                style={gender === "Male" ? { tintColor: 'white' ,width: wp('11.46%'), height: wp('11.46%') } : { width: wp('11.46%'), height: wp('11.46%') }}
              />
              <Text style={{ top: 30 }}> Male </Text>
            </ImageBackground>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ flex: 1, flexDirection: 'column' }}
            onPress={() => setGender('Female')}>
            <ImageBackground
              source={gender === "Female" ? circleBackground_click : circleBackground}
              style={{
                width: wp('32%'),
                height: wp('40%'),
                resizeMode: 'cover',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/Female.png')}
                style={gender === "Female" ? { tintColor: 'white' , width: wp('8.56%'), height: hp('7%') } :{ width: wp('8.56%'), height: hp('7%') }}
              />
              <Text style={{ top: 30 }}> Female </Text>
            </ImageBackground>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ flex: 1, flexDirection: 'column' }}
            onPress={() => setGender('Others')}>
            <ImageBackground
              source={gender === "Others" ? circleBackground_click : circleBackground}
              style={{
                width: wp('32%'),
                height: wp('40%'),
                resizeMode: 'cover',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/Others.png')}
                style={gender === "Others" ? {
                  tintColor: 'white',
                  width: wp('7.3%'),
                  height: hp('6.5%'),
                  resizeMode: 'contain',
                } : {
                  width: wp('7.3%'),
                  height: hp('6.5%'),
                  resizeMode: 'contain',
                  marginBottom: 0,
                }}
              />
              <Text style={{ top: 30 }}> Others </Text>
            </ImageBackground>
          </TouchableHighlight>
        </View>
        <View style={screenStyles.container}>
          <View style={{flexDirection: "row"}}>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={errors.givenName ? [screenStyles.inputHalf, {borderTopLeftRadius: 7.5, borderBottomLeftRadius: 7.5, borderColor: 'red'}] : [screenStyles.inputHalf, {borderTopLeftRadius: 7.5, borderBottomLeftRadius: 7.5, borderColor: 'rgb(190, 190, 190)'}]}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Family Name"
                placeholderTextColor="black"
                
              />
            )}
            name="familyName"
            rules={{ required: true, minLength: 3, maxLength: 15 }}
          />
          
          
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={errors.givenName ? [screenStyles.inputHalf, {borderTopRightRadius: 7.5, borderBottomRightRadius: 7.5, borderColor: 'red'}] : [screenStyles.inputHalf, {borderTopRightRadius: 7.5, borderBottomRightRadius: 7.5, borderColor: 'rgb(190, 190, 190)'}]}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Given Name"
                placeholderTextColor="black"
              />
            )}
            name="givenName"
            rules={{ required: true, minLength: 3, maxLength: 15 }}
          />
          
          </View>
          {errors.familyName?.type === "required" && <Text style={{color: 'red'}}> Family Name is required</Text>}
          {errors.familyName?.type === "maxLength" && <Text style={{color: 'red'}}> Family Name exceed maxLength 15 </Text>}
          {errors.familyName?.type === "minLength" && <Text style={{color: 'red'}}> Family Name must have 2 letters </Text>}
          {errors.familyName?.type === "required" && <Text style={{color: 'red'}}> Given Name is required</Text>}
          {errors.givenName?.type === "maxLength" && <Text style={{color: 'red'}}> Given Name exceed maxLength 15 </Text>}
          {errors.givenName?.type === "minLength" && <Text style={{color: 'red'}}> Given Name must have 2 letters </Text>}
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={errors.title?.type ? [screenStyles.input, {borderColor: 'red'}] : [screenStyles.input, {borderColor: 'rgb(190, 190, 190)',}]}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Title"
                placeholderTextColor="black"
              />
            )}
            name="title"
            rules={{ required: true }}
          />
          {errors.title?.type === "required" && <Text style={{color: 'red'}}> Title is required</Text>}
          <View style={{position: "relative"}}>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <>
                <TextInput
                  style={errors.dob ? [screenStyles.input, {borderColor: 'red'}] : [screenStyles.input, {borderColor: 'rgb(190, 190, 190)'}]}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value) }
                  value={dateOfBirth}
                  placeholder="Date of Birth"
                  placeholderTextColor="black"
                  
                />
                <Icon
                  raised
                  style={{position: 'absolute', right: '7%', top: '35%'}}
                  name='calendar'
                  type='font-awesome'
                  color='rgb(190, 190, 190)'
                  size= '26'
                  onPress={showDatePicker} 
                />
                </>
              )}
              name="dob"
              rules={{ required: false }}
            />
            {errors.dob?.type === "required" && <Text style={{color: 'red'}}> Date of birth is required</Text>}
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <View style={{left: '25%', position: 'absolute', top: hp('35%')}}>
            <Button
              buttonStyle={styles.Button}
              color
              title="Next"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Profile;

const screenStyles = StyleSheet.create({
  Content: {
    width: wp('79.5%'),
    alignItems: 'start',
  },
  container: {
    width: wp('80%'),
    bottom: 0
  },
  input: {
    backgroundColor: 'white',
    color: '#EC6664',
    borderWidth: 0.5,
    height: hp('6.75%'),
    padding: 10,
    borderRadius: 7.5,
    marginTop: 10,
  },
  inputHalf: {
    backgroundColor: 'white',
    color: '#EC6664',
    borderWidth: 0.5,
    height: hp('6.75%'),
    padding: 10,
    flex: 1
  }
});
