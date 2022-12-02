import React from "react";
import { StyleSheet } from "react-native";
import { Button, useTheme } from "react-native-paper";

export default function LoginButton(props) {
  const theme = useTheme();

  return (
    <Button
      mode='contained'
      buttonColor={props.color}
      labelStyle={[styles.fontStyles, theme.isV3 && styles.md3FontStyles]}
      {...props}
    >
      {props.title}
    </Button>
  );
}

const styles = StyleSheet.create({
  fontStyles: {
    fontWeight: "700",
    fontSize: 19,
  },
  button: {
    margin: 4,
    width: 130,
    height: 46,
  },
  md3FontStyles: {
    lineHeight: 25,
  },
});
