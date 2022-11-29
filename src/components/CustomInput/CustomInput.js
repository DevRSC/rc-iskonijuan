import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { scale, verticalScale } from "react-native-size-matters";
import {Controller} from 'react-hook-form';
import LoginButton from "../atoms/LoginButton";



const CustomInput = ({control, name, placeholder, rules = {}, secureTextEntry, style}) => {

    return(
      <Controller
          control={control}
          name={name}
          rules={rules}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
              <>
              <View>
                <TextInput
                  mode='outlined'
                  label={placeholder}
                  value={value}
                  onChangeText={(onChange) /*=> setEmail(onChange)*/}
                  onBlur={onBlur}
                  style={style}
                  secureTextEntry={secureTextEntry}
                />
              </View>
              {error && (
              <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
              )}
              </>
          )}
      />

    );
};

export default CustomInput;


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