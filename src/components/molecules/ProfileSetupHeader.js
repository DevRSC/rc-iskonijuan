import { StyleSheet, Text, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import React from "react";

export default function ProfileSetupHeader(props) {
  return (
    <View>
      <Text
        style={{
          marginTop: 33,
          fontFamily: "Inter-Medium",
          fontSize: scale(20),
        }}
      >
        Setting Up Your Profile
      </Text>
      <Text
        style={{
          fontFamily: "Inter-Medium",
          fontSize: scale(14),
          color: "#A9A9A9",
          marginTop: verticalScale(16),
        }}
      >
        Step {props.number}/7
      </Text>
      <Text
        style={{
          fontFamily: "Inter-Bold",
          fontSize: scale(16),
          marginTop: verticalScale(16),
        }}
      >
        {props.title}
      </Text>
    </View>
  );
}
