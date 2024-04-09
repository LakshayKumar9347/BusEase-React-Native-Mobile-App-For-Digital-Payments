import * as React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {FontSize, FontFamily, Color, Border} from '../GlobalStylesMain';

const HomeDashboard = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.homeRideBooking}>
        {/* Time */}
        <View style={[styles.container11, styles.iconLayout1]}>
          <Image
            style={[styles.image20Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require('../assets/image-20.png')}
          />
          <Image
            style={[styles.image21Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require('../assets/image-21.png')}
          />
        </View>
        {/* WElcome back */}
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.welcomeBackParent, styles.groupViewLayout]}>
            <Text style={[styles.welcomeBack, styles.turnOnTypo]}>
              {'Welcome back 👋 '}
            </Text>
            <Text style={[styles.antonioDiaz, styles.antonioDiazTypo]}>
              Niharika Agri
            </Text>
            <TouchableOpacity>
              <Image
                style={[styles.bell2Icon, styles.bell2IconPosition]}
                resizeMode="cover"
                source={require('../assets/bell-2.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* ******Swiper Card************* */}

        <View style={styles.container9Wrapper}>
          <View style={[styles.container9, styles.button3Layout]}>
            <Image
              style={styles.image7Icon}
              resizeMode="cover"
              source={require('../assets/image-7.png')}
            />
            <Text style={[styles.getYourSalary, styles.antonioDiazTypo]}>
              {
                'Stay Informed with Precision Updates for Seamless Travel Experiences!'
              }
            </Text>
            <View style={[styles.button3, styles.button3Layout]}>
              <Text style={[styles.turnOn, styles.turnOnTypo]}>Turn On</Text>
            </View>
          </View>
        </View>
        {/* *********Scan & Icons******* */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('QRScannerPage');
          }}>
          <Image
            style={[styles.container12Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/container-12.png')}
          />
          <Text style={[styles.transfer, styles.scanTypo]}>Smartcard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('QRScannerPage');
          }}>
          <Image
            style={[styles.container13Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/container-13.png')}
          />
          <Text style={[styles.scan, styles.scanTypo]}>Scan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DashboardTransactionHistory');
          }}>
          <Image
            style={[styles.container14Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/container-14.png')}
          />
          <Text style={[styles.payBills, styles.scanTypo]}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('QRScannerPage');
          }}>
          <Image
            style={[styles.container15Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/container-15.png')}
          />
          <Text style={[styles.savings, styles.scanTypo]}>Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DashboardTransactionHistory');
          }}>
          <Image
            style={[styles.container16Icon, styles.requestPosition]}
            resizeMode="cover"
            source={require('../assets/container-16.png')}
          />
          <Text style={[styles.request, styles.requestPosition]}>Receipt</Text>
        </TouchableOpacity>

        {/* *********where to********* */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RideBookingChooseDestinat');
          }}>
          <View style={[styles.container4, styles.containerShadowBox]}>
            <Image
              style={[styles.search1Icon, styles.iconLayout2]}
              resizeMode="cover"
              source={require('../assets/search-1.png')}
            />
            <Text style={[styles.whereTo, styles.nowFlexBox]}>Where to?</Text>
            <View style={[styles.dropdownButton2, styles.bell2IconPosition]}>
              <Text style={[styles.now, styles.nowLayout]}>Now</Text>
              <Image
                style={[styles.chevronDownLarge, styles.clockIconPosition]}
                resizeMode="cover"
                source={require('../assets/chevron-down-large.png')}
              />
              <Image
                style={[styles.clockIcon, styles.clockIconPosition]}
                resizeMode="cover"
                source={require('../assets/clock.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.bookmark1Parent}>
          <Image
            style={[styles.bookmark1Icon, styles.pin31Layout]}
            resizeMode="cover"
            source={require('../assets/bookmark-1.png')}
          />
          <Text style={[styles.chooseASaved, styles.chooseASavedTypo]}>
            Choose a saved place
          </Text>
        </View>
        <Image
          style={[styles.homeRideBookingChild, styles.homeLayout]}
          resizeMode="cover"
          source={require('../assets/line-1.png')}
        />
        <View style={[styles.pin31Parent, styles.parentLayout]}>
          <Image
            style={[styles.pin31, styles.pin31Layout]}
            resizeMode="cover"
            source={require('../assets/pin-3-1.png')}
          />
          <Text style={[styles.setDestinationOn, styles.chooseASavedTypo]}>
            Set destination on map
          </Text>
        </View>
        <Image
          style={[styles.homeRideBookingItem, styles.homeLayout]}
          resizeMode="cover"
          source={require('../assets/line-1.png')}
        />
        <View style={[styles.aAdd1Parent, styles.parentLayout]}>
          <Image
            style={[styles.aAdd1, styles.pin31Layout]}
            resizeMode="cover"
            source={require('../assets/a-add-1.png')}
          />
          <Text style={[styles.requestARide, styles.chooseASavedTypo]}>
            Request a ride for someone esle
          </Text>
        </View>
        <Image
          style={[styles.homeRideBookingInner, styles.homeLayout]}
          resizeMode="cover"
          source={require('../assets/line-1.png')}
        />

        {/* ******************* */}
        {/* Waste Code */}
        {/* <Text style={styles.addUpTo}>Add up to 5 stops to your ride.</Text>
        <View style={styles.button6}>
          <Text style={[styles.learnMore, styles.backLayout]}>Learn more</Text>
        </View>
        <Image
          style={styles.image16Icon}
          resizeMode="cover"
          source={require('../assets/icon.png')}
        /> */}
        {/* Waste Code */}

        {/* Card */}
        <View style={[styles.container3, styles.containerLayout]}>
          <Text style={[styles.yourJourneyStarts, styles.justSitBackPosition]}>
            Your journey starts here.
          </Text>
          <Text style={[styles.justSitBack, styles.iconLayout1]}>
            Just sit back and relax -
          </Text>
          <Image
            style={styles.image8Icon}
            resizeMode="cover"
            source={require('../assets/image-8.png')}
          />
        </View>

        {/* Around You and map */}
        <Text style={[styles.aroundYou, styles.nowFlexBox]}>Around you</Text>

        <Image
          style={[styles.container6Icon, styles.containerLayout]}
          resizeMode="cover"
          source={require('../assets/container-6.png')}
        />

        {/* *********Navigation******* */}
        <View style={[styles.container5, styles.containerLayout]}>
          <View style={styles.tabBarMenu1}>
            <TouchableOpacity>
              <View style={[styles.frame, styles.frameLayout]}>
                <Image
                  style={[styles.homeIcon, styles.turnOnPosition]}
                  resizeMode="cover"
                  source={require('../assets/home.png')}
                />
                <Text style={styles.home}>Home</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.frame1, styles.scanPosition]}>
                <Image
                  style={[styles.homeIcon, styles.turnOnPosition]}
                  resizeMode="cover"
                  source={require('../assets/description.png')}
                />
                <Text style={[styles.activity, styles.accountPosition]}>
                  Activity
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.frame2, styles.frameLayout]}>
                <Image
                  style={[styles.homeIcon, styles.turnOnPosition]}
                  resizeMode="cover"
                  source={require('../assets/circle-09.png')}
                />
                <Text style={[styles.account, styles.accountPosition]}>
                  Account
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  nowFlexBox: {
    textAlign: 'left',
    position: 'absolute',
  },
  containerShadowBox: {
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  iconLayout2: {
    height: 24,
    width: 24,
  },
  bell2IconPosition: {
    top: 10,
    position: 'absolute',
  },
  nowLayout: {
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  clockIconPosition: {
    height: 14,
    width: 14,
    marginTop: -6.5,
    top: '50%',
    position: 'absolute',
    overflow: 'hidden',
  },
  pin31Layout: {
    height: 20,
    width: 20,
    left: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  chooseASavedTypo: {
    lineHeight: 26,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: 'left',
    color: Color.colorGray_100,
    position: 'absolute',
  },
  homeLayout: {
    width: 350,
    maxHeight: '100%',
    left: 20,
    position: 'absolute',
  },
  parentLayout: {
    height: 26,
    position: 'absolute',
  },
  containerLayout: {
    borderRadius: Border.br_9xs,
    position: 'absolute',
  },
  frameLayout: {
    width: 114,
    height: 50,
    backgroundColor: Color.colorGray_200,
    top: 0,
    overflow: 'hidden',
  },
  turnOnPosition: {
    left: '50%',
    top: '50%',
  },
  scanPosition: {
    left: 114,
    position: 'absolute',
  },
  accountPosition: {
    color: Color.colorDimgray,
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    marginTop: 4,
    left: '50%',
    fontFamily: FontFamily.nunitoRegular,
    top: '50%',
    textAlign: 'left',
    position: 'absolute',
  },
  backLayout: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  justSitBackPosition: {
    left: 16,
    color: Color.colorWhite,
    textAlign: 'left',
  },
  iconLayout1: {
    height: 40,
    position: 'absolute',
  },
  button3Layout: {
    borderRadius: Border.br_5xs,
    position: 'absolute',
    overflow: 'hidden',
  },
  antonioDiazTypo: {
    fontFamily: FontFamily.outfitRegular,
    textAlign: 'left',
    color: Color.colorGray_100,
    position: 'absolute',
  },
  turnOnTypo: {
    fontFamily: FontFamily.plusJakartaSansRegular,
    textAlign: 'left',
    position: 'absolute',
  },
  iconLayout: {
    height: 54,
    width: 54,
    borderRadius: Border.br_8xl,
    top: 280,
  },
  scanTypo: {
    textAlign: 'center',
    color: Color.colorDarkslategray_100,
    top: 334,
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  requestPosition: {
    left: 352,
    position: 'absolute',
  },
  groupViewLayout: {
    height: 48,
    width: 342,
    position: 'absolute',
  },
  aroundYou: {
    top: 859,
    color: Color.colorGray_100,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: '600',
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    left: 20,
  },
  search1Icon: {
    left: 18,
    top: 16,
    width: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  whereTo: {
    top: 13,
    left: 58,
    color: Color.colorGray_100,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: '600',
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    textAlign: 'left',
  },
  now: {
    marginTop: -10.5,
    left: 32,
    color: Color.colorLightgoldenrodyellow,
    fontFamily: FontFamily.nunitoRegular,
    top: '50%',
    textAlign: 'left',
    position: 'absolute',
  },
  chevronDownLarge: {
    right: 11,
  },
  clockIcon: {
    left: 12,
  },
  dropdownButton2: {
    right: 13,
    borderRadius: 18,
    width: 93,
    height: 35,
    backgroundColor: Color.colorMintcream,
  },
  container4: {
    top: 412,
    borderRadius: 28,
    height: 56,
    shadowColor: 'rgba(23, 26, 31, 0.2)',
    elevation: 2,
    shadowRadius: 2,
    right: 20,
    left: 20,
    position: 'absolute',
    backgroundColor: Color.colorWhite,
  },
  bookmark1Icon: {
    top: 0,
  },
  chooseASaved: {
    left: 70,
    fontSize: FontSize.size_base,
    top: 1,
  },
  bookmark1Parent: {
    top: 500,
    width: 204,
    height: 27,
    left: 22,
    position: 'absolute',
  },
  homeRideBookingChild: {
    top: 539,
  },
  pin31: {
    top: 2,
  },
  setDestinationOn: {
    left: 70,
    fontSize: FontSize.size_base,
    top: 0,
  },
  pin31Parent: {
    top: 563,
    width: 214,
    left: 22,
  },
  homeRideBookingItem: {
    top: 601,
  },
  homeIcon: {
    marginLeft: -12.05,
    marginTop: -20,
    overflow: 'hidden',
    height: 24,
    width: 24,
    position: 'absolute',
  },
  home: {
    marginLeft: -14.05,
    fontWeight: '700',
    fontFamily: FontFamily.nunitoBold,
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    marginTop: 4,
    left: '50%',
    color: Color.colorLightgoldenrodyellow,
    top: '50%',
    textAlign: 'left',
    position: 'absolute',
  },
  frame: {
    left: 0,
    position: 'absolute',
  },
  activity: {
    marginLeft: -17.05,
  },
  frame1: {
    width: 114,
    height: 50,
    backgroundColor: Color.colorGray_200,
    top: 0,
    overflow: 'hidden',
  },
  account: {
    marginLeft: -18.55,
  },
  frame2: {
    left: 227,
    position: 'absolute',
  },
  tabBarMenu1: {
    width: 341,
    height: 50,
    backgroundColor: Color.colorGray_200,
    top: 16,
    left: 20,
    position: 'absolute',
  },
  container5: {
    height: 81,
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: 'rgba(23, 26, 31, 0.2)',
    backgroundColor: Color.colorWhite,
  },
  aAdd1: {
    top: 1,
  },
  requestARide: {
    left: 64,
    top: 0,
  },
  aAdd1Parent: {
    top: 627,
    left: 19,
    width: 275,
  },
  homeRideBookingInner: {
    top: 663,
  },
  container6Icon: {
    top: 913,
    maxWidth: '100%',
    height: 220,
    right: 20,
    left: 20,
    overflow: 'hidden',
  },
  addUpTo: {
    top: 711,
    width: 145,
    color: Color.colorWhite,
    left: 36,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    textAlign: 'left',
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: '600',
    position: 'absolute',
  },
  learnMore: {
    marginTop: -10,
    marginLeft: -30.5,
    color: Color.colorDarkgreen,
    left: '50%',
    top: '50%',
    fontFamily: FontFamily.nunitoRegular,
    textAlign: 'left',
    position: 'absolute',
  },
  button6: {
    top: 779,
    borderRadius: 16,
    width: 77,
    height: 32,
    left: 36,
    backgroundColor: Color.colorMintcream,
    position: 'absolute',
    overflow: 'hidden',
  },
  image16Icon: {
    marginTop: 93,
    right: 35,
    width: 168,
    height: 88,
    top: '50%',
    position: 'absolute',
    overflow: 'hidden',
  },
  yourJourneyStarts: {
    top: 24,
    fontSize: 24,
    lineHeight: 36,
    width: 217,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: '600',
    position: 'absolute',
  },
  justSitBack: {
    top: 104,
    width: 137,
    left: 16,
    color: Color.colorWhite,
    textAlign: 'left',
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.nunitoRegular,
  },
  image8Icon: {
    right: 10,
    width: 107,
    height: 131,
    top: 1,
    position: 'absolute',
    overflow: 'hidden',
  },
  container3: {
    top: 695,
    backgroundColor: '#454545',
    height: 132,
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: 'rgba(23, 26, 31, 0.2)',
    right: 20,
    left: 20,
  },
  image20Icon: {
    width: 72,
    marginTop: -20,
    overflow: 'hidden',
    left: 0,
    top: '50%',
  },
  image21Icon: {
    width: 96,
    marginTop: -20,
    overflow: 'hidden',
    right: 0,
    top: '50%',
  },
  container11: {
    right: 0,
    left: 0,
    top: 0,
    overflow: 'hidden',
    backgroundColor: Color.colorWhite,
  },
  image7Icon: {
    right: 5,
    width: 143,
    height: 114,
    bottom: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  getYourSalary: {
    top: 19,
    width: 181,
    height: 71,
    left: 22,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  turnOn: {
    marginTop: -9,
    marginLeft: -20,
    fontSize: FontSize.size_2xs,
    lineHeight: 18,
    left: '50%',
    top: '50%',
    color: Color.colorLightgoldenrodyellow,
  },
  button3: {
    bottom: 21,
    borderStyle: 'solid',
    borderColor: Color.colorLightgoldenrodyellow,
    borderWidth: 1,
    width: 120,
    height: 28,
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_5xs,
    left: 22,
  },
  container9: {
    shadowColor: 'rgba(23, 26, 31, 0.12)',
    height: 147,
    right: 0,
    left: 0,
    top: 0,
    backgroundColor: Color.colorMintcream,
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  container9Wrapper: {
    top: 110,
    right: 24,
    height: 147,
    left: 24,
    position: 'absolute',
  },
  container12Icon: {
    left: 22,
    position: 'absolute',
  },
  container13Icon: {
    left: 104,
    position: 'absolute',
  },
  transfer: {
    left: 14,
    position: 'absolute',
  },
  container14Icon: {
    left: 186,
    position: 'absolute',
  },
  payBills: {
    left: 189,
    position: 'absolute',
  },
  container15Icon: {
    left: 268,
    position: 'absolute',
  },
  request: {
    textAlign: 'center',
    color: Color.colorDarkslategray_100,
    top: 334,
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  savings: {
    left: 263,
    position: 'absolute',
  },
  container16Icon: {
    height: 54,
    width: 54,
    borderRadius: Border.br_8xl,
    top: 280,
  },
  scan: {
    left: 114,
    position: 'absolute',
  },
  welcomeBack: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
    color: Color.colorGray_100,
  },
  antonioDiaz: {
    top: 20,
    fontSize: 18,
    lineHeight: 28,
    left: 0,
  },
  bell2Icon: {
    right: 0,
    height: 24,
    width: 24,
    overflow: 'hidden',
  },
  welcomeBackParent: {
    left: 0,
    top: 0,
  },
  groupView: {
    top: 46,
    left: 24,
  },
  homeRideBooking: {
    shadowColor: 'rgba(18, 15, 40, 0.12)',
    shadowRadius: 6,
    elevation: 6,
    flex: 1,
    width: '100%',
    height: 1260,
    overflow: 'hidden',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
});

export default HomeDashboard;
