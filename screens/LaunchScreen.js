import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const LaunchScreen = () => {
  return (
    <View style={styles.launchScreen}>
      <Image
        style={styles.image27Icon}
        resizeMode="cover"
        source={require("../assets/launch-image.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image27Icon: {
    position: "absolute",
    top: 161,
    left: -46,
    width: 482,
    height: 522,
  },
  launchScreen: {
    backgroundColor: Color.colorLightgoldenrodyellow,
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

export default LaunchScreen;
