import { StyleSheet, Text, View, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import React from "react";

export default function SigninHeader(props) {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/logo-nobg.png")}
          style={styles.imageIcon}
        />
      </View>

      <View>
        <Text style={styles.signinText}>{props.text}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageIcon: {
    width: scale(281),
    height: verticalScale(96),
    resizeMode: "contain",
  },
  imageContainer: {
    marginTop: verticalScale(70),
    alignItems: "center",
  },
  signinText: {
    color: "#2B283A",
    fontSize: scale(24),
    fontFamily: "Inter-SemiBold",
    marginTop: verticalScale(24),
    paddingBottom: verticalScale(24),
  },
});
