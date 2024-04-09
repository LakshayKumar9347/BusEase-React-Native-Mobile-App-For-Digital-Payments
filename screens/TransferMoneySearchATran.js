import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const TransferMoneySearchATran = () => {
  return (
    <View style={styles.transferMoneySearchATran}>
      <View style={styles.container18}>
        <Image
          style={[styles.image8Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-8.png")}
        />
        <Image
          style={[styles.image9Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-6.png")}
        />
      </View>
      <View style={[styles.textbox3, styles.button4Position]}>
        <Text style={[styles.e, styles.eTypo]}>E|</Text>
        <Image
          style={[styles.searchIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
      </View>
      <View style={[styles.button4, styles.button4Position]}>
        <Text style={[styles.addNewContact, styles.eTypo]}>
          Add new contact
        </Text>
        <Image
          style={[styles.fAddIcon, styles.fAddIconPosition]}
          resizeMode="cover"
          source={require("../assets/f-add.png")}
        />
      </View>
      <Image
        style={[styles.avatar1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/avatar-1.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>(929) 617-0714</Text>
      <Text style={[styles.elizabethTaylor, styles.evanParkerTypo]}>
        <Text style={styles.e1}>E</Text>
        <Text style={styles.lizabet}>lizabet</Text>
        <Text style={styles.hTaylor}>h Taylor</Text>
      </Text>
      <Image
        style={[styles.avatar2Icon, styles.avatar2IconPosition]}
        resizeMode="cover"
        source={require("../assets/avatar-2.png")}
      />
      <Text style={[styles.emilyAnderson, styles.avatar2IconPosition]}>
        <Text style={styles.e1}>E</Text>
        <Text style={styles.lizabet}>mily An</Text>
        <Text style={styles.hTaylor}>derson</Text>
      </Text>
      <Text style={[styles.text1, styles.textTypo]}>(801) 828-7844</Text>
      <Image
        style={[styles.avatar3Icon, styles.evanParkerPosition]}
        resizeMode="cover"
        source={require("../assets/avatar-3.png")}
      />
      <Text style={[styles.evanParker, styles.evanParkerPosition]}>
        <Text style={styles.e1}>E</Text>
        <Text style={styles.lizabet}>v</Text>
        <Text style={styles.hTaylor}>an Parker</Text>
      </Text>
      <Text style={[styles.text2, styles.textTypo]}>(815) 897-0910</Text>
      <View style={[styles.container19, styles.container19Position]}>
        <Text style={[styles.transferTo, styles.iconPosition]}>
          Transfer to
        </Text>
        <Image
          style={[styles.arrowLeft1, styles.fAddIconPosition]}
          resizeMode="cover"
          source={require("../assets/arrow-left-1.png")}
        />
      </View>
      <Image
        style={[styles.image10Icon, styles.container19Position]}
        resizeMode="cover"
        source={require("../assets/image-10.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  button4Position: {
    borderRadius: Border.br_5xs,
    right: 24,
    position: "absolute",
  },
  eTypo: {
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansRegular,
    top: "50%",
    position: "absolute",
  },
  fAddIconPosition: {
    height: 24,
    width: 24,
    marginTop: -12,
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
  textTypo: {
    color: Color.colorLightslategray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: 83,
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansRegular,
    position: "absolute",
  },
  evanParkerTypo: {
    fontFamily: FontFamily.outfitRegular,
    left: 83,
    textAlign: "left",
    lineHeight: 26,
    fontSize: FontSize.size_base,
  },
  avatar2IconPosition: {
    top: 318,
    position: "absolute",
  },
  evanParkerPosition: {
    top: 380,
    position: "absolute",
  },
  container19Position: {
    position: "absolute",
    left: 0,
    right: 0,
    overflow: "hidden",
  },
  image8Icon: {
    width: 72,
    marginTop: -20,
    top: "50%",
    height: 40,
    overflow: "hidden",
    left: 0,
  },
  image9Icon: {
    width: 96,
    marginTop: -20,
    top: "50%",
    height: 40,
    overflow: "hidden",
    right: 0,
  },
  container18: {
    top: 0,
    backgroundColor: Color.colorGray_200,
    height: 40,
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  e: {
    marginTop: -13.5,
    left: 44,
    color: Color.colorGray_100,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  searchIcon: {
    marginTop: -10.5,
    left: 16,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  textbox3: {
    top: 111,
    left: 23,
    backgroundColor: Color.colorGray_300,
    borderStyle: "solid",
    borderColor: Color.colorLightslategray,
    borderWidth: 1,
    height: 45,
  },
  addNewContact: {
    marginTop: -14,
    marginLeft: -57,
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    color: Color.colorDarkgreen,
    left: "50%",
  },
  fAddIcon: {
    marginLeft: -89,
    left: "50%",
  },
  button4: {
    top: 180,
    backgroundColor: Color.colorMintcream,
    height: 52,
    left: 24,
    overflow: "hidden",
  },
  avatar1Icon: {
    top: 256,
    position: "absolute",
  },
  text: {
    top: 282,
  },
  e1: {
    color: Color.colorLightgoldenrodyellow,
  },
  lizabet: {
    color: Color.colorDarkslategray_200,
  },
  hTaylor: {
    color: Color.colorGray_100,
  },
  elizabethTaylor: {
    top: 256,
    position: "absolute",
  },
  avatar2Icon: {
    height: 44,
    width: 44,
    borderRadius: Border.br_3xl,
    left: 24,
    overflow: "hidden",
  },
  emilyAnderson: {
    fontFamily: FontFamily.outfitRegular,
    left: 83,
    textAlign: "left",
    lineHeight: 26,
    fontSize: FontSize.size_base,
  },
  text1: {
    top: 344,
  },
  avatar3Icon: {
    height: 44,
    width: 44,
    borderRadius: Border.br_3xl,
    left: 24,
    overflow: "hidden",
  },
  evanParker: {
    fontFamily: FontFamily.outfitRegular,
    left: 83,
    textAlign: "left",
    lineHeight: 26,
    fontSize: FontSize.size_base,
  },
  text2: {
    top: 406,
  },
  transferTo: {
    marginTop: -15,
    marginLeft: -51,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.outfitSemiBold,
    textAlign: "center",
    color: Color.colorDarkslategray_200,
    left: "50%",
  },
  arrowLeft1: {
    left: 24,
  },
  container19: {
    top: 50,
    height: 46,
    left: 0,
    right: 0,
    backgroundColor: Color.colorWhite,
  },
  image10Icon: {
    bottom: 0,
    maxWidth: "100%",
    height: 293,
    left: 0,
    right: 0,
  },
  transferMoneySearchATran: {
    shadowColor: "rgba(18, 15, 40, 0.12)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default TransferMoneySearchATran;
