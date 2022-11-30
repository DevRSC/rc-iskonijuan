import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import { scale, verticalScale } from "react-native-size-matters";
import { Text, TextInput } from "react-native-paper";
import CustomInput from "../../components/CustomInput";
import LoginButton from "../../components/atoms/LoginButton";
import { useNavigation } from "@react-navigation/native";

export default function SignupContacts() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onRegisterPressed = () => {
    navigation.navigate("SignUpVerify");
  };

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
          </View>
          <View
            style={{ height: 100, width: "100%", marginTop: verticalScale(27) }}
          >
            <CustomInput
              name='phone'
              placeholder='Phone Number'
              keyboardType='phone-pad'
              control={control}
              rules={{
                required: "Phone Number is required",
                minLength: {
                  value: 10,
                  message: "Phone Number must be 10 digits",
                },
                maxLength: {
                  value: 10,
                  message: "Phone Number must be 10 digits",
                },
              }}
              props={{
                keyboardType: "phone-pad",
                left: (
                  <TextInput.Affix
                    text='+63'
                    textStyle={{ color: "#2B283A" }}
                  />
                ),
              }}
            />
          </View>
          <Text style={styles.greyText}>
            By continuing, you agree to the Isko ni Juan terms, acknowledge
            receipt of our privacy notice and have read the Fundraising
            Regulator’s guidance.
          </Text>

          <LoginButton
            title='Send Code'
            style={styles.button}
            onPress={handleSubmit(onRegisterPressed)}
          />
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
    width: "100%",
    marginTop: verticalScale(40),
  },
  greyText: {
    color: "#918E9B",
    fontSize: scale(13),
    fontWeight: "600",
    paddingBottom: verticalScale(16),
  },
  HeaderText: {
    color: "#2B283A",
    fontSize: scale(24),
    fontWeight: "700",
    paddingBottom: verticalScale(16),
  },

  button: {
    marginTop: verticalScale(40),
    borderRadius: 8,
    width: "100%",
    fontSize: scale(16),
    fontWeight: "600",
  },
});
