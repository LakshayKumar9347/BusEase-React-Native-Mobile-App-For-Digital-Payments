import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ContactList = () => {
  return (
    <View style={styles.contactList}>
      <View style={styles.container42}>
        <Image
          style={[styles.image20Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-5.png")}
        />
        <Image
          style={[styles.image21Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-6.png")}
        />
      </View>
      <View style={[styles.textbox4, styles.frameBorder]}>
        <Text style={styles.search}>Search</Text>
        <Image
          style={[styles.searchIcon, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/search1.png")}
        />
      </View>
      <Text style={[styles.favorite, styles.favoriteTypo]}>Favorite</Text>
      <View style={[styles.tag2, styles.tag2Layout]}>
        <View style={[styles.frame, styles.tag2Layout]}>
          <Text style={[styles.text, styles.textClr]} />
          <Image
            style={[styles.eAddIcon, styles.seeAllPosition]}
            resizeMode="cover"
            source={require("../assets/e-add.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.avatar6Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/avatar-6.png")}
      />
      <Text style={[styles.william, styles.adamTypo]}>William</Text>
      <Image
        style={[styles.avatar7Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/avatar-7.png")}
      />
      <Text style={[styles.adam, styles.adamTypo]}>Adam</Text>
      <Image
        style={[styles.avatar8Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/avatar-8.png")}
      />
      <Text style={[styles.julia, styles.adamTypo]}>Julia</Text>
      <Text style={[styles.yourContacts, styles.favoriteTypo]}>
        Your contacts
      </Text>
      <View style={[styles.button11, styles.textbox4Bg]}>
        <Text style={[styles.seeAll, styles.textTypo]}>See all</Text>
        <Image
          style={[styles.chevronRightLarge, styles.houseIconPosition]}
          resizeMode="cover"
          source={require("../assets/chevron-right-large.png")}
        />
      </View>
      <Image
        style={[styles.avatar9Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/avatar-9.png")}
      />
      <Text style={[styles.text1, styles.textPosition]}>(614) 878-1487</Text>
      <Text style={[styles.charlesRobinson, styles.textPosition]}>
        Charles Robinson
      </Text>
      <Image
        style={[styles.contactListChild, styles.contactLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.avatar10Icon, styles.avatar10IconPosition]}
        resizeMode="cover"
        source={require("../assets/avatar-10.png")}
      />
      <Text style={[styles.text2, styles.textPosition]}>(717) 634-1826</Text>
      <Text style={[styles.ashleyWatson, styles.avatar10IconPosition]}>
        Ashley Watson
      </Text>
      <Image
        style={[styles.contactListItem, styles.contactLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.avatar11Icon, styles.avatar11IconPosition]}
        resizeMode="cover"
        source={require("../assets/avatar-11.png")}
      />
      <Text style={[styles.text3, styles.textPosition]}>(719) 984-7459</Text>
      <Text style={[styles.sarahJackson, styles.avatar11IconPosition]}>
        Sarah Jackson
      </Text>
      <View style={[styles.container43, styles.containerLayout]}>
        <Text style={[styles.phone, styles.bankPosition]}>Phone</Text>
        <Image
          style={[styles.phoneCall1, styles.houseIconPosition]}
          resizeMode="cover"
          source={require("../assets/phone-call-1.png")}
        />
      </View>
      <View style={[styles.container44, styles.containerLayout]}>
        <Text style={[styles.scanCode, styles.bankPosition]}>Scan code</Text>
        <Image
          style={[styles.phoneCall1, styles.houseIconPosition]}
          resizeMode="cover"
          source={require("../assets/qr-code-2.png")}
        />
      </View>
      <View style={[styles.container45, styles.containerLayout]}>
        <Text style={[styles.bank, styles.bankPosition]}>Bank</Text>
        <Image
          style={[styles.phoneCall1, styles.houseIconPosition]}
          resizeMode="cover"
          source={require("../assets/bank-1.png")}
        />
      </View>
      <Text style={[styles.addNewContact, styles.favoriteTypo]}>
        Add new contact
      </Text>
      <View style={styles.container46}>
        <View style={styles.tabBarMenu3}>
          <View style={[styles.frame1, styles.frameLayout]}>
            <Image
              style={[styles.houseIcon, styles.houseIconPosition]}
              resizeMode="cover"
              source={require("../assets/house2.png")}
            />
            <Text style={[styles.home, styles.homePosition]}>Home</Text>
          </View>
          <View style={[styles.frame2, styles.frameLayout]}>
            <Image
              style={[styles.houseIcon, styles.houseIconPosition]}
              resizeMode="cover"
              source={require("../assets/clock-counter-clockwise.png")}
            />
            <Text style={[styles.activities, styles.homePosition]}>
              Activities
            </Text>
          </View>
          <View style={[styles.frame3, styles.frameLayout]}>
            <View style={[styles.rectangle, styles.framePosition]} />
            <Image
              style={[styles.houseIcon, styles.houseIconPosition]}
              resizeMode="cover"
              source={require("../assets/address-book1.png")}
            />
            <Text style={[styles.contacts, styles.homePosition]}>Contacts</Text>
          </View>
          <View style={[styles.frame4, styles.frameLayout]}>
            <Image
              style={[styles.houseIcon, styles.houseIconPosition]}
              resizeMode="cover"
              source={require("../assets/user-circle2.png")}
            />
            <Text style={[styles.account, styles.homePosition]}>Account</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    marginTop: -20,
    top: "50%",
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  frameBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconLayout2: {
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  favoriteTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.outfitSemiBold,
    fontWeight: "600",
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    left: 24,
    textAlign: "left",
    position: "absolute",
  },
  tag2Layout: {
    height: 36,
    width: 36,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  textClr: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  seeAllPosition: {
    marginTop: -10,
    left: "50%",
    top: "50%",
  },
  iconLayout1: {
    height: 64,
    width: 64,
    borderRadius: Border.br_13xl,
    top: 359,
    position: "absolute",
    overflow: "hidden",
  },
  adamTypo: {
    textAlign: "center",
    top: 429,
    fontFamily: FontFamily.outfitRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
    position: "absolute",
  },
  textbox4Bg: {
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorLightslategray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.plusJakartaSansRegular,
    position: "absolute",
  },
  houseIconPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 44,
    width: 44,
    borderRadius: Border.br_3xl,
    left: 24,
    overflow: "hidden",
  },
  textPosition: {
    left: 80,
    textAlign: "left",
  },
  contactLayout: {
    width: 342,
    maxHeight: "100%",
    left: 24,
    position: "absolute",
  },
  avatar10IconPosition: {
    top: 616,
    position: "absolute",
  },
  avatar11IconPosition: {
    top: 701,
    position: "absolute",
  },
  containerLayout: {
    height: 94,
    width: 100,
    top: 187,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  bankPosition: {
    color: Color.colorDarkslategray_200,
    marginTop: 5,
    textAlign: "center",
    fontFamily: FontFamily.outfitRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
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
    left: "50%",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  framePosition: {
    top: 0,
    left: 0,
  },
  image20Icon: {
    width: 72,
    top: "50%",
    left: 0,
  },
  image21Icon: {
    width: 96,
    top: "50%",
    right: 0,
  },
  container42: {
    backgroundColor: Color.colorGray_200,
    height: 40,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  search: {
    marginTop: -13.5,
    left: 44,
    color: "#bdc1ca",
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  searchIcon: {
    marginTop: -10.5,
    left: 16,
    top: "50%",
  },
  textbox4: {
    top: 64,
    right: 24,
    left: 23,
    borderColor: Color.colorLightslategray,
    height: 45,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
  },
  favorite: {
    top: 313,
  },
  text: {
    marginTop: -11,
    marginLeft: 10,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray,
    left: "50%",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  eAddIcon: {
    marginLeft: -10,
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    borderRadius: 18,
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  tag2: {
    top: 377,
    left: 264,
  },
  avatar6Icon: {
    left: 104,
  },
  william: {
    left: 113,
  },
  avatar7Icon: {
    left: 24,
  },
  adam: {
    left: 37,
  },
  avatar8Icon: {
    left: 184,
  },
  julia: {
    left: 202,
  },
  yourContacts: {
    top: 484,
  },
  seeAll: {
    marginLeft: -26.5,
    marginTop: -10,
    left: "50%",
    top: "50%",
    textAlign: "left",
  },
  chevronRightLarge: {
    marginTop: -6,
    marginLeft: 14.5,
    width: 12,
    height: 12,
  },
  button11: {
    top: 483,
    right: 13,
    borderRadius: Border.br_10xs,
    width: 69,
    height: 32,
    overflow: "hidden",
  },
  avatar9Icon: {
    top: 531,
    position: "absolute",
  },
  text1: {
    top: 557,
    color: Color.colorLightslategray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.plusJakartaSansRegular,
    position: "absolute",
  },
  charlesRobinson: {
    top: 531,
    position: "absolute",
    fontFamily: FontFamily.outfitRegular,
    left: 80,
    color: Color.colorGray_100,
    lineHeight: 26,
    fontSize: FontSize.size_base,
  },
  contactListChild: {
    top: 595,
  },
  avatar10Icon: {
    height: 44,
    width: 44,
    borderRadius: Border.br_3xl,
    left: 24,
    overflow: "hidden",
  },
  text2: {
    top: 642,
    color: Color.colorLightslategray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.plusJakartaSansRegular,
    position: "absolute",
  },
  ashleyWatson: {
    left: 80,
    textAlign: "left",
    fontFamily: FontFamily.outfitRegular,
    color: Color.colorGray_100,
    lineHeight: 26,
    fontSize: FontSize.size_base,
  },
  contactListItem: {
    top: 680,
  },
  avatar11Icon: {
    height: 44,
    width: 44,
    borderRadius: Border.br_3xl,
    left: 24,
    overflow: "hidden",
  },
  text3: {
    top: 727,
    color: Color.colorLightslategray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.plusJakartaSansRegular,
    position: "absolute",
  },
  sarahJackson: {
    left: 80,
    textAlign: "left",
    fontFamily: FontFamily.outfitRegular,
    color: Color.colorGray_100,
    lineHeight: 26,
    fontSize: FontSize.size_base,
  },
  phone: {
    marginLeft: -20,
  },
  phoneCall1: {
    marginTop: -31,
    marginLeft: -15,
    width: 30,
    height: 30,
  },
  container43: {
    borderColor: "#b7e6f3",
    left: 24,
  },
  scanCode: {
    marginLeft: -32,
  },
  container44: {
    left: 145,
    borderColor: "#d9c3ff",
  },
  bank: {
    marginLeft: -16,
  },
  container45: {
    left: 266,
    borderColor: "#e9f8e8",
  },
  addNewContact: {
    top: 141,
  },
  houseIcon: {
    marginTop: -22,
    marginLeft: -13.95,
    width: 28,
    height: 28,
  },
  home: {
    marginLeft: -14.95,
    color: Color.colorDimgray,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  frame1: {
    left: 0,
  },
  activities: {
    marginLeft: -21.95,
    color: Color.colorDimgray,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  frame2: {
    left: 98,
  },
  rectangle: {
    backgroundColor: Color.colorLightgoldenrodyellow,
    height: 2,
    left: 0,
    right: 0,
    position: "absolute",
    top: 0,
  },
  contacts: {
    marginLeft: -22.95,
    fontWeight: "700",
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorLightgoldenrodyellow,
  },
  frame3: {
    left: 195,
  },
  account: {
    marginLeft: -20.45,
    color: Color.colorDimgray,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  frame4: {
    left: 293,
  },
  tabBarMenu3: {
    bottom: 0,
    backgroundColor: Color.colorGray_300,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  container46: {
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowRadius: 2,
    elevation: 2,
    height: 52,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
  contactList: {
    shadowColor: "rgba(18, 15, 40, 0.12)",
    shadowRadius: 6,
    elevation: 6,
    flex: 1,
    width: "100%",
    height: 882,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
});

export default ContactList;
