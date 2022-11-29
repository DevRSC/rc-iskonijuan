import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";

export default function FooterAgreement() {
  return (
    <View style={styles.footer}>
      <Text style={{ textAlign: "center" }}>
        By continuing, you agree to the Isko ni Juan{" "}
        <Text style={{ color: "#F55A5A" }}>terms</Text>, acknowledge receipt of
        our <Text style={{ color: "#F55A5A" }}>privacy notice</Text> and have
        read the{" "}
        <Text style={{ color: "#F55A5A" }}>
          Fundraising Regulator’s guidance.
        </Text>
      </Text>
    </View>

  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: verticalScale(30),
    paddingTop: verticalScale(20),
    borderTopColor: "#E5E5E5",
    borderTopWidth: 1,
  },
});
