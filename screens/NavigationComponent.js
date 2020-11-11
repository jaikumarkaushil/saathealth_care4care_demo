// In App.js in a new project

import * as React from 'react';
import { StyleSheet, Button, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SignupScreen from './SignupScreen';
import SplashScreen from './SplashScreen';
import OtpVerification from './OtpVerificationScreen';
import Profile from './ProfileScreen';
import Profile2 from './ProfileScreen2';
import Profile3 from './ProfileScreen3';
import Avatar from './AvatarScreen';
import Skills from './SkillsScreen';
import Resources from './ResourcesScreen';
import Logout from './Logout'
import { Dimensions } from 'react-native';
import Tabs from '../shared/Tabs';
import CBT from './BasicsOfCBTScreen';
const Device_Width = Dimensions.get('window').width;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Stack = createStackNavigator();

const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}  />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="OtpVerification" component={OtpVerification}  />
        <Stack.Screen name="Profile" component={Profile}  />
        <Stack.Screen name="Profile2" component={Profile2}  />
        <Stack.Screen name="Profile3" component={Profile3}  />
        <Stack.Screen name="Avatar" component={Avatar}  />
        <Stack.Screen name="Home" component={NavigationTabComponent}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationComponent;

const NavigationSkillsStackComponent = () => {
  return(
    <Stack.Navigator initialRouteName="Skills" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Skills" component={Skills}  />
        <Stack.Screen name="CBT" component={CBT}/>
      </Stack.Navigator>
  )
}
const Tab = createBottomTabNavigator();
function NavigationTabComponent({Navigation}) {
  return (
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
        
            if (route.name === 'Home') {
              return(
              <Image source={require('../assets/home.png')} style={ focused ? [styles.icon, {tintColor: '#F9AFAA'}] : styles.icon} />
              )
            } else if (route.name === 'Skills') {
              return(
              <Image source={require('../assets/Skills.png')} style={ focused ? [styles.icon, {tintColor: '#F9AFAA'}] : styles.icon} />
              )
            } else if (route.name === 'Resources') {
              return(
              <Image source={require('../assets/Resources.png')} style={ focused ? [styles.icon, {tintColor: '#F9AFAA'}] : styles.icon} />
              )
            } else if (route.name === 'Logout') {
              return(
              <Image source={require('../assets/Profile.png')} style={ focused ? [styles.icon, {tintColor: '#F9AFAA'}] : styles.icon} />
              )
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#F9AFAA',
          inactiveTintColor: 'white',
          style: styles.bottomtabs,
          labelStyle: {fontSize: 15}
        }}
        navigationOptions={{
          tabBarOnPress: ({previousScene, scene, jumpToIndex}) => {
                const { route, index, focused} = scene;

                if(route.name === 'Logout'){
                  if(focused){
                    Alert.alert("Confirm", "You might lose changes", [{
      title: "OK",
      onPress: () => Navigation.navigate('SplashScreen')
   }])
                }}
            }
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Skills" component={NavigationSkillsStackComponent}  />
        <Tab.Screen name="Resources" component={Resources}  />
        <Tab.Screen name="Logout" component={Logout}  />
      </Tab.Navigator>
    
  );
}
const styles = StyleSheet.create({
  bottomtabs: {
    alignItems: 'center',
    width: wp('100%'), 
    height: hp('10%'), 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    backgroundColor: '#736983', 
    borderColor: '#f3f3f3',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
  }, 
  icon: {
    width: '100%',
    height: '65%',  
    margin: '15%',
    resizeMode: 'contain',
  }
})





