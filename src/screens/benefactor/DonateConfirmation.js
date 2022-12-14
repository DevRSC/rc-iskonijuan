import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LoginButton from "../../components/atoms/LoginButton";
import Animated, { BounceIn } from "react-native-reanimated";

export default function DonateConfirmation() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Avatar.Icon
            icon='close-circle'
            color='black'
            size={scale(50)}
            style={{ backgroundColor: "#FDFCFB" }}
          />
        </TouchableOpacity>
      </View>

      <Animated.View entering={BounceIn} style={styles.inner}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 80 / 2,
            backgroundColor: "#FDFCFB",
            elevation: 10,
          }}
        >
          <Ionicons name='heart' size={scale(50)} color='#F55A5A' />
        </View>
        <Text style={styles.Title}>Thank you for your donation!</Text>

        <Image
          source={require("../../../assets/images/donation-logo.png")}
          style={styles.Image}
        />

        <Text style={styles.greySub}>Wanna do even more?</Text>
        <Text style={styles.blackSub}>Help by sharing!</Text>

        <LoginButton
          title='Share'
          style={styles.button}
          onPress={() => navigation.navigate("ShareCampaign")}
        />
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCFB",
  },
  inner: {
    flex: 1,
    alignItems: "center",
  },
  closeContainer: {
    marginTop: verticalScale(36),
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: scale(16),
    width: "100%",
  },
  Title: {
    fontFamily: "Inter-Bold",
    fontSize: scale(20),
    marginTop: verticalScale(39),
    width: scale(200),
    textAlign: "center",
    color: "#2B283A",
  },
  Image: {
    width: scale(189),
    height: verticalScale(160),
    marginTop: verticalScale(36),
    resizeMode: "contain",
  },
  greySub: {
    fontFamily: "Inter-Medium",
    fontSize: scale(16),
    marginTop: verticalScale(36),
    color: "#918E9B",
  },
  blackSub: {
    fontFamily: "Inter-Bold",
    fontSize: scale(16),
    marginTop: verticalScale(16),
    color: "#2B283A",
  },
  button: {
    marginTop: verticalScale(36),
    width: scale(328),
    borderRadius: scale(9),
  },
});
