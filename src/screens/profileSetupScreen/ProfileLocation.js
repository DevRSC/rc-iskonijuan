import { StyleSheet, View } from "react-native";
import { Text } from "react-native-svg";
import ProfileSetupHeader from "../../components/molecules/ProfileSetupHeader";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import LoginButton from "../../components/atoms/LoginButton";
import { scale, verticalScale } from "react-native-size-matters";

export default function ProfileLocation() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <ProfileSetupHeader number={2} title='Current Location' />
      </View>
      <View
        style={{
          marginTop: verticalScale(114),
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: scale(16),
        }}
      >
        <LoginButton
          title='Go Back'
          onPress={() => navigation.goBack()}
          style={styles.button}
        />
        <LoginButton
          title='Next'
          onPress={() => navigation.navigate("ProfileInterest")}
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
    padding: 16,
    alignItems: "flex-start",
  },
  button: {
    marginTop: verticalScale(224),
    borderRadius: 10,
  },
});
