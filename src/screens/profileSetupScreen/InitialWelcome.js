import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

import LoginButton from "../../components/atoms/LoginButton";

export default function InitialWelcome() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Image
          style={styles.logoImage}
          source={require("../../../assets/images/logo-nobg.png")}
        />
        <Text style={styles.welcomeText}>Welcome, Scholar Name</Text>

        <LoginButton
          title='Start Setting Up Your Profile'
          onPress={() => navigation.navigate("ProfilePicture")}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    marginTop: verticalScale(69),
    width: scale(260),
    height: verticalScale(114),
    resizeMode: "contain",
  },
  welcomeText: {
    fontFamily: "Inter-SemiBold",
    fontSize: scale(24),
    marginTop: verticalScale(114),
  },
  button: {
    marginTop: verticalScale(224),
    borderRadius: 10,
    width: scale(328),
  },
});
