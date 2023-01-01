import { StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-paper";
import { scale, verticalScale } from "react-native-size-matters";
import React from "react";

export default function ModalInstruction() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Image
          style={styles.logoImage}
          source={require("../../../assets/images/logo-nobg.png")}
        />
        <Text style={styles.header}>Welcome to the app!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCFB",
  },
  inner: {
    alignItems: "center",
    padding: scale(16),
  },
  logoImage: {
    width: scale(180),
    height: verticalScale(80),
    resizeMode: "contain",
  },
  header: {
    fontFamily: "Inter-SemiBold",
    fontSize: scale(18),
    color: "#2B283A",
    marginTop: verticalScale(24),
  },
});
