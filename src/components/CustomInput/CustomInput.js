import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Text, TextInput, HelperText } from "react-native-paper";
import { scale, verticalScale } from "react-native-size-matters";
import { Controller } from "react-hook-form";
import LoginButton from "../atoms/LoginButton";

const CustomInput = ({
  control,
  name,
  placeholder,
  rules = {},
  secureTextEntry,
  style,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View>
            <TextInput
              mode='outlined'
              label={placeholder}
              value={value}
              onChangeText={onChange /*=> setEmail(onChange)*/}
              onBlur={onBlur}
              style={style}
              secureTextEntry={secureTextEntry}
            />

            {error && (
              <HelperText type='error' visible={true}>
                {error.message || "Error"}
              </HelperText>
            )}
          </View>
        </>
      )}
    />
  );
};

export default CustomInput;
