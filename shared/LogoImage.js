import React from 'react'
import { View, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const LogoImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={require('../assets/care4care_small.png')}
        style={{
          width: wp('37%'),
          height: hp('25%'),          
          marginLeft: wp('6.5%'),
          resizeMode: 'contain'
        }}
      />
    </View>
  );
}

export default LogoImage;