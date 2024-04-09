import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AddANewContact = () => {
  return (
    <View style={styles.addANewContact}>
      <View style={styles.container47}>
        <Image
          style={[styles.image22Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-5.png")}
        />
        <Image
          style={[styles.image23Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-6.png")}
        />
      </View>
      <View style={[styles.container48, styles.container48Position]}>
        <Text style={[styles.addNewContact, styles.savePosition]}>
          Add new contact
        </Text>
        <Image
          style={[styles.arrowLeft5, styles.nCheck1Layout]}
          resizeMode="cover"
          source={require("../assets/arrow-left-1.png")}
        />
      </View>
      <View style={[styles.textbox5, styles.textboxPosition]}>
        <View style={[styles.textfield, styles.button12Layout]}>
          <Text style={[styles.text, styles.textTypo]}>
            6756 5647 1223 6757
          </Text>
        </View>
        <Text style={[styles.accountNumber, styles.textTypo]}>
          Account number
        </Text>
      </View>
      <Image
        style={styles.avatar12Icon}
        resizeMode="cover"
        source={require("../assets/avatar-12.png")}
      />
      <Text style={[styles.text1, styles.text1Position]}>(207) 441-7223</Text>
      <Text style={[styles.mariaGomez, styles.text1Position]}>Maria Gomez</Text>
      <Image
        style={[styles.nCheck1, styles.nCheck1Position]}
        resizeMode="cover"
        source={require("../assets/n-check-1.png")}
      />
      <View style={[styles.button12, styles.button12Layout]}>
        <Text style={[styles.save, styles.textTypo]}>Save</Text>
      </View>
      <View style={[styles.textbox6, styles.textboxPosition]}>
        <Text style={[styles.accountNumber, styles.textTypo]}>Select bank</Text>
        <View style={[styles.textfield, styles.button12Layout]}>
          <Text style={[styles.abcBank, styles.textTypo]}>ABC Bank</Text>
          <Image
            style={[styles.bankIcon, styles.bankIconPosition]}
            resizeMode="cover"
            source={require("../assets/bank.png")}
          />
          <Image
            style={[styles.chevronRightLarge, styles.bankIconPosition]}
            resizeMode="cover"
            source={require("../assets/chevron-right-large2.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.image24Icon, styles.container48Position]}
        resizeMode="cover"
        source={require("../assets/image-24.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: "50%",
    overflow: "hidden",
  },
  container48Position: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  savePosition: {
    left: "50%",
    top: "50%",
  },
  nCheck1Layout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  textboxPosition: {
    height: 81,
    backgroundColor: Color.colorGray_300,
    right: 24,
    left: 24,
    position: "absolute",
  },
  button12Layout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  text1Position: {
    left: 83,
    textAlign: "left",
    position: "absolute",
  },
  nCheck1Position: {
    right: 24,
    overflow: "hidden",
  },
  bankIconPosition: {
    marginTop: -12.5,
    height: 24,
    width: 24,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  image22Icon: {
    width: 72,
    marginTop: -20,
    top: "50%",
    height: 40,
    position: "absolute",
    left: 0,
  },
  image23Icon: {
    width: 96,
    marginTop: -20,
    top: "50%",
    height: 40,
    position: "absolute",
    right: 0,
  },
  container47: {
    backgroundColor: Color.colorGray_200,
    height: 40,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  addNewContact: {
    marginTop: -15,
    marginLeft: -74,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.outfitSemiBold,
    textAlign: "center",
    color: Color.colorDarkslategray_200,
    position: "absolute",
  },
  arrowLeft5: {
    marginTop: -12,
    left: 24,
    top: "50%",
    overflow: "hidden",
  },
  container48: {
    top: 52,
    height: 46,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  text: {
    color: Color.colorGray_100,
    marginTop: -14.5,
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    top: "50%",
    left: 20,
  },
  textfield: {
    top: 28,
    bottom: 0,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorLightslategray,
    borderWidth: 1,
    right: 0,
    backgroundColor: Color.colorWhite,
  },
  accountNumber: {
    fontWeight: "700",
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorDarkslategray_100,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  textbox5: {
    top: 220,
  },
  avatar12Icon: {
    borderRadius: Border.br_3xl,
    width: 44,
    height: 44,
    top: 325,
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    top: 351,
    fontSize: FontSize.size_xs,
    lineHeight: 20,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  mariaGomez: {
    fontSize: FontSize.size_base,
    lineHeight: 26,
    fontFamily: FontFamily.outfitRegular,
    top: 325,
    color: Color.colorDarkslategray_200,
  },
  nCheck1: {
    top: 336,
    height: 24,
    width: 24,
    position: "absolute",
  },
  save: {
    marginTop: -14,
    marginLeft: -21,
    color: Color.colorDarkgreen,
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: "50%",
    top: "50%",
  },
  button12: {
    top: 395,
    backgroundColor: Color.colorMintcream,
    height: 52,
    right: 24,
    overflow: "hidden",
    left: 24,
  },
  abcBank: {
    left: 52,
    color: Color.colorGray_100,
    marginTop: -14.5,
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    top: "50%",
  },
  bankIcon: {
    left: 20,
  },
  chevronRightLarge: {
    right: 21,
  },
  textbox6: {
    top: 119,
  },
  image24Icon: {
    top: 551,
    height: 293,
  },
  addANewContact: {
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

export default AddANewContact;
