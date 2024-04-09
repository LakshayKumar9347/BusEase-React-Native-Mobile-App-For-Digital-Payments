import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';

const DashboardTransactionHistory = () => {
  return (
    <ScrollView>
      <View style={styles.dashboardTransactionHistory}>
        <View style={styles.container35}>
          {/* <Image
            style={[styles.image18Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require('../assets/image-8.png')}
          /> */}
          <Image
            style={[styles.image19Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require('../assets/image-6.png')}
          />
        </View>
        <View style={styles.button10}>
          <Text style={[styles.mostRecent, styles.mostRecentTypo]}>
            Most recent
          </Text>
          <Image
            style={styles.enlargeIcon}
            resizeMode="cover"
            source={require('../assets/enlarge.png')}
          />
        </View>
        <Text style={[styles.transaction, styles.transactionClr]}>
          Transaction
        </Text>
        <View style={styles.dropdownButton1}>
          <Text style={[styles.last3Months, styles.transactionClr]}>
            Last 3 months
          </Text>
          <Image
            style={styles.arrowDropDownLarge}
            resizeMode="cover"
            source={require('../assets/arrow-drop-down-large.png')}
          />
        </View>
        <Text style={styles.statistics}>Statistics</Text>
        <View style={[styles.columnBarChart1, styles.monday210823Position]}>
          <View style={styles.chart}>
            <View style={[styles.rectangle, styles.rectangleBg]} />
            <View style={[styles.rectangle1, styles.rectanglePosition]} />
            <View style={[styles.rectangle2, styles.rectangleBg]} />
            <View style={[styles.rectangle3, styles.rectanglePosition]} />
            <View style={[styles.rectangle4, styles.rectangleBg]} />
            <View style={[styles.rectangle5, styles.rectanglePosition]} />
          </View>
          <View style={styles.frame}>
            <View style={[styles.group, styles.groupPosition]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseIconPosition]}
                resizeMode="cover"
                source={require('../assets/ellipse.png')}
              />
              <Text style={[styles.moneyIn, styles.moneyPosition]}>
                Money in
              </Text>
            </View>
            <View style={[styles.group1, styles.groupPosition]}>
              <Image
                style={[styles.ellipseIcon1, styles.ellipseIconPosition]}
                resizeMode="cover"
                source={require('../assets/ellipse1.png')}
              />
              <Text style={[styles.moneyOut, styles.moneyPosition]}>
                Money out
              </Text>
            </View>
          </View>
        </View>
        <Text style={[styles.jun, styles.junTypo]}>Jun</Text>
        <Text style={[styles.jul, styles.junTypo]}>Jul</Text>
        <Text style={[styles.aug, styles.junTypo]}>Aug</Text>
        <View style={[styles.container36, styles.containerBorder]}>
          <Image
            style={[styles.arrowCircleDownRight2, styles.arrowLayout]}
            resizeMode="cover"
            source={require('../assets/arrow-circle-down-right-2.png')}
          />
          <Text style={[styles.sarahAllen, styles.sarahAllenTypo]}>
            Sarah Allen
          </Text>
          <Text style={styles.projectBonus}>Project bonus</Text>
          <Text style={[styles.text, styles.textTypo]}>+$300.00</Text>
        </View>
        <View style={[styles.container37, styles.containerBorder]}>
          <Text style={[styles.riversideTheater, styles.sarahAllenTypo]}>
            {'Riverside Theater'}
          </Text>
          <Text style={styles.projectBonus}>Movie tickets</Text>
          <Text style={[styles.text1, styles.textTypo]}>-$13.00</Text>
          <Image
            style={[styles.arrowCircleDownRight2, styles.arrowLayout]}
            resizeMode="cover"
            source={require('../assets/arrow-circle-up-left-3.png')}
          />
        </View>
        <View style={[styles.container38, styles.containerBorder]}>
          <Text style={[styles.riversideTheater, styles.sarahAllenTypo]}>
            Daniel Jackson
          </Text>
          <Text style={styles.projectBonus}>Payments</Text>
          <Text style={[styles.text1, styles.textTypo]}>-$25.00</Text>
          <Image
            style={[styles.arrowCircleDownRight2, styles.arrowLayout]}
            resizeMode="cover"
            source={require('../assets/arrow-circle-up-left-3.png')}
          />
        </View>
        <Text style={[styles.monday210823, styles.monday210823Position]}>
          Monday 21/08/23
        </Text>
        <View style={[styles.container39, styles.containerBorder]}>
          <Image
            style={[styles.arrowCircleDownRight2, styles.arrowLayout]}
            resizeMode="cover"
            source={require('../assets/arrow-circle-down-right-2.png')}
          />
          <Text style={[styles.riversideTheater, styles.sarahAllenTypo]}>
            Creative Market
          </Text>
          <Text style={styles.projectBonus}>Commission</Text>
          <Text style={[styles.text3, styles.textTypo]}>+$129.00</Text>
        </View>
        <View style={[styles.container40, styles.containerBorder]}>
          <Text style={[styles.riversideTheater, styles.sarahAllenTypo]}>
            Trader Joe's
          </Text>
          <Text style={styles.projectBonus}>Grocery</Text>
          <Text style={[styles.text1, styles.textTypo]}>-$125.00</Text>
          <Image
            style={[styles.arrowCircleUpLeft5, styles.arrowLayout]}
            resizeMode="cover"
            source={require('../assets/arrow-circle-up-left-3.png')}
          />
        </View>
        <Text style={[styles.sunday200823, styles.monday210823Position]}>
          Sunday 20/08/23
        </Text>
        <View style={styles.container41}>
          <View style={styles.tabBarMenu2}>
            <TouchableOpacity>
              <View style={[styles.frame1, styles.frameLayout]}>
                <Image
                  style={styles.houseIcon}
                  resizeMode="cover"
                  source={require('../assets/house1.png')}
                />
                <Text style={[styles.home, styles.homePosition]}>Home</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.frame2, styles.frameLayout]}>
                <View style={[styles.rectangle6, styles.rectangleBg]} />
                <Image
                  style={styles.houseIcon}
                  resizeMode="cover"
                  source={require('../assets/clock-counter-clockwise1.png')}
                />
                <Text style={styles.activities}>Activities</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.frame3, styles.frameLayout]}>
                <Image
                  style={styles.houseIcon}
                  resizeMode="cover"
                  source={require('../assets/address-book.png')}
                />
                <Text style={[styles.contacts, styles.homePosition]}>
                  Contacts
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.frame4, styles.frameLayout]}>
                <Image
                  style={styles.houseIcon}
                  resizeMode="cover"
                  source={require('../assets/user-circle1.png')}
                />
                <Text style={[styles.account, styles.homePosition]}>
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
  iconPosition: {
    marginTop: -20,
    top: '50%',
    height: 40,
    position: 'absolute',
    overflow: 'hidden',
  },
  mostRecentTypo: {
    textAlign: 'left',
    color: Color.colorLightslategray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  transactionClr: {
    color: Color.colorGray_100,
    textAlign: 'left',
    position: 'absolute',
  },
  monday210823Position: {
    left: 24,
    position: 'absolute',
  },
  rectangleBg: {
    backgroundColor: Color.colorLightgoldenrodyellow,
    position: 'absolute',
  },
  rectanglePosition: {
    backgroundColor: Color.colorSteelblue,
    width: '10%',
    bottom: '0%',
    position: 'absolute',
  },
  groupPosition: {
    marginTop: -11,
    height: 22,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  ellipseIconPosition: {
    height: 16,
    width: 16,
    marginTop: -8,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  moneyPosition: {
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    marginTop: -11,
    color: Color.colorGray_100,
    textAlign: 'left',
    fontFamily: FontFamily.plusJakartaSansRegular,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  junTypo: {
    textAlign: 'center',
    top: 366,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    position: 'absolute',
  },
  containerBorder: {
    height: 74,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: 'solid',
    borderRadius: Border.br_5xs,
    right: 24,
    left: 24,
    position: 'absolute',
    backgroundColor: Color.colorWhite,
  },
  arrowLayout: {
    height: 24,
    width: 24,
    top: '50%',
    position: 'absolute',
    overflow: 'hidden',
  },
  sarahAllenTypo: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    left: 50,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    fontWeight: '600',
    textAlign: 'left',
    position: 'absolute',
  },
  textTypo: {
    textAlign: 'right',
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    marginTop: -21,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    fontWeight: '600',
    top: '50%',
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
  homePosition: {
    color: Color.colorDimgray,
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    marginTop: 6,
    textAlign: 'left',
    fontFamily: FontFamily.plusJakartaSansRegular,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  image18Icon: {
    width: 72,
    top: '50%',
    left: 0,
  },
  image19Icon: {
    width: 96,
    top: '50%',
    right: 0,
  },
  container35: {
    backgroundColor: Color.colorGray_200,
    height: 40,
    left: 0,
    right: 0,
    top: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  mostRecent: {
    marginTop: -10,
    marginLeft: -42,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  enlargeIcon: {
    marginTop: -6,
    marginLeft: 30,
    width: 12,
    height: 12,
    left: '50%',
    top: '50%',
    position: 'absolute',
    overflow: 'hidden',
  },
  button10: {
    top: 418,
    right: 13,
    borderRadius: Border.br_10xs,
    width: 100,
    height: 32,
    backgroundColor: Color.colorGray_300,
    position: 'absolute',
    overflow: 'hidden',
  },
  transaction: {
    top: 419,
    fontFamily: FontFamily.outfitSemiBold,
    fontWeight: '600',
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    left: 24,
  },
  last3Months: {
    marginTop: -8.5,
    left: 8,
    fontSize: FontSize.size_2xs,
    lineHeight: 18,
    color: Color.colorGray_100,
    fontFamily: FontFamily.plusJakartaSansRegular,
    top: '50%',
  },
  arrowDropDownLarge: {
    marginTop: -5,
    right: 7,
    width: 11,
    height: 11,
    top: '50%',
    position: 'absolute',
    overflow: 'hidden',
  },
  dropdownButton1: {
    top: 53,
    right: 25,
    borderRadius: 6,
    backgroundColor: Color.colorWhitesmoke,
    width: 110,
    height: 27,
    position: 'absolute',
  },
  statistics: {
    top: 52,
    fontFamily: FontFamily.outfitBold,
    fontWeight: '700',
    color: Color.colorGray_100,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    left: 24,
    textAlign: 'left',
    position: 'absolute',
  },
  rectangle: {
    height: '82.83%',
    top: '17.17%',
    right: '90%',
    width: '10%',
    backgroundColor: Color.colorLightgoldenrodyellow,
    bottom: '0%',
    left: '0%',
  },
  rectangle1: {
    height: '46.97%',
    top: '53.03%',
    right: '77.78%',
    left: '12.22%',
  },
  rectangle2: {
    height: '39.39%',
    top: '60.61%',
    right: '51.11%',
    left: '38.89%',
    width: '10%',
    backgroundColor: Color.colorLightgoldenrodyellow,
    bottom: '0%',
  },
  rectangle3: {
    height: '26.77%',
    top: '73.23%',
    right: '38.89%',
    left: '51.11%',
  },
  rectangle4: {
    height: '57.07%',
    top: '42.93%',
    right: '12.22%',
    left: '77.78%',
    width: '10%',
    backgroundColor: Color.colorLightgoldenrodyellow,
    bottom: '0%',
  },
  rectangle5: {
    height: '100%',
    top: '0%',
    left: '90%',
    right: '0%',
    backgroundColor: Color.colorSteelblue,
  },
  chart: {
    height: '77.34%',
    top: '22.66%',
    left: '0%',
    bottom: '0%',
    right: '0%',
    position: 'absolute',
    width: '100%',
  },
  ellipseIcon: {
    marginLeft: -39.5,
  },
  moneyIn: {
    marginLeft: -19.5,
  },
  group: {
    width: 79,
    marginLeft: -94.5,
    marginTop: -11,
  },
  ellipseIcon1: {
    marginLeft: -45.5,
  },
  moneyOut: {
    marginLeft: -25.5,
  },
  group1: {
    marginLeft: 4.5,
    width: 91,
  },
  frame: {
    width: 189,
    height: 22,
    marginLeft: -94.5,
    left: '50%',
    backgroundColor: Color.colorGray_300,
    top: 0,
    position: 'absolute',
  },
  columnBarChart1: {
    top: 98,
    height: 256,
    right: 24,
    backgroundColor: Color.colorGray_300,
  },
  jun: {
    left: 25,
    width: 74,
  },
  jul: {
    marginLeft: -37,
    width: 75,
    left: '50%',
  },
  aug: {
    width: 76,
    right: 24,
  },
  arrowCircleDownRight2: {
    left: 16,
    marginTop: -21,
  },
  sarahAllen: {
    top: 16,
  },
  projectBonus: {
    marginTop: 5,
    left: 50,
    textAlign: 'left',
    color: Color.colorLightslategray,
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    top: '50%',
    position: 'absolute',
  },
  text: {
    color: Color.colorForestgreen,
    textAlign: 'right',
    right: 16,
  },
  container36: {
    top: 494,
  },
  riversideTheater: {
    marginTop: -21,
    top: '50%',
  },
  text1: {
    color: Color.colorCrimson,
    right: 16,
  },
  container37: {
    top: 584,
  },
  container38: {
    top: 674,
  },
  monday210823: {
    top: 466,
    textAlign: 'left',
    color: Color.colorLightslategray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  text3: {
    right: 17,
    color: Color.colorForestgreen,
    textAlign: 'right',
  },
  container39: {
    top: 792,
  },
  arrowCircleUpLeft5: {
    marginTop: -23,
    left: 18,
  },
  container40: {
    top: 882,
  },
  sunday200823: {
    top: 764,
    textAlign: 'left',
    color: Color.colorLightslategray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  houseIcon: {
    marginTop: -22,
    marginLeft: -13.95,
    width: 28,
    height: 28,
    left: '50%',
    top: '50%',
    position: 'absolute',
    overflow: 'hidden',
  },
  home: {
    marginLeft: -14.95,
  },
  frame1: {
    left: 0,
  },
  rectangle6: {
    height: 2,
    left: 0,
    right: 0,
    backgroundColor: Color.colorLightgoldenrodyellow,
    top: 0,
  },
  activities: {
    marginLeft: -22.95,
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorLightgoldenrodyellow,
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    marginTop: 6,
    fontWeight: '700',
    textAlign: 'left',
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  frame2: {
    left: 98,
  },
  contacts: {
    marginLeft: -22.45,
  },
  frame3: {
    left: 195,
  },
  account: {
    marginLeft: -20.45,
  },
  frame4: {
    left: 293,
  },
  tabBarMenu2: {
    bottom: 0,
    backgroundColor: Color.colorGray_300,
    left: 0,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  container41: {
    shadowColor: 'rgba(23, 26, 31, 0.12)',
    shadowRadius: 2,
    elevation: 2,
    height: 52,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
  dashboardTransactionHistory: {
    shadowColor: 'rgba(18, 15, 40, 0.12)',
    shadowRadius: 6,
    elevation: 6,
    flex: 1,
    height: 1044,
    overflow: 'hidden',
    width: '100%',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
});

export default DashboardTransactionHistory;
