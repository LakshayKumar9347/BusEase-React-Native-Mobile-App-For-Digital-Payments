import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {FontFamily, FontSize, Border, Color} from '../GlobalStyles';

const HomeDashboard = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.homeDashboard}>
        {/* Notification Bell Icon */}
        <View
          style={[styles.homeDashboardChild, styles.container4IconPosition]}
        />
        {/* Top Status Bar Time And Battery Stauts */}
        <View style={styles.container5}>
          <Image
            style={[styles.image5Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require('../assets/image-5.png')}
          />
          <Image
            style={[styles.image6Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require('../assets/image-6.png')}
          />
        </View>
        {/* Top Status Bar Time And Battery Stauts */}

        {/* Top Details Welcom */}
        <Text
          style={[
            styles.welcomeBack,
            styles.cardTypo,
          ]}>{`Welcome back 👋 `}</Text>
        <Text style={[styles.antonioDiaz, styles.seeAllFlexBox]}>
          Niharika Agri
        </Text>
        <Image
          style={styles.bell1Icon}
          resizeMode="cover"
          source={require('../assets/bell-1.png')}
        />

        {/* Bank Card Section */}
        <View style={[styles.container3, styles.containerShadowBox]}>
          <Image
            style={[styles.container4Icon, styles.iconPosition1]}
            resizeMode="cover"
            source={require('../assets/container-4.png')}
          />
          <Text style={[styles.balance, styles.textCardPosition]}>Balance</Text>
          <Text style={[styles.text, styles.textCardPosition]}>₹850.00</Text>
          <Text style={[styles.text1, styles.textCardPosition]}>
            2412 7512 3412 3456
          </Text>
          <Image
            style={styles.eye1Icon}
            resizeMode="cover"
            source={require('../assets/eye-1.png')}
          />
          <Text style={[styles.cardNumber, styles.textCardPosition]}>
            Card number
          </Text>
        </View>
        <View style={[styles.container10, styles.containerShadowBox]}>
          <Image
            style={[styles.container4Icon, styles.iconPosition1]}
            resizeMode="cover"
            source={require('../assets/container-11.png')}
          />
          <Text style={[styles.balance, styles.textCardPosition]}>Balance</Text>
          <Text style={[styles.text, styles.textCardPosition]}>₹115.000</Text>
          <Text style={[styles.text1, styles.textCardPosition]}>
            6542 3587 1489 2490
          </Text>
          <Image
            style={styles.eye1Icon}
            resizeMode="cover"
            source={require('../assets/eye-1.png')}
          />
          <Text style={[styles.cardNumber1, styles.textCardPosition]}>
            Card number
          </Text>
        </View>
        <View style={styles.homeDashboardItem} />
        <View style={[styles.homeDashboardInner, styles.rectangleViewLayout]} />
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
        {/* Bank Card Section */}

        {/* Horizontal Icons */}
        <View style={styles.container12Parent}>
          <TouchableOpacity
            onPress={() => navigation.navigate('QRScannerPage')}>
            <Image
              style={[styles.container13Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/container-13.png')}
            />
            <Text style={[styles.scan, styles.scanTypo]}>Scan</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('DashboardTransactionHistory')}>
            <Image
              style={[styles.container12Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/container-12.png')}
            />
            <Text style={[styles.transfer, styles.scanTypo]}>Transfer</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Pressed')}>
            <Image
              style={[styles.container14Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/container-14.png')}
            />
            <Text style={[styles.payBills, styles.scanTypo]}>Pay bills</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Pressed')}>
            <Image
              style={[styles.container15Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/container-15.png')}
            />
            <Text style={[styles.savings, styles.scanTypo]}>Savings</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Pressed')}>
            <Image
              style={[styles.container16Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/container-16.png')}
            />
            <Text style={[styles.request, styles.scanTypo]}>Request</Text>
          </TouchableOpacity>
        </View>
        {/* Horizontal Icons */}

        {/* Recent Activities Section */}
        <Text style={[styles.transactionHistory, styles.seeAllFlexBox]}>
          Transaction History
        </Text>
        <View style={styles.button2}>
          <Text style={[styles.seeAll, styles.cardTypo]}>See all</Text>
          <Image
            style={[styles.chevronRightLarge, styles.seeAllPosition]}
            resizeMode="cover"
            source={require('../assets/chevron-right-large.png')}
          />
        </View>

        <Text style={[styles.monday210823, styles.cardTypo]}>
          Sunday 06/03/24
        </Text>
        <View style={[styles.container6, styles.containerBorder]}>
          <Image
            style={styles.arrowCircleDownRight1}
            resizeMode="cover"
            source={require('../assets/arrow-circle-down-right-1.png')}
          />
          <Text style={styles.trsHistoryBoldName}>Recharge</Text>
          <Text style={styles.projectBonus}>Project bonus</Text>
          <Text style={[styles.text2, styles.textTypo]}>+₹300.00</Text>
        </View>
        <View style={[styles.container8, styles.containerBorder]}>
          <Text style={styles.trsHistoryBoldName}>Bus No. 39</Text>
          <Text style={styles.projectBonus}>Movie tickets</Text>
          <Text style={[styles.text3, styles.textTypo]}>-₹13.00</Text>
          <Image
            style={styles.arrowCircleDownRight1}
            resizeMode="cover"
            source={require('../assets/arrow-circle-up-left-1.png')}
          />
        </View>
        <View style={[styles.container7, styles.containerBorder]}>
          <Text style={styles.trsHistoryBoldName}>Bus No. 16</Text>
          <Text style={styles.projectBonus}>Payments</Text>
          <Text style={[styles.text3, styles.textTypo]}>-₹25.00</Text>
          <Image
            style={styles.arrowCircleDownRight1}
            resizeMode="cover"
            source={require('../assets/arrow-circle-up-left-1.png')}
          />
        </View>
        {/* Recent Activities Section */}

        {/* Advertisement Card with close button */}
        <View style={[styles.container9, styles.containerShadowBox1]}>
          <Image
            style={[styles.image7Icon, styles.iconPosition1]}
            resizeMode="cover"
            source={require('../assets/image-7.png')}
          />
          <Text style={styles.getYourSalary}>
            Get your salary or pesion paid to your PayOn account
          </Text>
          <View style={[styles.button3, styles.button3Layout]}>
            <Text style={styles.turnOn}>Turn On</Text>
          </View>
          <Image
            style={styles.iRemove1}
            resizeMode="cover"
            source={require('../assets/i-remove-1.png')}
          />
        </View>
        {/* Advertisement Card with close button */}

        {/* Bottom Navigation */}
        <View style={[styles.container17, styles.container17Position]}>
          <View style={[styles.tabBarMenu1, styles.container17Position]}>
            <View style={[styles.frame, styles.frameLayout]}>
              <View style={styles.rectangle} />
              <Image
                style={[styles.houseIcon, styles.button3Layout]}
                resizeMode="cover"
                source={require('../assets/house.png')}
              />
              <Text style={styles.home}>Home</Text>
            </View>
            <View style={[styles.frame1, styles.frameLayout]}>
              <Image
                style={[styles.houseIcon, styles.button3Layout]}
                resizeMode="cover"
                source={require('../assets/clock-counter-clockwise.png')}
              />
              <Text style={[styles.activities, styles.accountPosition]}>
                Activities
              </Text>
            </View>
            <View style={[styles.frame2, styles.frameLayout]}>
              <Image
                style={[styles.houseIcon, styles.button3Layout]}
                resizeMode="cover"
                source={require('../assets/address-book.png')}
              />
              <Text style={[styles.contacts, styles.accountPosition]}>
                Contacts
              </Text>
            </View>
            <View style={[styles.frame3, styles.frameLayout]}>
              <Image
                style={[styles.houseIcon, styles.button3Layout]}
                resizeMode="cover"
                source={require('../assets/user-circle.png')}
              />
              <Text style={[styles.account, styles.accountPosition]}>
                Account
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container4IconPosition: {
    top: 0,
    right: 0,
  },
  seeAllFlexBox: {
    textAlign: 'left',
    position: 'absolute',
  },
  cardTypo: {
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  seeAllPosition: {
    left: '50%',
    top: '50%',
  },
  containerShadowBox: {
    height: 190,
    width: 292,
    top: 132,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: 'rgba(23, 26, 31, 0.12)',
    borderRadius: Border.br_5xs,
    position: 'absolute',
    overflow: 'hidden',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
  iconPosition1: {
    bottom: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  textCardPosition: {
    left: 12,
    textAlign: 'left',
    position: 'absolute',
  },
  rectangleViewLayout: {
    width: 6,
    borderColor: Color.colorDimgray,
    backgroundColor: Color.colorWhitesmoke,
    borderWidth: 1,
    borderStyle: 'solid',
    height: 6,
    top: 338,
    left: '50%',
    borderRadius: Border.br_10xs,
    position: 'absolute',
  },
  iconPosition: {
    marginTop: -20,
    height: 40,
    top: '50%',
    position: 'absolute',
    overflow: 'hidden',
  },
  containerBorder: {
    height: 74,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: Border.br_5xs,
    right: 24,
    left: 24,
    position: 'absolute',
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    textAlign: 'right',
    right: 16,
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    marginTop: -21,
    top: '50%',
    fontWeight: '600',
    position: 'absolute',
  },
  containerShadowBox1: {
    elevation: 2,
    shadowRadius: 2,
    shadowColor: 'rgba(23, 26, 31, 0.12)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  button3Layout: {
    height: 28,
    position: 'absolute',
    overflow: 'hidden',
  },
  iconLayout: {
    height: 54,
    width: 54,
    borderRadius: Border.br_8xl,
    top: 0,
    position: 'absolute',
  },
  scanTypo: {
    textAlign: 'center',
    top: 56,
    color: Color.colorDarkslategray_200,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.plusJakartaSansRegular,
    position: 'absolute',
  },
  container17Position: {
    height: 52,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  frameLayout: {
    width: 98,
    height: 52,
    backgroundColor: Color.colorGray_300,
    top: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  accountPosition: {
    color: Color.colorDimgray,
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    marginTop: 6,
    fontFamily: FontFamily.plusJakartaSansRegular,
    left: '50%',
    top: '50%',
    textAlign: 'left',
    position: 'absolute',
  },
  homeDashboardChild: {
    backgroundColor: '#fafafb',
    height: 360,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  transactionHistory: {
    top: 681,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    color: Color.colorGray_100,
    fontFamily: FontFamily.outfitSemiBold,
    fontWeight: '600',
    left: 24,
  },
  seeAll: {
    marginTop: -10,
    marginLeft: -26.5,
    color: Color.colorLightslategray,
    left: '50%',
    top: '50%',
    textAlign: 'left',
    position: 'absolute',
  },
  chevronRightLarge: {
    marginTop: -6,
    marginLeft: 14.5,
    width: 12,
    height: 12,
    position: 'absolute',
    overflow: 'hidden',
  },
  button2: {
    top: 680,
    right: 13,
    width: 69,
    height: 32,
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_10xs,
    position: 'absolute',
    overflow: 'hidden',
  },
  welcomeBack: {
    top: 58,
    textAlign: 'left',
    position: 'absolute',
    color: Color.colorGray_100,
    left: 24,
  },
  antonioDiaz: {
    top: 78,
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    fontFamily: FontFamily.outfitRegular,
    color: Color.colorGray_100,
    left: 24,
  },
  bell1Icon: {
    top: 68,
    height: 24,
    width: 24,
    right: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  container4Icon: {
    maxHeight: '100%',
    width: 90,
    right: 0,
    top: 0,
  },
  balance: {
    top: 9,
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
  },
  text: {
    top: 31,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: Color.colorGray_100,
    fontFamily: FontFamily.outfitSemiBold,
    fontWeight: '600',
  },
  text1: {
    bottom: 9,
    fontSize: FontSize.size_base,
    lineHeight: 26,
    fontFamily: FontFamily.outfitRegular,
    color: Color.colorLightslategray,
  },
  eye1Icon: {
    right: 100,
    bottom: 14,
    width: 16,
    height: 16,
    position: 'absolute',
    overflow: 'hidden',
  },
  cardNumber: {
    bottom: 37,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  container3: {
    left: 24,
  },
  homeDashboardItem: {
    marginLeft: -21,
    width: 22,
    height: 6,
    top: 338,
    backgroundColor: Color.colorLightgoldenrodyellow,
    left: '50%',
    borderRadius: Border.br_10xs,
    position: 'absolute',
  },
  homeDashboardInner: {
    marginLeft: 5,
  },
  rectangleView: {
    marginLeft: 15,
  },
  image5Icon: {
    width: 72,
    left: 0,
  },
  image6Icon: {
    width: 96,
    right: 0,
  },
  container5: {
    backgroundColor: Color.colorGray_200,
    height: 40,
    left: 0,
    right: 0,
    top: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  arrowCircleDownRight1: {
    left: 16,
    marginTop: -21,
    height: 24,
    width: 24,
    top: '50%',
    position: 'absolute',
    overflow: 'hidden',
  },
  trsHistoryBoldName: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: 48,
    marginTop: -21,
    top: '50%',
    textAlign: 'left',
    fontWeight: '600',
    position: 'absolute',
  },
  projectBonus: {
    marginTop: 5,
    left: 48,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    top: '50%',
    textAlign: 'left',
    position: 'absolute',
  },
  text2: {
    color: Color.colorForestgreen,
  },
  container6: {
    top: 763,
  },
  text3: {
    color: Color.colorCrimson,
  },
  container7: {
    top: 943,
  },
  container8: {
    top: 853,
  },
  image7Icon: {
    right: 5,
    width: 143,
    height: 114,
  },
  getYourSalary: {
    top: 19,
    width: 175,
    left: 22,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.outfitRegular,
    textAlign: 'left',
    color: Color.colorGray_100,
    position: 'absolute',
  },
  turnOn: {
    marginTop: -9,
    marginLeft: -20,
    fontSize: FontSize.size_2xs,
    lineHeight: 18,
    color: Color.colorLightgoldenrodyellow,
    fontFamily: FontFamily.plusJakartaSansRegular,
    left: '50%',
    top: '50%',
    textAlign: 'left',
    position: 'absolute',
  },
  button3: {
    bottom: 21,
    borderColor: Color.colorLightgoldenrodyellow,
    width: 120,
    left: 22,
    borderWidth: 1,
    borderStyle: 'solid',
    height: 28,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_300,
  },
  iRemove1: {
    right: 8,
    width: 20,
    height: 20,
    top: 9,
    position: 'absolute',
    overflow: 'hidden',
  },
  container9: {
    top: 502,
    backgroundColor: Color.colorMintcream,
    height: 147,
    borderRadius: Border.br_5xs,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: 'rgba(23, 26, 31, 0.12)',
    right: 24,
    left: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  cardNumber1: {
    top: 133,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  container10: {
    left: 340,
  },
  monday210823: {
    top: 727,
    color: Color.colorLightslategray,
    textAlign: 'left',
    position: 'absolute',
    left: 24,
  },
  container12Icon: {
    left: 0,
  },
  container13Icon: {
    left: 82,
  },
  transfer: {
    left: 0,
  },
  container14Icon: {
    left: 164,
  },
  payBills: {
    left: 166,
  },
  scan: {
    left: 92,
  },
  container15Icon: {
    left: 246,
  },
  savings: {
    left: 247,
  },
  request: {
    left: 329,
  },
  container16Icon: {
    left: 330,
  },
  container12Parent: {
    top: 392,
    width: 385,
    height: 78,
    left: 24,
    position: 'absolute',
  },
  rectangle: {
    height: 2,
    backgroundColor: Color.colorLightgoldenrodyellow,
    left: 0,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  houseIcon: {
    marginTop: -22,
    marginLeft: -13.95,
    width: 28,
    left: '50%',
    top: '50%',
  },
  home: {
    marginLeft: -14.95,
    fontWeight: '700',
    fontFamily: FontFamily.plusJakartaSansBold,
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    marginTop: 6,
    color: Color.colorLightgoldenrodyellow,
    left: '50%',
    top: '50%',
    textAlign: 'left',
    position: 'absolute',
  },
  frame: {
    left: 0,
  },
  activities: {
    marginLeft: -21.95,
  },
  frame1: {
    left: 98,
  },
  contacts: {
    marginLeft: -22.45,
  },
  frame2: {
    left: 195,
  },
  account: {
    marginLeft: -20.45,
  },
  frame3: {
    left: 293,
  },
  tabBarMenu1: {
    backgroundColor: Color.colorGray_300,
  },
  container17: {
    elevation: 2,
    shadowRadius: 2,
    shadowColor: 'rgba(23, 26, 31, 0.12)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
    height: 52,
  },
  homeDashboard: {
    shadowColor: 'rgba(18, 15, 40, 0.12)',
    shadowRadius: 6,
    elevation: 6,
    flex: 1,
    width: '100%',
    height: 1073,
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
