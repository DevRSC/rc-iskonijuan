import { StyleSheet, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { Text } from "react-native-paper";
import AnimatedVerification from "../../components/molecules/AnimatedVerification";
import { Auth } from "aws-amplify";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function SignupVerify() {
  const route = useRoute();
  const navigation = useNavigation();

  const { username } = route.params;

  const onVerify = async (code) => {
    try {
      await Auth.confirmSignUp(username, code);
      navigation.navigate("Modal", {
        modalMessage: "Account successfully created!",
      });
    } catch (e) {
      console.log(code);
      console.warn("Oops", e.message);
    }
  };

  const onResendPress = async() => {
    try{ 
      await Auth.resendSignUp(username)
      Alert.alert('Success', 'Code was resent to your phone')
    } catch (e) {
      Alert.alert('Oops', e.message)
    }
  }

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

          <AnimatedVerification onVerify={onVerify} onResendPress={onResendPress}/>
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
    padding: 16,
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
