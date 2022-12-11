import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import WelcomeContainer from "../../components/molecules/WelcomeContainer";
import Animated, { SlideInDown, BounceIn } from "react-native-reanimated";
import { scale, verticalScale } from "react-native-size-matters";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Animated.View entering={BounceIn} style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/logo-bg.png")}
          style={styles.imageIcon}
        />
      </Animated.View>
      <Animated.View entering={SlideInDown.duration(800)}>
        <WelcomeContainer />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F55A5A",
    alignItems: "center",
  },

  imageContainer: {
    flex: 1,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },

  imageIcon: {
    width: scale(300),
    height: verticalScale(125),
    resizeMode: "contain",
  },
});
