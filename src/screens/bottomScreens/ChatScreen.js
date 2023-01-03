import React from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { scale, verticalScale } from "react-native-size-matters";

import HeaderContainer from "../../components/molecules/HeaderContainer";
import ChatTopNavigator from "../../navigations/ChatTopNavigator";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function ChatScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderContainer />

      <View style={styles.searchContainer}>
        <Text style={styles.searchTitle}>Messages</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Contacts")} style={styles.searchButton}>
          <Ionicons name='search' size={26} color='#F55A5A' />
        </TouchableOpacity>
      </View>

      <ChatTopNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    textAlign: "center",
    backgroundColor: "#FDFCFB",
  },
  searchTitle: {
    fontSize: scale(23),
    fontFamily: "Inter-Medium",
    lineHeight: 32,
    color: "#2B283A",
  },
  searchButton: {
    position: "absolute",
    right: 0,
    paddingHorizontal: verticalScale(16),
  },
});
