import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { Text } from "react-native-paper";
import AnimatedVerification from "../../components/molecules/AnimatedVerification";

export default function SignupVerify() {
  const [inputValue, setInputValue] = React.useState("");

  console.log("inputValue: ", inputValue);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/logo-nobg.png")}
            style={styles.imageIcon}
          />
        </View>
        <View style={styles.contactHeader}>
          <Text style={styles.greyText}>Your safety is our Priority</Text>
          <Text style={styles.HeaderText}>Verify your number</Text>
          <Text style={[styles.greyText, { textAlign: "left" }]}>
            We’ve sent a verification code to your phone number. Change number
          </Text>

          <AnimatedVerification inputValue={setInputValue} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  imageContainer: {
    marginTop: verticalScale(40),
    alignItems: "center",
  },
  imageIcon: {
    width: scale(281),
    height: verticalScale(96),
    resizeMode: "contain",
  },
  contactHeader: {
    marginTop: verticalScale(40),
  },
  greyText: {
    color: "#918E9B",
    fontSize: scale(14),
    fontWeight: "700",
    paddingBottom: verticalScale(16),
  },
  HeaderText: {
    color: "#2B283A",
    fontSize: scale(24),
    fontWeight: "700",
    paddingBottom: verticalScale(16),
  },
});
