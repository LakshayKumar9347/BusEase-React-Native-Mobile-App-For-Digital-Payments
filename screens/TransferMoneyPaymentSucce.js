import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TransferMoneyPaymentSucce = () => {
  return (
    <View style={styles.transferMoneyPaymentSucce}>
      <View style={styles.container31}>
        <Image
          style={[styles.image16Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-8.png")}
        />
        <Image
          style={[styles.image17Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-6.png")}
        />
      </View>
      <Text style={styles.successfullyTransferred}>
        Successfully transferred 🎉
      </Text>
      <View style={[styles.container32, styles.button8Border]}>
        <Text style={[styles.number, styles.numberTypo]}>Number</Text>
        <Text style={[styles.text, styles.textTypo1]}>(929) 617-0714</Text>
        <Text style={[styles.elizabethTaylor, styles.recipientPosition]}>
          Elizabeth Taylor
        </Text>
        <Text style={[styles.recipient, styles.recipientPosition]}>
          Recipient
        </Text>
        <Text style={[styles.youTransferred, styles.text1Position]}>
          You transferred
        </Text>
        <Text style={[styles.text1, styles.text1Position]}>$150.00</Text>
        <Text style={[styles.text2, styles.text2Position]}>
          2412 7512 3412 3456
        </Text>
        <Text style={[styles.text3, styles.textTypo]}>34525</Text>
        <Text style={[styles.text4, styles.timePosition]}>12:30 21/08/23</Text>
        <Image
          style={[styles.container32Child, styles.container32Layout]}
          resizeMode="cover"
          source={require("../assets/line-3.png")}
        />
        <Text style={styles.thanksForLending}>
          Thanks for lending me money yesterday. I had an absolute blast hanging
          out with you. See you next time! 🥳 💸
        </Text>
        <Text style={[styles.cardNumber, styles.text2Position]}>
          Card number
        </Text>
        <Text style={[styles.transaction, styles.text3Position]}>
          Transaction
        </Text>
        <Text style={[styles.time, styles.timePosition]}>Time</Text>
        <Text style={[styles.note, styles.numberTypo]}>Note</Text>
        <Image
          style={[styles.container32Item, styles.container32Layout]}
          resizeMode="cover"
          source={require("../assets/line-3.png")}
        />
      </View>
      <View style={[styles.button8, styles.buttonPosition]}>
        <Text style={[styles.makeAnotherPayment, styles.backToHomePosition]}>
          Make another payment
        </Text>
      </View>
      <View style={[styles.button9, styles.buttonPosition]}>
        <Text style={[styles.backToHome, styles.backToHomePosition]}>
          Back to home
        </Text>
      </View>
      <Image
        style={styles.container33Icon}
        resizeMode="cover"
        source={require("../assets/container-33.png")}
      />
      <View style={styles.container34}>
        <Image
          style={[styles.share1Icon, styles.share1IconPosition]}
          resizeMode="cover"
          source={require("../assets/share-1.png")}
        />
        <Image
          style={[styles.arrowLeft4, styles.share1IconPosition]}
          resizeMode="cover"
          source={require("../assets/arrow-left-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: "50%",
    marginTop: -20,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  button8Border: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  numberTypo: {
    textAlign: "left",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.plusJakartaSansRegular,
    left: 20,
  },
  textTypo1: {
    textAlign: "right",
    color: Color.colorGray_100,
    fontFamily: FontFamily.outfitRegular,
  },
  recipientPosition: {
    marginTop: -174,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  text1Position: {
    marginTop: -81,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  text2Position: {
    marginTop: -43,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    right: 20,
    textAlign: "right",
    color: Color.colorGray_100,
    fontFamily: FontFamily.outfitRegular,
  },
  timePosition: {
    marginTop: 33,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  container32Layout: {
    width: 300,
    maxHeight: "100%",
    left: 21,
    position: "absolute",
  },
  text3Position: {
    marginTop: -5,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  buttonPosition: {
    height: 52,
    borderRadius: Border.br_5xs,
    left: 24,
    right: 24,
    position: "absolute",
    overflow: "hidden",
  },
  backToHomePosition: {
    color: Color.colorDarkgreen,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    marginTop: -14,
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  share1IconPosition: {
    height: 24,
    width: 24,
    marginTop: -12,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  image16Icon: {
    width: 72,
    left: 0,
  },
  image17Icon: {
    width: 96,
    right: 0,
  },
  container31: {
    top: 0,
    backgroundColor: Color.colorGray_200,
    height: 40,
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  successfullyTransferred: {
    marginLeft: -148,
    top: 186,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: Color.colorLightgoldenrodyellow,
    textAlign: "center",
    fontFamily: FontFamily.outfitRegular,
    left: "50%",
    position: "absolute",
  },
  number: {
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
    marginTop: -136,
  },
  text: {
    right: 22,
    textAlign: "right",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
    marginTop: -136,
  },
  elizabethTaylor: {
    right: 23,
    textAlign: "right",
    color: Color.colorGray_100,
    fontFamily: FontFamily.outfitRegular,
  },
  recipient: {
    textAlign: "left",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.plusJakartaSansRegular,
    left: 20,
  },
  youTransferred: {
    textAlign: "left",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.plusJakartaSansRegular,
    left: 20,
  },
  text1: {
    right: 21,
    textAlign: "right",
    color: Color.colorGray_100,
    fontFamily: FontFamily.outfitRegular,
  },
  text2: {
    textAlign: "right",
    color: Color.colorGray_100,
    fontFamily: FontFamily.outfitRegular,
    right: 22,
  },
  text3: {
    marginTop: -5,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  text4: {
    right: 20,
    textAlign: "right",
    color: Color.colorGray_100,
    fontFamily: FontFamily.outfitRegular,
  },
  container32Child: {
    top: 265,
  },
  thanksForLending: {
    marginTop: 114,
    fontSize: FontSize.size_xs,
    lineHeight: 20,
    width: 299,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansRegular,
    left: 20,
    top: "50%",
    position: "absolute",
  },
  cardNumber: {
    textAlign: "left",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.plusJakartaSansRegular,
    left: 20,
  },
  transaction: {
    textAlign: "left",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.plusJakartaSansRegular,
    left: 20,
  },
  time: {
    textAlign: "left",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.plusJakartaSansRegular,
    left: 20,
  },
  note: {
    marginTop: 88,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  container32Item: {
    top: 96,
  },
  container32: {
    top: 246,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowRadius: 2,
    elevation: 2,
    borderColor: Color.colorGainsboro,
    height: 388,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    left: 24,
    right: 24,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  makeAnotherPayment: {
    marginLeft: -98,
  },
  button8: {
    bottom: 28,
    borderColor: Color.colorDarkgreen,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  backToHome: {
    marginLeft: -59,
  },
  button9: {
    bottom: 96,
    backgroundColor: Color.colorLightgoldenrodyellow,
  },
  container33Icon: {
    marginLeft: -40,
    top: 97,
    borderRadius: Border.br_22xl,
    width: 81,
    height: 81,
    left: "50%",
    position: "absolute",
  },
  share1Icon: {
    height: 24,
    width: 24,
    marginTop: -12,
    right: 24,
  },
  arrowLeft4: {
    left: 24,
    height: 24,
    width: 24,
    marginTop: -12,
  },
  container34: {
    top: 40,
    height: 46,
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  transferMoneyPaymentSucce: {
    shadowColor: "rgba(18, 15, 40, 0.12)",
    shadowRadius: 6,
    elevation: 6,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
});

export default TransferMoneyPaymentSucce;
