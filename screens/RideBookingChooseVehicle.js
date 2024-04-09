import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {Border, Color, FontSize, FontFamily} from '../GlobalStylesMain';
import RNUpiPayment from 'react-native-upi-payment';

const RideBookingChooseVehicle = () => {
  const InitiatePayemt = () => {
    RNUpiPayment.initializePayment(
      {
        vpa: 'lakshaykunar507@oksbi',
        payeeName: 'Lakshay Kumar Kashyap',
        amount: '1',
        transactionRef: 'aasf-332-aoei-fn',
      },
      successCallback,
      failureCallback,
    );
  };
  function successCallback(data) {
    Alert.alert(
      'Payment Successful',
      'Your payment has been processed successfully.',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false}, // This makes the alert not dismissable by tapping outside of it
    );
  }

  function failureCallback(data) {
    Alert.alert(
      'Payment Failed',
      'Your payment has not been Approved.',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false}, // This makes the alert not dismissable by tapping outside of it
    );
  }

  return (
    <ScrollView>
      <View style={styles.rideBookingChooseVehicle}>
        <Image
          style={[styles.rideBookingChooseVehicleChild, styles.framePosition]}
          resizeMode="cover"
          source={require('../assets/group-5.png')}
        />
        <View
          style={[styles.rideBookingChooseVehicleItem, styles.rideLayout]}
        />
        <Text style={[styles.text, styles.textClr]}>₹12.32</Text>
        <Text style={[styles.standard4Seat, styles.textClr]}>
          Standard 4-seat
        </Text>
        <Text style={[styles.pm6, styles.textClr]}>4:23PM - 6 min away</Text>
        <View style={[styles.tag1, styles.tag1Layout]}>
          <View style={[styles.frame, styles.tag1Layout]}>
            <Text style={[styles.cheaper, styles.cheaperPosition]}>
              Cheaper
            </Text>
          </View>
        </View>
        <View style={styles.container21}>
          <Text style={[styles.text1, styles.text1Typo]}>₹22.32</Text>
          <Text style={[styles.premium4Seat, styles.pm8Position]}>
            Premium 4-seat
          </Text>
          <Text style={[styles.pm8, styles.pm8Position]}>
            4:26PM - 8 min away
          </Text>
          <View style={[styles.image29, styles.image29Layout]} />
        </View>
        <Image
          style={[styles.rideBookingChooseVehicleInner, styles.frameIconLayout]}
          resizeMode="cover"
          source={require('../assets/frame-50.png')}
        />
        <Image
          style={[styles.frameIcon, styles.frameIconLayout]}
          resizeMode="cover"
          source={require('../assets/frame-50.png')}
        />
        <Text style={[styles.text2, styles.text2Typo]}>₹16.32</Text>
        <Text style={[styles.standard6Seat, styles.text2Typo]}>
          Standard 6-seat
        </Text>
        <Text style={[styles.pm3, styles.textClr]}>4:20PM - 3 min away</Text>
        <View style={[styles.rectangleView, styles.frameIconLayout]} />
        <Image
          style={styles.busIcon1}
          resizeMode="cover"
          source={require('../assets/frame-50.png')}
        />
        <Text style={[styles.text3, styles.vipTypo]}>₹ 28.50</Text>
        <Text style={[styles.vip, styles.vipTypo]}>VIP</Text>
        <Text style={[styles.pm61, styles.textClr]}>4:23PM - 6 min away</Text>
        <View
          style={[
            styles.rideBookingChooseVehicleChild1,
            styles.rideChildPosition,
          ]}
        />
        <Image
          style={styles.rideChildPosition}
          resizeMode="cover"
          source={require('../assets/frame-50.png')}
        />
        <Image
          style={styles.lineIcon}
          resizeMode="cover"
          source={require('../assets/line-10.png')}
        />
        <Text style={[styles.text4, styles.text4Position]}>**** 1729</Text>
        <Image
          style={styles.rightArrow1}
          resizeMode="cover"
          source={require('../assets/right-arrow-1.png')}
        />
        <TouchableOpacity onPress={InitiatePayemt}>
          <View style={[styles.button7, styles.buttonLayout]}>
            <Text style={[styles.bookNow, styles.text5Position]}>Book Now</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.button8, styles.buttonLayout]}>
          <Text style={[styles.text5, styles.text5Position]} />
          <Image
            style={[styles.clockIcon, styles.image29Layout]}
            resizeMode="cover"
            source={require('../assets/clock1.png')}
          />
        </View>
        <View
          style={[styles.rideBookingChooseVehicleChild3, styles.rideLayout]}
        />
        <Image
          style={[styles.image32Icon, styles.text4Position]}
          resizeMode="cover"
          source={require('../assets/image-32.png')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    top: 0,
    left: 0,
  },
  rideLayout: {
    height: 4,
    borderRadius: Border.br_11xs,
    left: '50%',
    position: 'absolute',
  },
  textClr: {
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  tag1Layout: {
    height: 24,
    width: 58,
    position: 'absolute',
  },
  cheaperPosition: {
    top: '50%',
    left: '50%',
  },
  text1Typo: {
    top: 16,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: '700',
  },
  pm8Position: {
    left: 89,
    textAlign: 'left',
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: 'absolute',
  },
  image29Layout: {
    height: 20,
    position: 'absolute',
    overflow: 'hidden',
  },
  frameIconLayout: {
    height: 40,
    width: 40,
    borderRadius: Border.br_xl,
    left: 36,
    position: 'absolute',
  },
  text2Typo: {
    top: 549,
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: '700',
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: 'absolute',
  },
  vipTypo: {
    top: 641,
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: '700',
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: 'absolute',
  },
  rideChildPosition: {
    left: 40,
    top: 643,
    height: 40,
    width: 40,
    borderRadius: Border.br_xl,
    position: 'absolute',
  },
  text4Position: {
    top: 739,
    position: 'absolute',
  },
  buttonLayout: {
    height: 44,
    top: 800,
    borderRadius: Border.br_9xs,
    position: 'absolute',
    overflow: 'hidden',
  },
  text5Position: {
    lineHeight: 26,
    fontSize: FontSize.size_base,
    marginTop: -13,
    top: '50%',
    fontFamily: FontFamily.nunitoRegular,
    textAlign: 'left',
    left: '50%',
    position: 'absolute',
  },
  rideBookingChooseVehicleChild: {
    width: 392,
    height: 297,
    left: 0,
    position: 'absolute',
  },
  rideBookingChooseVehicleItem: {
    marginLeft: -60,
    top: 305,
    backgroundColor: '#dee1e6',
    width: 120,
  },
  text: {
    textAlign: 'right',
    fontFamily: FontFamily.nunitoBold,
    fontWeight: '700',
    top: 349,
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: 'absolute',
    right: 29,
  },
  standard4Seat: {
    textAlign: 'left',
    left: 105,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: '700',
    top: 349,
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: 'absolute',
  },
  pm6: {
    top: 371,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: 'left',
    left: 105,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
    position: 'absolute',
  },
  cheaper: {
    marginTop: -9,
    marginLeft: -21,
    fontSize: FontSize.size_2xs,
    lineHeight: 18,
    color: Color.colorDarkgreen,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: 'left',
    position: 'absolute',
  },
  frame: {
    borderRadius: 12,
    backgroundColor: Color.colorLightgoldenrodyellow,
    left: 0,
    top: 0,
    overflow: 'hidden',
  },
  tag1: {
    top: 397,
    backgroundColor: Color.colorGray_200,
    left: 105,
  },
  text1: {
    right: 15,
    textAlign: 'right',
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: 'absolute',
  },
  premium4Seat: {
    top: 16,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: '700',
  },
  pm8: {
    top: 38,
    fontFamily: FontFamily.nunitoRegular,
  },
  image29: {
    top: 28,
    width: 56,
    left: 16,
    height: 20,
  },
  container21: {
    top: 441,
    right: 16,
    height: 88,
    borderRadius: Border.br_9xs,
    left: 16,
    position: 'absolute',
    backgroundColor: Color.colorWhite,
  },
  rideBookingChooseVehicleInner: {
    top: 351,
  },
  frameIcon: {
    top: 459,
  },
  text2: {
    textAlign: 'right',
    right: 29,
  },
  standard6Seat: {
    width: 129,
    textAlign: 'left',
    left: 105,
  },
  pm3: {
    top: 571,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: 'left',
    left: 105,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
    position: 'absolute',
  },
  rectangleView: {
    top: 551,
    backgroundColor: Color.colorMintcream,
  },
  busIcon1: {
    top: 556,
    left: 41,
    width: 30,
    height: 33,
    position: 'absolute',
    overflow: 'hidden',
  },
  text3: {
    right: 32,
    textAlign: 'right',
  },
  vip: {
    textAlign: 'left',
    left: 105,
  },
  pm61: {
    top: 663,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: 'left',
    left: 105,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
    position: 'absolute',
  },
  rideBookingChooseVehicleChild1: {
    backgroundColor: '#000',
  },
  lineIcon: {
    top: 721,
    maxHeight: '100%',
    width: 390,
    left: 0,
    position: 'absolute',
  },
  text4: {
    left: 83,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: 'left',
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  rightArrow1: {
    top: 742,
    width: 16,
    height: 16,
    right: 20,
    position: 'absolute',
    overflow: 'hidden',
  },
  bookNow: {
    marginLeft: -37.5,
    color: Color.colorDarkgreen,
  },
  button7: {
    right: 80,
    left: 19,
    backgroundColor: Color.colorLightgoldenrodyellow,
  },
  text5: {
    marginLeft: 10,
    color: Color.colorDimgray,
  },
  clockIcon: {
    marginTop: -10,
    marginLeft: -10,
    width: 20,
    top: '50%',
    left: '50%',
  },
  button8: {
    backgroundColor: Color.colorWhitesmoke,
    width: 44,
    right: 20,
  },
  rideBookingChooseVehicleChild3: {
    marginLeft: -80,
    bottom: 15,
    backgroundColor: Color.colorGray_100,
    width: 160,
  },
  image32Icon: {
    width: 32,
    height: 21,
    left: 19,
    overflow: 'hidden',
  },
  rideBookingChooseVehicle: {
    shadowColor: 'rgba(18, 15, 40, 0.12)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    flex: 1,
    width: '100%',
    height: 888,
    overflow: 'hidden',
    backgroundColor: Color.colorWhite,
  },
});

export default RideBookingChooseVehicle;
