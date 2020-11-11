import { StyleSheet, Dimensions} from 'react-native';
const Device_Width = Dimensions.get('screen').width;

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 
const styles = StyleSheet.create({
  MainBackground1 :{
    backgroundColor: 'rgba(117, 110, 128, 0.08)',
    flex: 1,
    height: hp('100%'),
    width: wp('100%')
  },
  Container: {
    flex:1,
    flexDirection: 'column',
    width: Device_Width
  },
  SplashBackgroundCircle1: {
    width: wp('100.5%'), 
    height: hp('49%'), 
    left: wp('52.7%'), 
    top: hp('5%'), 
    position: 'absolute',
    resizeMode: 'contain'
  },
  SplashBackgroundCircle2: {
    width: wp('100.5%'), 
    height: hp('49%'), 
    left: -wp('32%'), 
    top: hp('50.7%'), 
    position: 'absolute',
    resizeMode: 'contain'
  },
  TextHeading: {
    fontWeight: "bold", 
    color: '#756E80',
    fontSize: Math.round(Device_Width * 0.07),
    lineHeight: wp('11%')
  },
  TextSubHeadingLight: {
    fontWeight: "bold", 
    color: '#756E80',
    fontSize: Math.round(Device_Width * 0.048)
  },
  TextSubHeading: {
    fontSize: Math.round(Device_Width * 0.048)
  },
  HomeTextHeading: {
    fontSize: Math.round(Device_Width * 0.048),
    color: '#494A56',
    fontWeight: 'bold'
  },
  Button: {
    marginTop: hp('4%'),
    height: hp('6.5%'),
    width: wp('41.3%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(117, 110, 128, 0.9)'
  }
});

export default styles;