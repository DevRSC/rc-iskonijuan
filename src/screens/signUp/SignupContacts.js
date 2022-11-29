import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { Text, TextInput } from "react-native-paper";
import LoginButton from "../../components/atoms/LoginButton";
import { useNavigation } from "@react-navigation/native";

export default function SignupContacts() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/images/logo-nobg.png")}
              style={styles.imageIcon}
            />
          </View>
          <View style={styles.contactHeader}>
            <Text style={styles.greyText}>Your safety is our Priority</Text>
            <Text style={styles.HeaderText}>Keep your account safe</Text>
            <Text
              style={[
                styles.greyText,
                { textAlign: "left", width: scale(280) },
              ]}
            >
              Add your phone number for another layer of security and to receive
              important messages.
            </Text>

            <TextInput
              name='Phone'
              mode='outlined'
              label={"Phone number"}
              left={<TextInput.Affix text='+639' />}
              style={styles.input}
            />

            <Text style={{ color: "#918E9B", marginTop: verticalScale(34) }}>
              By continuing, you agree to the Isko ni Juan terms, acknowledge
              receipt of our privacy notice and have read the Fundraising
              Regulator’s guidance.
            </Text>

            <LoginButton
              title='Send Code'
              style={styles.button}
              onPress={() => navigation.navigate("#")}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  imageIcon: {
    width: scale(281),
    height: verticalScale(96),
    resizeMode: "contain",
  },
  imageContainer: {
    marginTop: verticalScale(40),
    alignItems: "center",
  },
  contactHeader: {
    marginTop: verticalScale(40),
  },
  greyText: {
    color: "#918E9B",
    fontSize: scale(14),
    fontWeight: "700",
    paddingBottom: verticalScale(16),
  },
  HeaderText: {
    color: "#2B283A",
    fontSize: scale(24),
    fontWeight: "700",
    paddingBottom: verticalScale(16),
  },
  input: {
    marginTop: verticalScale(27),
    width: scale(328),
    height: verticalScale(55),
    borderRadius: 8,
    fontSize: scale(16),
    fontWeight: "600",
    color: "#2B283A",
    marginBottom: verticalScale(16),
  },
  button: {
    marginTop: verticalScale(40),
    borderRadius: 8,
    fontSize: scale(16),
    fontWeight: "600",
  },
});
