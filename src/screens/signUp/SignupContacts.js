import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { scale, verticalScale } from "react-native-size-matters";
import { Text, TextInput } from "react-native-paper";
import CustomInput from "../../components/CustomInput";
import LoginButton from "../../components/atoms/LoginButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Auth } from "aws-amplify";

export default function SignupContacts() {
  const navigation = useNavigation();
  const route = useRoute();
  const { userType } = route.params;

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: route?.params?.email,
      firstName: route?.params?.firstName,
      middleName: route?.params?.middleName,
      lastName: route?.params?.lastName,
      password: route?.params?.password,
      username: route?.params?.username,
      userType: route?.params?.userType,
      sex: route?.params?.sex,
      address: route?.params?.address,
      postal: route?.params?.postal,
      nationality: route?.params?.nationality,
      typeOfDisability: route?.params?.typeOfDisability,
      placeOfBirth: route?.params?.placeOfBirth,
      birthDate: route?.params?.birthDate,
    },
  });

  const [phoneNumber, setPhoneNumber] = useState("");

  //setPhoneNumber((data) => (`+63${data.phone}`))

  const onRegisterPressed = async (data) => {
    const { firstName, lastName, email, password, phone, username, userType, middleName, suffix, sex, address, postal, nationality, typeOfDisability, placeOfBirth, birthDate } =
      data;

    try {
      Auth.signUp({
        username,
        password,
        attributes: {
          email: email,
          given_name: firstName,
          family_name: lastName,
          phone_number: `+63${phone}`,
          "custom:userType": userType,
          "custom:middleName": middleName,
          "custom:suffix": suffix,
          "custom:sex": sex,
          "custom:address": address,
          "custom:postal": postal,
          "custom:nationality": nationality,
          "custom:typeOfDisability": typeOfDisability,
          "custom:placeOfBirth": placeOfBirth,
          "custom:birthDate": birthDate,
        },
      });
      navigation.navigate("SignUpVerify", { email, username });
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
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
              type='number'
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
    backgroundColor: "#FDFCFB",
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
