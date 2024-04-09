import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const AccountSettings = () => {
  return (
    <View style={[styles.accountSettings, styles.container50ShadowBox]}>
      <View style={styles.accountSettingsChild} />
      <View style={styles.container49}>
        <Image
          style={[styles.image25Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-5.png")}
        />
        <Image
          style={[styles.image26Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-6.png")}
        />
      </View>
      <Image
        style={styles.avatar13Icon}
        resizeMode="cover"
        source={require("../assets/avatar-13.png")}
      />
      <Text style={[styles.antonioDiaz, styles.textPosition]}>
        Antonio Diaz
      </Text>
      <Text style={[styles.text, styles.textPosition]}>(929) 617-0714</Text>
      <Image
        style={[styles.qrCode3, styles.qrCode3Layout]}
        resizeMode="cover"
        source={require("../assets/qr-code-3.png")}
      />
      <Image
        style={[styles.edit1Icon, styles.qrCode3Layout]}
        resizeMode="cover"
        source={require("../assets/edit-1.png")}
      />
      <View style={styles.sidebarMenu1}>
        <View style={[styles.frame, styles.frameLayout1]}>
          <Text style={[styles.personalInformation, styles.logOutTypo]}>
            Personal Information
          </Text>
          <Image
            style={[styles.arrowSmRight, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-sm-right.png")}
          />
          <Image
            style={[styles.userListIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/user-list.png")}
          />
        </View>
        <View style={[styles.frame1, styles.frameLayout1]}>
          <Text style={[styles.personalInformation, styles.logOutTypo]}>
            Cards management
          </Text>
          <Image
            style={[styles.arrowSmRight, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-sm-right.png")}
          />
          <Image
            style={[styles.userListIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/credit-card.png")}
          />
        </View>
        <View style={[styles.frame2, styles.frameLayout1]}>
          <Text
            style={[styles.personalInformation, styles.logOutTypo]}
          >{`Privacy & Security`}</Text>
          <Image
            style={[styles.arrowSmRight, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-sm-right.png")}
          />
          <Image
            style={[styles.userListIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/security.png")}
          />
        </View>
        <View style={[styles.frame3, styles.frameLayout1]}>
          <Text style={[styles.personalInformation, styles.logOutTypo]}>
            Support
          </Text>
          <Image
            style={[styles.arrowSmRight, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-sm-right.png")}
          />
          <Image
            style={[styles.userListIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/headset.png")}
          />
        </View>
      </View>
      <View style={[styles.button13, styles.buttonPosition]}>
        <Text style={[styles.referralCode, styles.logOutTypo]}>
          Referral code
        </Text>
      </View>
      <View style={[styles.button14, styles.buttonPosition]}>
        <Text style={[styles.logOut, styles.logOutTypo]}>Log out</Text>
      </View>
      <View style={[styles.container50, styles.container50Position]}>
        <View style={[styles.tabBarMenu4, styles.container50Position]}>
          <View style={[styles.frame4, styles.frameLayout]}>
            <Image
              style={[styles.houseIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/house2.png")}
            />
            <Text style={[styles.home, styles.homePosition]}>Home</Text>
          </View>
          <View style={[styles.frame5, styles.frameLayout]}>
            <Image
              style={[styles.houseIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/clock-counter-clockwise.png")}
            />
            <Text style={[styles.activities, styles.homePosition]}>
              Activities
            </Text>
          </View>
          <View style={[styles.frame6, styles.frameLayout]}>
            <Image
              style={[styles.houseIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/address-book.png")}
            />
            <Text style={[styles.contacts, styles.homePosition]}>Contacts</Text>
          </View>
          <View style={[styles.frame7, styles.frameLayout]}>
            <View style={styles.rectangle} />
            <Image
              style={[styles.houseIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/user-circle3.png")}
            />
            <Text style={[styles.account, styles.homePosition]}>Account</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container50ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
  iconPosition: {
    top: "50%",
    marginTop: -20,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  qrCode3Layout: {
    height: 24,
    width: 24,
    top: 55,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout1: {
    height: 48,
    width: 342,
    backgroundColor: Color.colorGray_300,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  logOutTypo: {
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansRegular,
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 28,
    width: 28,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonPosition: {
    borderRadius: Border.br_5xs,
    height: 52,
    left: 24,
    right: 24,
    position: "absolute",
    overflow: "hidden",
  },
  container50Position: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 98,
    height: 52,
    backgroundColor: Color.colorGray_300,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homePosition: {
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    marginTop: 6,
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  accountSettingsChild: {
    backgroundColor: Color.colorMintcream,
    height: 269,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  image25Icon: {
    width: 72,
    left: 0,
  },
  image26Icon: {
    width: 96,
    right: 0,
  },
  container49: {
    backgroundColor: Color.colorGray_200,
    height: 40,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  avatar13Icon: {
    marginLeft: -41,
    top: 96,
    borderRadius: Border.br_22xl,
    width: 82,
    height: 82,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  antonioDiaz: {
    marginLeft: -50,
    top: 190,
    fontFamily: FontFamily.outfitRegular,
    color: Color.colorGray_100,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
  },
  text: {
    marginLeft: -48,
    top: 222,
    fontSize: FontSize.size_sm,
    lineHeight: 22,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  qrCode3: {
    right: 64,
  },
  edit1Icon: {
    right: 19,
  },
  personalInformation: {
    marginTop: -13,
    left: 52,
    fontSize: FontSize.size_base,
    lineHeight: 26,
    width: 246,
    color: Color.colorDimgray,
  },
  arrowSmRight: {
    right: 16,
    marginTop: -14,
  },
  userListIcon: {
    left: 16,
    marginTop: -14,
  },
  frame: {
    top: 0,
  },
  frame1: {
    top: 60,
  },
  frame2: {
    top: 120,
  },
  frame3: {
    top: 180,
  },
  sidebarMenu1: {
    top: 293,
    height: 228,
    backgroundColor: Color.colorGray_300,
    left: 24,
    right: 24,
    position: "absolute",
  },
  referralCode: {
    marginLeft: -58,
    color: Color.colorDarkgreen,
    marginTop: -14,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    left: "50%",
  },
  button13: {
    top: 545,
    borderStyle: "solid",
    borderColor: Color.colorDarkgreen,
    borderWidth: 1,
    height: 52,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
  },
  logOut: {
    marginLeft: -32.5,
    marginTop: -14,
    color: Color.colorDimgray,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    left: "50%",
  },
  button14: {
    top: 613,
    backgroundColor: Color.colorWhitesmoke,
    height: 52,
  },
  houseIcon: {
    marginTop: -22,
    marginLeft: -13.95,
    left: "50%",
  },
  home: {
    marginLeft: -14.95,
    color: Color.colorDimgray,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  frame4: {
    left: 0,
  },
  activities: {
    marginLeft: -21.95,
    color: Color.colorDimgray,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  frame5: {
    left: 98,
  },
  contacts: {
    marginLeft: -22.45,
    color: Color.colorDimgray,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  frame6: {
    left: 195,
  },
  rectangle: {
    backgroundColor: Color.colorLightgoldenrodyellow,
    height: 2,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  account: {
    marginLeft: -20.95,
    fontWeight: "700",
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorLightgoldenrodyellow,
  },
  frame7: {
    left: 293,
  },
  tabBarMenu4: {
    backgroundColor: Color.colorGray_300,
    top: 0,
  },
  container50: {
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowRadius: 2,
    elevation: 2,
    height: 52,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
  accountSettings: {
    shadowColor: "rgba(18, 15, 40, 0.12)",
    shadowRadius: 6,
    elevation: 6,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AccountSettings;
