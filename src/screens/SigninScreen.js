import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import LoginButton from "../components/atoms/LoginButton";
import { scale, verticalScale } from "react-native-size-matters";
import { useForm } from "react-hook-form";
import CustomInput from "../components/CustomInput/CustomInput";
import SigninHeader from "../components/molecules/SigninHeader";

export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = () => {
    navigation.navigate("Home");
    console.log("Sign in pressed");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.signinContainer}>
        <SigninHeader text='Sign In' />
        <CustomInput
          name='email'
          placeholder='Email'
          control={control}
          style={styles.textInput}
          rules={{ required: "Email is required" }}
        />
        <CustomInput
          name='password'
          placeholder='Password'
          control={control}
          style={styles.textInput}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be minimum 8 characters long",
            },
          }}
          props={{
            right: (
              <TextInput.Icon
                icon={showPassword ? "eye" : "eye-off"}
                onPress={() => {
                  setShowPassword(!showPassword);
                  return false;
                }}
              />
            ),
          }}
          secureTextEntry={!showPassword}
        />
        <View style={styles.buttonContainer}>
          <LoginButton
            title='Sign In'
            style={styles.button}
            //onPress={() => navigation.navigate("Home")}
            onPress={handleSubmit(onSignInPressed)}
          />

          <TouchableOpacity onPress={onForgotPasswordPressed}>
            <Text variant='bodyLarge' style={styles.forgotPasswordText}>
              Forgot Password?
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
  imageIcon: {
    width: scale(281),
    height: verticalScale(96),
    resizeMode: "contain",
  },
  imageContainer: {
    marginTop: verticalScale(70),
    alignItems: "center",
  },
  signinContainer: {
    width: "100%",
    height: verticalScale(200),
  },

  textInput: {
    fontSize: scale(16),
    fontWeight: "600",
    marginTop: verticalScale(16),
  },
  button: {
    margin: 4,
    width: "100%",
    padding: 4,
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 22,
    alignItems: "center",
  },
  forgotPasswordText: {
    color: "#918E9B",
    fontSize: scale(16),
    fontWeight: "600",
    marginTop: 22,
    paddingBottom: 24,
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
});
