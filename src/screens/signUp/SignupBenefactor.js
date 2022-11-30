import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { scale, verticalScale } from "react-native-size-matters";
import LoginButton from "../../components/atoms/LoginButton";
import FooterAgreement from "../../components/molecules/FooterAgreement";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

export default function SignupBenefactor() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showRPassword, setShorRPassword] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const pwd = watch("password");
  const onRegisterPressed = () => {
    navigation.navigate("SignUpContacts");
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps='handled'>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/logo-nobg.png")}
            style={styles.imageIcon}
          />
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={styles.signinContainer}>
              <Text style={styles.signinText}>Sign Up</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 16,
                }}
              >
                <CustomInput
                  placeholder='First Name'
                  name='firstName'
                  control={control}
                  rules={{ required: "First Name is required" }}
                  style={styles.textInput}
                />
                <CustomInput
                  placeholder='Last Name'
                  name='lastName'
                  control={control}
                  rules={{ required: "Last Name is required" }}
                  style={styles.textInput}
                />
              </View>

              <CustomInput
                placeholder='Email'
                name='email'
                control={control}
                style={styles.textCredential}
                rules={{
                  pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
                  required: "Email is required",
                }}
              />
              <CustomInput
                placeholder='Password'
                name='password'
                control={control}
                style={(styles.textCredential, { marginTop: 15 })}
                forceTextInputFocus={false}
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
                      icon={showRPassword ? "eye" : "eye-off"}
                      onPress={() => {
                        setShorRPassword(!showRPassword);
                        return false;
                      }}
                    />
                  ),
                }}
                secureTextEntry={!showRPassword}
              />
              <CustomInput
                placeholder='Repeat Password'
                name='password-repeat'
                control={control}
                style={(styles.textCredential, { marginTop: 15 })}
                rules={{
                  validate: (value) => value == pwd || "Password do not match",
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
                  title='Next'
                  style={styles.button}
                  onPress={handleSubmit(onRegisterPressed)}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",

                  justifyContent: "center",
                  paddingTop: 20,
                }}
              >
                <Text variant='bodyLarge' style={styles.signUpText}>
                  Already have an account? {""}
                </Text>
                <TouchableOpacity onPress={onSignInPressed}>
                  <Text variant='bodyLarge' style={styles.signInLink}>
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
              <FooterAgreement />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    alignItems: "center",
    padding: 16,
    height: height,
  },
  imageIcon: {
    width: scale(281),
    height: verticalScale(96),
    resizeMode: "contain",
  },
  imageContainer: {
    marginTop: verticalScale(40),
    alignItems: "center",
  },
  signinContainer: {
    width: "100%",
    height: 200,
    marginTop: verticalScale(24),
  },
  signinText: {
    color: "#F55A5A",
    fontSize: scale(24),
    fontWeight: "700",
    paddingBottom: verticalScale(30),
  },
  textInput: {
    fontSize: scale(16),
    fontWeight: "600",
    width: scale(155),
  },
  textCredential: {
    fontSize: scale(16),
    fontWeight: "600",
  },
  buttonContainer: {
    paddingTop: verticalScale(31),
  },
  button: {
    borderRadius: 8,
  },
  signUpText: {
    color: "#2B283A",
    fontSize: scale(16),
    fontWeight: "600",
    bottom: 0,
  },
  signInLink: {
    color: "#F55A5A",
    fontSize: scale(16),
    fontWeight: "600",
  },
});
