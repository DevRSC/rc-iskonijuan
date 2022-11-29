import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import LoginButton from "../components/atoms/LoginButton";
import { scale, verticalScale } from "react-native-size-matters";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "../components/CustomInput/CustomInput"
import CustomButton from "../components/CustomButton";


export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

const onSignInPressed = () => {
  navigation.navigate('Home')
};

const onForgotPasswordPressed = () => {
  //navigation.navigate('ForgotPassword')
  console.warn('Forgot Password')
};

const onSignUpPress = () => {
  navigation.navigate('SignUp')
}

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/logo-nobg.png")}
          style={styles.imageIcon}
        />
      </View>
      <View style={styles.signinContainer}>
        <Text style={styles.signinText}>Sign In</Text>
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          style={styles.textInput}
          rules={{required: 'Email is required'}}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          style={styles.textInput}
          rules={{
            required: 'Password is required',
            minLength:{
              value: 8,
              message: 'Password should be minimum 8 characters long'
            }
          }}
        />
        {/*
        <TextInput
          mode='outlined'
          label='Password'
          value={password}
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye" : "eye-off"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          onChangeText={(password) => setPassword(password)}
          forceTextInputFocus={false}
          style={[styles.textInput, { marginTop: 15 }]}
        />
        */}
        <View style={styles.buttonContainer}>
          <LoginButton
            title='Sign In'
            style={styles.button}
            //onPress={() => navigation.navigate("Home")}
            onPress={handleSubmit(onSignInPressed)}
          />
          <Text variant='bodyLarge' style={styles.forgotPasswordText} onPress={handleSubmit(onForgotPasswordPressed)}>
            Forgot Password?
          </Text>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Text onPress = {onForgotPasswordPressed} variant='bodyLarge' style={styles.signUpText}>
              Don't have an account? {""}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text variant='bodyLarge' style={styles.signUpLink} onPress={handleSubmit(onSignUpPress)}>
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
    padding: 40,
  },
  imageIcon: {
    width: scale(300),
    height: verticalScale(130),
    resizeMode: "contain",
  },
  imageContainer: {
    marginTop: verticalScale(70),
    alignItems: "center",
  },
  signinContainer: {
    marginTop: verticalScale(20),
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    width: "100%",
    height: verticalScale(200),
  },
  signinText: {
    color: "#2B283A",
    fontSize: scale(24),
    fontWeight: "700",
    marginTop: verticalScale(24),
    paddingBottom: verticalScale(24),
  },
  textInput: {
    fontSize: scale(16),
    fontWeight: "600",
  },
  button: {
    margin: 4,
    width: "100%",
    padding: 4,
  },
  buttonContainer: {
    marginTop: 22,
    alignItems: "center",
  },
  forgotPasswordText: {
    color: "#2B283A",
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
