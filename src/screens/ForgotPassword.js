import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import SigninHeader from "../components/molecules/SigninHeader";
import { scale, verticalScale } from "react-native-size-matters";
import { Text } from "react-native-paper";
import { useForm } from "react-hook-form";
import CustomInput from "../components/CustomInput/CustomInput";
import LoginButton from "../components/atoms/LoginButton";
import { useNavigation } from "@react-navigation/native";

export default function ForgotPassword() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    navigation.navigate("Request");
  };
  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };
  const goBackPressed = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <SigninHeader text='Sign in' />

          <View style={styles.forgotPasswordContainer}>
            <Text
              style={{
                color: "#2B283A",
                fontFamily: "Inter-Medium",
                fontSize: scale(16),
                marginTop: verticalScale(15),
              }}
            >
              Forgot your password?
            </Text>
          </View>

          <CustomInput
            name='email'
            placeholder='Email address'
            control={control}
            style={styles.textInput}
            rules={{ required: "Email is required" }}
          />
          <View style={styles.buttonContainer}>
            <LoginButton
              title='Request new password'
              onPress={handleSubmit(onSubmit)}
              style={styles.button}
            />

            <TouchableOpacity onPress={goBackPressed}>
              <Text variant='bodyLarge' style={styles.goBackText}>
                Go back
              </Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Text variant='bodyLarge' style={styles.signUpText}>
                Don't have an account? {""}
              </Text>
              <TouchableOpacity onPress={onSignUpPress}>
                <Text variant='bodyLarge' style={styles.signUpLink}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCFB",
    alignItems: "center",
    padding: 16,
  },
  inner: {
    width: "100%",
  },
  forgotPasswordContainer: {
    alignItems: "center",
  },
  textInput: {
    fontSize: scale(16),
    fontWeight: "600",
    marginTop: verticalScale(41),
    color: "#918E9B",
  },
  buttonContainer: {
    marginTop: verticalScale(34),
    alignItems: "center",
  },
  button: {
    margin: 4,
    width: "100%",
    padding: 4,
    borderRadius: 8,
  },
  signUpText: {
    color: "#2B283A",
    fontSize: scale(16),
    fontWeight: "600",
    bottom: 0,
    paddingBottom: 24,
  },
  signUpLink: {
    color: "#F55A5A",
    fontSize: scale(16),
    fontWeight: "600",
  },
  goBackText: {
    color: "#918E9B",
    fontSize: scale(16),
    fontWeight: "600",
    marginTop: 22,
    paddingBottom: 24,
  },
});
