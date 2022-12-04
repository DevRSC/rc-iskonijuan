import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SignupStudent() {
  return (
    <View style={styles.container}>
      <Text>Signup Student</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCFB",
    alignItems: "center",
    justifyContent: "center",
  },
});
