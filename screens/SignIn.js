import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Color, Border, FontSize, FontFamily} from '../GlobalStyles';
import {useNavigation} from '@react-navigation/core';

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={[styles.signIn, styles.signInShadowBox]}>
        <View style={styles.container1}>
          <Image
            style={[styles.image2Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require('../assets/image-2.png')}
          />
          <Image
            style={[styles.image3Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require('../assets/image-3.png')}
          />
        </View>
        <View style={[styles.container2, styles.textfieldPosition]}>
          <Text style={[styles.logIn, styles.logInPosition]}>Log in</Text>
          {/* <View style={[styles.button1, styles.button1Layout]}>
            <Text style={[styles.logIn1, styles.logIn1Typo]}>Log in</Text>
          </View> */}
          {/* Login Button */}
          <TouchableOpacity
            style={[styles.button1, styles.button1Layout]}
            onPress={() => navigation.navigate('HomeDashboard')}>
            <Text style={[styles.logIn1, styles.logIn1Typo]}>Log in</Text>
          </TouchableOpacity>

          <View style={[styles.textbox1, styles.textboxPosition]}>
            <View style={[styles.textfield, styles.button1Layout]}>
              <Text style={[styles.antonioDiaz, styles.logIn1Typo]}>
                Niharika Agri
              </Text>
            </View>
            <Text style={[styles.username, styles.signUpTypo]}>Username</Text>
          </View>
          <View style={[styles.textbox2, styles.textboxPosition]}>
            <View style={[styles.textfield, styles.button1Layout]}>
              <Text style={[styles.antonioDiaz, styles.logIn1Typo]}>
                ••••••••
              </Text>
              <Image
                style={styles.hideIcon}
                resizeMode="cover"
                source={require('../assets/hide.png')}
              />
            </View>
            <Text style={[styles.username, styles.signUpTypo]}>Password</Text>
          </View>
          <Text style={[styles.dontHaveAnContainer, styles.logInPosition]}>
            <Text style={styles.dontHaveAn}>{'Dont have an account?'}</Text>
            <Text style={[styles.signUp, styles.signUpTypo]}>Sign up</Text>
          </Text>
          <View style={styles.container2Child} />
        </View>
        <Image
          style={styles.image27Icon}
          resizeMode="cover"
          source={require('../assets/image-27.png')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signInShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  iconPosition: {
    marginTop: -20,
    top: '50%',
    height: 40,
    position: 'absolute',
    overflow: 'hidden',
  },
  textfieldPosition: {
    backgroundColor: Color.colorWhite,
    bottom: 0,
    right: 0,
  },
  logInPosition: {
    textAlign: 'center',
    left: '50%',
    position: 'absolute',
  },
  button1Layout: {
    borderRadius: Border.br_5xs,
    position: 'absolute',
  },
  logIn1Typo: {
    textAlign: 'left',
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    position: 'absolute',
  },
  textboxPosition: {
    height: 81,
    backgroundColor: Color.colorGray_300,
    left: 24,
    right: 24,
    position: 'absolute',
  },
  signUpTypo: {
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: '700',
  },
  image2Icon: {
    width: 72,
    top: '50%',
    left: 0,
  },
  image3Icon: {
    width: 96,
    top: '50%',
    right: 0,
    marginTop: -20,
  },
  container1: {
    backgroundColor: Color.colorGray_200,
    height: 40,
    left: 0,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  logIn: {
    marginLeft: -32,
    top: 32,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    fontWeight: '600',
    fontFamily: FontFamily.outfitSemiBold,
    color: Color.colorGray_100,
  },
  logIn1: {
    marginTop: -14,
    marginLeft: -25.5,
    color: Color.colorDarkgreen,
    fontFamily: FontFamily.plusJakartaSansRegular,
    left: '50%',
    top: '50%',
  },
  button1: {
    bottom: 72,
    height: 52,
    left: 24,
    right: 24,
    borderRadius: Border.br_5xs,
    overflow: 'hidden',
    backgroundColor: Color.colorLightgoldenrodyellow,
  },
  antonioDiaz: {
    marginTop: -14.5,
    left: 20,
    fontFamily: FontFamily.plusJakartaSansRegular,
    color: Color.colorGray_100,
    top: '50%',
  },
  textfield: {
    top: 28,
    left: -1,
    borderStyle: 'solid',
    borderColor: Color.colorLightslategray,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    bottom: 0,
    right: 0,
  },
  username: {
    color: Color.colorDarkslategray_100,
    textAlign: 'left',
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    position: 'absolute',
    left: 0,
    top: 0,
    fontWeight: '700',
  },
  textbox1: {
    top: 100,
  },
  hideIcon: {
    marginTop: -12.5,
    right: 21,
    width: 24,
    height: 24,
    top: '50%',
    position: 'absolute',
    overflow: 'hidden',
  },
  textbox2: {
    top: 197,
  },
  dontHaveAn: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  signUp: {
    color: Color.colorLightgoldenrodyellow,
  },
  dontHaveAnContainer: {
    marginLeft: -103,
    bottom: 34,
    fontSize: FontSize.size_sm,
    lineHeight: 22,
  },
  container2Child: {
    marginLeft: -20,
    top: 12,
    backgroundColor: Color.colorGainsboro,
    width: 40,
    height: 4,
    left: '50%',
    position: 'absolute',
  },
  container2: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    shadowColor: 'rgba(23, 26, 31, 0.12)',
    shadowRadius: 2,
    elevation: 2,
    height: 479,
    left: 0,
    position: 'absolute',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  image27Icon: {
    top: 45,
    left: -43,
    width: 475,
    height: 316,
    position: 'absolute',
  },
  signIn: {
    shadowColor: 'rgba(18, 15, 40, 0.12)',
    shadowRadius: 6,
    elevation: 6,
    flex: 1,
    width: '100%',
    height: 844,
    overflow: 'hidden',
    backgroundColor: Color.colorLightgoldenrodyellow,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

export default SignIn;
