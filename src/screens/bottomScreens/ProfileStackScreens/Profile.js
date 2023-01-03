import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar, Text, List } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import LoginButton from "../../../components/atoms/LoginButton";
import { Auth } from "aws-amplify";

export default function Profile() {
  const signOut = async () => {
    Auth.signOut();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Avatar.Image
          size={scale(80)}
          source={{
            uri: "https://xsgames.co/randomusers/avatar.php?g=male",
          }}
          style={styles.avatar}
        />

        <Text style={{ fontSize: scale(16) }}>Benefactor Name</Text>
        <Text style={styles.greyText}>benefactor@gmail.com</Text>

        <View style={styles.textContainer}>
          <Text style={styles.subTitle}>Account</Text>
          <View style={styles.separator} />
          <View style={{ width: "100%" }}>
            <TouchableOpacity>
              <List.Item
                style={styles.verticalSpaces}
                title='Personal Information'
                left={() => (
                  <List.Icon icon='person-outline' color={"#F55A5A"} />
                )}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <List.Item
                style={styles.verticalSpaces}
                title='Change Password'
                left={() => (
                  <List.Icon icon='settings-outline' color={"#F55A5A"} />
                )}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.subTitle}>Legal and Policies</Text>
          <View style={styles.separator} />
          <View style={{ width: "100%" }}>
            <TouchableOpacity>
              <List.Item
                style={styles.verticalSpaces}
                title='Personal Information'
                left={() => (
                  <List.Icon icon='headset-outline' color={"#F55A5A"} />
                )}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <List.Item
                style={styles.verticalSpaces}
                title='Privacy and Policy'
                left={() => (
                  <List.Icon icon='shield-outline' color={"#F55A5A"} />
                )}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <List.Item
                style={styles.verticalSpaces}
                title='Terms and Conditions'
                left={() => (
                  <List.Icon icon='person-outline' color={"#F55A5A"} />
                )}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <List.Item
                style={styles.verticalSpaces}
                title='About Us'
                left={() => (
                  <List.Icon icon='settings-outline' color={"#F55A5A"} />
                )}
              />
            </TouchableOpacity>
          </View>
        </View>
        <LoginButton
          title='Logout'
          style={{ width: scale(328), borderRadius: scale(8), marginTop: 10 }}
          onPress={signOut}
        />

        <Text style={styles.footer}>© Isko ni Juan 2023</Text>
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
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    marginBottom: verticalScale(15),
  },
  subTitle: {
    fontSize: scale(16),
    fontFamily: "Inter-SemiBold",
  },
  textContainer: {
    width: "100%",
    marginTop: verticalScale(15),
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: scale(16),
  },
  separator: {
    height: 2,
    backgroundColor: "#D9D9D9",
    width: "100%",
    marginVertical: verticalScale(7),
  },
  verticalSpaces: {
    paddingVertical: verticalScale(5),
  },
  greyText: {
    fontSize: scale(12),
    color: "#918E9B",
    marginTop: verticalScale(5),
  },
  footer: {
    fontSize: scale(12),
    color: "#918E9B",
    marginTop: verticalScale(15),
  },
});
