import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { s, scale, verticalScale } from "react-native-size-matters";
import { Text, TextInput } from "react-native-paper";
import LoginButton from "../components/atoms/LoginButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import Animated, { BounceInUp } from "react-native-reanimated";
import SigninHeader from "../components/molecules/SigninHeader";
import CustomInput from "../components/CustomInput";
import { Auth } from "aws-amplify";

export default function CreateNewPassword() {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const [showRPassword, setShorRPassword] = useState(false);
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const pwd = watch("password");

  const onSubmit = async (data) => {
    try {
      await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
      navigation.navigate("Modal", {
        modalMessage: "Password successfully reset",
      });
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <SigninHeader text='Create New Password' />
        <CustomInput
          name='username'
          placeholder='Username'
          control={control}
          style={styles.textInput}
          rules={{ required: "Username is required" }}
        />
        <CustomInput
          placeholder='Code'
          name='code'
          control={control}
          style={(styles.textCredential, { marginTop: 15 })}
          rules={{
            required: "Code is required",
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
          placeholder='Confirm Password'
          name='confirmPassword'
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
            title='Reset Password'
            onPress={handleSubmit(onSubmit)}
            style={styles.button}
          />
        </View>

        <Text style={styles.errorText}>Your password must have:</Text>

        {errors.password ? (
          <>
            <Text style={styles.errorText}>{errors.password.message}</Text>
            <Text style={styles.errorText}>
              {errors.confirmPassword.message}
            </Text>
          </>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCFB",
    padding: 16,
    alignItems: "center",
  },
  inner: {
    width: "100%",
  },
  textCredential: {
    fontSize: scale(16),
    fontFamily: "Inter-Medium",
  },
  button: {
    margin: 4,
    width: "100%",
    padding: 4,
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: verticalScale(34),
    alignItems: "center",
  },
  errorText: {
    marginTop: 19,
    color: "#918E9B",
    fontFamily: "Inter-Medium",
    fontSize: scale(10),
  },
});
