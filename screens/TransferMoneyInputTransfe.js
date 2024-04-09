import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const TransferMoneyInputTransfe = () => {
  return (
    <View
      style={[styles.transferMoneyInputTransfe, styles.container25ShadowBox]}
    >
      <View style={styles.container20}>
        <Image
          style={[styles.image11Icon, styles.frameLayout1]}
          resizeMode="cover"
          source={require("../assets/image-8.png")}
        />
        <Image
          style={[styles.image12Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-6.png")}
        />
      </View>
      <View style={[styles.container21, styles.containerPosition1]}>
        <Text style={[styles.transferTo, styles.text1Position]}>
          Transfer to
        </Text>
        <Image
          style={[styles.arrowLeft2, styles.arrowLeft2Position]}
          resizeMode="cover"
          source={require("../assets/arrow-left-1.png")}
        />
      </View>
      <Image
        style={[
          styles.transferMoneyInputTransfeChild,
          styles.arrowLeft2Position,
        ]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={styles.text}>(929) 617-0714</Text>
      <Text style={[styles.elizabethTaylor, styles.text1Clr]}>
        Elizabeth Taylor
      </Text>
      <Image
        style={[styles.avatar4Icon, styles.arrowLeft2Position]}
        resizeMode="cover"
        source={require("../assets/avatar-1.png")}
      />
      <View style={[styles.container22, styles.containerPosition]}>
        <Text style={[styles.text1, styles.text1Clr]}>$150.00</Text>
      </View>
      <Text style={[styles.enterTransferAmount, styles.selectCardTypo]}>
        Enter transfer amount
      </Text>
      <Image
        style={[styles.image13Icon, styles.containerPosition1]}
        resizeMode="cover"
        source={require("../assets/image-13.png")}
      />
      <Text style={[styles.selectCard, styles.selectCardTypo]}>
        Select card
      </Text>
      <View style={[styles.container23, styles.containerPosition]}>
        <Image
          style={[styles.container24Icon, styles.iconPosition]}
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
      <View style={styles.button5}>
        <Text style={[styles.switch, styles.switchPosition]}>Switch</Text>
        <Image
          style={[styles.chevronRightLarge, styles.switchPosition]}
          resizeMode="cover"
          source={require("../assets/chevron-right-large1.png")}
        />
      </View>
      <View style={[styles.container25, styles.containerPosition1]}>
        <View style={styles.tag1}>
          <View style={[styles.frame, styles.frameLayout]}>
            <Text style={[styles.text3, styles.textPosition]}>$15.00</Text>
          </View>
          <View style={[styles.frame1, styles.frameLayout]}>
            <Text style={[styles.text4, styles.textPosition]}>$150.00</Text>
          </View>
          <View style={[styles.frame2, styles.frameLayout]}>
            <Text style={[styles.text5, styles.textPosition]}>$1,500.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container25ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
  frameLayout1: {
    width: 72,
    left: 0,
  },
  iconPosition: {
    top: "50%",
    overflow: "hidden",
  },
  containerPosition1: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  text1Position: {
    textAlign: "center",
    left: "50%",
    top: "50%",
  },
  arrowLeft2Position: {
    left: 24,
    position: "absolute",
  },
  text1Clr: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.outfitRegular,
    position: "absolute",
  },
  containerPosition: {
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
    color: Color.colorGray_100,
    textAlign: "left",
    left: 24,
    fontFamily: FontFamily.outfitSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text2Position: {
    left: 14,
    textAlign: "left",
    color: Color.colorLightslategray,
    top: "50%",
    position: "absolute",
  },
  switchPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameLayout: {
    backgroundColor: Color.colorMintcream,
    height: 36,
    borderRadius: Border.br_5xs,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    color: Color.colorDarkgreen,
    marginTop: -11,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  image11Icon: {
    top: "50%",
    overflow: "hidden",
    marginTop: -20,
    height: 40,
    position: "absolute",
  },
  image12Icon: {
    width: 96,
    marginTop: -20,
    top: "50%",
    height: 40,
    position: "absolute",
    right: 0,
  },
  container20: {
    backgroundColor: Color.colorGray_200,
    height: 40,
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  transferTo: {
    marginTop: -15,
    marginLeft: -51,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.outfitSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  arrowLeft2: {
    marginTop: -12,
    width: 24,
    height: 24,
    top: "50%",
    overflow: "hidden",
  },
  container21: {
    top: 50,
    height: 46,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  transferMoneyInputTransfeChild: {
    top: 174,
    maxHeight: "100%",
    width: 342,
  },
  text: {
    top: 138,
    textAlign: "left",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.plusJakartaSansRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: 77,
    position: "absolute",
  },
  elizabethTaylor: {
    fontSize: FontSize.size_base,
    lineHeight: 26,
    top: 112,
    textAlign: "left",
    left: 77,
    color: Color.colorGray_100,
  },
  avatar4Icon: {
    borderRadius: Border.br_3xl,
    width: 44,
    height: 44,
    top: 112,
    overflow: "hidden",
  },
  text1: {
    marginTop: -34,
    marginLeft: -89,
    fontSize: FontSize.size_29xl,
    lineHeight: 68,
    textAlign: "center",
    left: "50%",
    top: "50%",
  },
  container22: {
    top: 239,
    borderColor: Color.colorLightgoldenrodyellow,
    borderWidth: 2,
    height: 110,
  },
  enterTransferAmount: {
    top: 199,
  },
  image13Icon: {
    bottom: 0,
    maxWidth: "100%",
    height: 245,
    overflow: "hidden",
  },
  selectCard: {
    top: 376,
  },
  container24Icon: {
    marginTop: -35,
    width: 80,
    height: 95,
    right: 0,
    position: "absolute",
    top: "50%",
  },
  text2: {
    marginTop: -24,
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    fontFamily: FontFamily.outfitRegular,
    left: 14,
  },
  balance85000: {
    marginTop: 4,
    fontFamily: FontFamily.plusJakartaSansRegular,
    left: 14,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  container23: {
    top: 400,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    height: 70,
    overflow: "hidden",
  },
  switch: {
    marginTop: -9,
    marginLeft: -26,
    fontSize: FontSize.size_2xs,
    lineHeight: 18,
    color: Color.colorLightgoldenrodyellow,
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansRegular,
  },
  chevronRightLarge: {
    marginTop: -6,
    marginLeft: 14,
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  button5: {
    top: 373,
    right: 13,
    borderRadius: Border.br_10xs,
    width: 69,
    height: 28,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
    overflow: "hidden",
  },
  text3: {
    marginLeft: -24,
  },
  frame: {
    width: 72,
    left: 0,
  },
  text4: {
    marginLeft: -29,
  },
  frame1: {
    left: 96,
    width: 82,
  },
  text5: {
    marginLeft: -36,
  },
  frame2: {
    left: 202,
    width: 96,
  },
  tag1: {
    top: 11,
    width: 298,
    height: 36,
    backgroundColor: Color.colorGray_300,
    left: 24,
    position: "absolute",
  },
  container25: {
    bottom: 245,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowRadius: 2,
    elevation: 2,
    height: 58,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
  transferMoneyInputTransfe: {
    shadowColor: "rgba(18, 15, 40, 0.12)",
    shadowRadius: 6,
    elevation: 6,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default TransferMoneyInputTransfe;
