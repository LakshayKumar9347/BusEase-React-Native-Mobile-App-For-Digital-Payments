import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const TransferMoneyInputAMessa = () => {
  return (
    <View style={[styles.transferMoneyInputAMessa, styles.container27Bg]}>
      <View style={styles.container26}>
        <Image
          style={[styles.image14Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-8.png")}
        />
        <Image
          style={[styles.image15Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-6.png")}
        />
      </View>
      <View style={[styles.container27, styles.container27Bg]}>
        <Text style={[styles.transferTo, styles.transferTypo]}>
          Transfer to
        </Text>
        <Image
          style={[styles.arrowLeft3, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/arrow-left-1.png")}
        />
      </View>
      <View style={[styles.button6, styles.button6Layout]}>
        <Text style={[styles.confirm, styles.text1Position]}>Confirm</Text>
      </View>
      <Image
        style={styles.transferMoneyInputAMessaChild}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={styles.text}>(929) 617-0714</Text>
      <Text style={styles.elizabethTaylor}>Elizabeth Taylor</Text>
      <Image
        style={styles.avatar5Icon}
        resizeMode="cover"
        source={require("../assets/avatar-1.png")}
      />
      <View style={[styles.container28, styles.containerBorder]}>
        <Text style={[styles.text1, styles.text1Position]}>$150.00</Text>
      </View>
      <Text style={[styles.enterTransferAmount, styles.selectCardTypo]}>
        Enter transfer amount
      </Text>
      <View style={[styles.textarea1, styles.button7Bg]}>
        <Text style={[styles.noteOptional, styles.selectCardTypo]}>
          Note (optional)
        </Text>
        <View style={[styles.textfield, styles.button6Layout]}>
          <Text
            style={[styles.thanksForLending, styles.selectCardTypo]}
          >{`Thanks for lending me money yesterday. I had an absolute blast hanging out with you. `}</Text>
        </View>
      </View>
      <View style={[styles.container29, styles.containerBorder]}>
        <Image
          style={[styles.container30Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/container-24.png")}
        />
        <Text style={[styles.text2, styles.text2Position]}>
          2412 7512 3412 3456
        </Text>
        <Text style={[styles.balance85000, styles.text2Position]}>
          Balance: $850.00
        </Text>
      </View>
      <Text style={[styles.selectCard, styles.selectCardTypo]}>
        Select card
      </Text>
      <View style={[styles.button7, styles.button7Bg]}>
        <Text style={[styles.switch, styles.text1Position]}>Switch</Text>
        <Image
          style={[styles.chevronRightLarge, styles.transferToPosition]}
          resizeMode="cover"
          source={require("../assets/chevron-right-large1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container27Bg: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  transferTypo: {
    fontFamily: FontFamily.outfitSemiBold,
    fontWeight: "600",
  },
  button6Layout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  text1Position: {
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  containerBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    right: 24,
    left: 24,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  selectCardTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  button7Bg: {
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  text2Position: {
    left: 14,
    color: Color.colorLightslategray,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  transferToPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  image14Icon: {
    width: 72,
    marginTop: -20,
    top: "50%",
    height: 40,
    left: 0,
  },
  image15Icon: {
    width: 96,
    marginTop: -20,
    top: "50%",
    height: 40,
    right: 0,
  },
  container26: {
    backgroundColor: Color.colorGray_200,
    height: 40,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  transferTo: {
    marginTop: -15,
    marginLeft: -51,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  arrowLeft3: {
    marginTop: -12,
    width: 24,
    height: 24,
    left: 24,
  },
  container27: {
    top: 50,
    height: 46,
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  confirm: {
    marginTop: -14,
    marginLeft: -35,
    color: Color.colorDarkgreen,
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
  },
  button6: {
    bottom: 30,
    backgroundColor: Color.colorLightgoldenrodyellow,
    height: 52,
    right: 24,
    left: 24,
    overflow: "hidden",
  },
  transferMoneyInputAMessaChild: {
    top: 174,
    maxHeight: "100%",
    width: 342,
    left: 24,
    position: "absolute",
  },
  text: {
    top: 138,
    color: Color.colorLightslategray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: 77,
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansRegular,
    position: "absolute",
  },
  elizabethTaylor: {
    top: 112,
    fontSize: FontSize.size_base,
    lineHeight: 26,
    color: Color.colorGray_100,
    fontFamily: FontFamily.outfitRegular,
    left: 77,
    textAlign: "left",
    position: "absolute",
  },
  avatar5Icon: {
    top: 113,
    borderRadius: Border.br_3xl,
    width: 44,
    height: 44,
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    marginTop: -34,
    marginLeft: -90,
    fontSize: FontSize.size_29xl,
    lineHeight: 68,
    color: Color.colorGray_100,
    fontFamily: FontFamily.outfitRegular,
  },
  container28: {
    top: 237,
    height: 110,
  },
  enterTransferAmount: {
    top: 199,
    color: Color.colorGray_100,
    left: 24,
    fontFamily: FontFamily.outfitSemiBold,
    fontWeight: "600",
  },
  noteOptional: {
    fontWeight: "700",
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorDarkslategray_100,
    left: 0,
    top: 0,
    fontSize: FontSize.size_sm,
  },
  thanksForLending: {
    top: 7,
    left: 12,
    width: 312,
    color: Color.colorGray_100,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  textfield: {
    top: 23,
    right: 1,
    bottom: 1,
    backgroundColor: Color.colorWhitesmoke,
    left: 0,
  },
  textarea1: {
    top: 492,
    height: 104,
    right: 24,
    left: 24,
  },
  container30Icon: {
    marginTop: -35,
    width: 80,
    height: 95,
    right: 0,
  },
  text2: {
    marginTop: -24,
    fontFamily: FontFamily.outfitRegular,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
  },
  balance85000: {
    marginTop: 4,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: 14,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  container29: {
    top: 398,
    height: 70,
    overflow: "hidden",
  },
  selectCard: {
    top: 374,
    color: Color.colorGray_100,
    left: 24,
    fontFamily: FontFamily.outfitSemiBold,
    fontWeight: "600",
  },
  switch: {
    marginTop: -9,
    marginLeft: -26,
    fontSize: FontSize.size_2xs,
    lineHeight: 18,
    color: Color.colorLightgoldenrodyellow,
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  chevronRightLarge: {
    marginTop: -6,
    marginLeft: 14,
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  button7: {
    top: 371,
    right: 13,
    borderRadius: Border.br_10xs,
    width: 69,
    height: 28,
    overflow: "hidden",
  },
  transferMoneyInputAMessa: {
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
  },
});

export default TransferMoneyInputAMessa;
