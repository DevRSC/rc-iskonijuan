import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HeaderContainer from "../../components/molecules/HeaderContainer";
import MatchTopNavigator from "../../navigations/MatchTopNavigator";

export default function MatchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderContainer />
      <MatchTopNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCFB",
  },
});
