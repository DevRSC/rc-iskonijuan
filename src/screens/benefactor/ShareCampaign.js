import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, Avatar, Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import LoginButton from "../../components/atoms/LoginButton";
import Animated, { BounceIn } from "react-native-reanimated";
import ShareLogo from "../../components/atoms/ShareLogo";

export default function ShareCampaign() {
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
        <Text style={styles.Title}>Share frequently!</Text>
        <Text style={styles.greySub}>
          Fundraisers shared on social networks raise up to 5x more.
        </Text>
        <Divider style={styles.separator} />
        <ShareLogo
          iconName='logo-facebook'
          iconColor='#3B5998'
          Title='Facebook'
        />
        <Divider style={styles.separator} />
        <ShareLogo
          iconName='ios-logo-instagram'
          iconColor='#E1306C'
          Title='Instagram'
        />
        <Divider style={styles.separator} />
        <ShareLogo
          iconName='logo-twitter'
          iconColor='#1DA1F2'
          Title='Twitter'
        />
        <Divider style={styles.separator} />
        <ShareLogo
          iconName='logo-whatsapp'
          iconColor='#25D366'
          Title='WhatsApp'
        />
        <Divider style={styles.separator} />
        <ShareLogo
          iconName='logo-linkedin'
          iconColor='#0E76A8'
          Title='LinkedIn'
        />
        <Divider style={styles.separator} />

        <LoginButton
          title='Share'
          style={styles.button}
          onPress={() => navigation.navigate("Benefactor")}
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
    padding: scale(16),
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: verticalScale(16),
    width: scale(328),
  },
  separator: {
    height: verticalScale(1),
    width: scale(327),
    backgroundColor: "#D9D9D9",
  },
  closeContainer: {
    marginTop: verticalScale(36),
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: scale(16),
    width: "100%",
  },
  Title: {
    fontFamily: "Inter-SemiBold",
    fontSize: scale(20),
    width: scale(328),
    color: "#2B283A",
  },
  greySub: {
    fontFamily: "Inter-SemiBold",
    fontSize: scale(16),
    width: scale(328),
    marginTop: verticalScale(36),
    marginBottom: verticalScale(29),
    color: "#918E9B",
  },
  blackSub: {
    fontFamily: "Inter-SemiBold",
    fontSize: scale(16),
    color: "#2B283A",
  },
  button: {
    marginTop: verticalScale(36),
    width: scale(328),
    borderRadius: scale(9),
  },
});
