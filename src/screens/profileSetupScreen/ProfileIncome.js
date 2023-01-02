import { StyleSheet, Text, View } from "react-native";
import ProfileSetupHeader from "../../components/molecules/ProfileSetupHeader";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import LoginButton from "../../components/atoms/LoginButton";

export default function ProfileIncome() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <ProfileSetupHeader number={6} title={"Yearly Income"} />
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
          onPress={() => navigation.navigate("ProfileEmployment")}
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
});
