import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Text } from "react-native-paper";
import LoginButton from "../../components/atoms/LoginButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import Animated, { BounceInUp } from "react-native-reanimated";

export default function RequestPassword() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    navigation.navigate("CreateNewPassword");
  };

  const goBackPressed = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/logo-nobg.png")}
            style={styles.imageIcon}
          />
        </View>

        <Animated.View entering={BounceInUp} style={styles.iconContainer}>
          <Image
            source={require("../../../assets/images/Frame.png")}
            style={{ width: scale(85), height: scale(85) }}
          />
        </Animated.View>

        <Text style={styles.semiBold}>Check your email</Text>
        <Text style={styles.greyText}>
          We have sent a password recover instructions to your email.
        </Text>
        <View style={styles.buttonContainer}>
          <LoginButton
            title='Open email app'
            onPress={handleSubmit(onSubmit)}
            style={styles.button}
          />

          <TouchableOpacity onPress={goBackPressed}>
            <Text variant='bodyLarge' style={styles.goBackText}>
              Go back
            </Text>
          </TouchableOpacity>

          <Text variant='bodyLarge' style={styles.greyText}>
            Did not receive the email? Check your spam filter, or{" "}
            <Text style={{ fontFamily: "Inter-Medium" }}>
              try another email address.
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCFB",
  },
  inner: {
    alignItems: "center",
    padding: 16,
  },
  imageIcon: {
    width: scale(281),
    height: verticalScale(96),
    resizeMode: "contain",
  },
  imageContainer: {
    marginTop: verticalScale(70),
    alignItems: "center",
  },
  iconContainer: {
    marginTop: verticalScale(32),
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    height: verticalScale(115),
    width: scale(130),
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
  semiBold: {
    fontSize: 24,
    fontFamily: "Inter-SemiBold",
    marginTop: verticalScale(24),
  },
  greyText: {
    width: scale(300),
    fontSize: 16,
    fontFamily: "Inter-Medium",
    color: "#918E9B",
    marginTop: verticalScale(16),
    textAlign: "center",
  },
  goBackText: {
    color: "#918E9B",
    fontSize: scale(16),
    fontFamily: "Inter-Medium",
    marginTop: 22,
    paddingBottom: 24,
  },
  buttonContainer: {
    marginTop: verticalScale(34),
    alignItems: "center",
  },
  button: {
    margin: 4,
    width: scale(320),
    padding: 4,
    borderRadius: 8,
  },
});
