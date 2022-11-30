import React from "react";

import { TextInput, HelperText } from "react-native-paper";

import { Controller } from "react-hook-form";

const CustomInput = ({
  control,
  name,
  placeholder,
  rules = {},
  secureTextEntry,
  style,
  props,
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
          <TextInput
            {...props}
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
        </>
      )}
    />
  );
};

export default CustomInput;
