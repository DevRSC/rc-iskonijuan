import React, { useState, useReducer } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Text, RadioButton, TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { useForm } from "react-hook-form";

import CustomInput from "../../components/CustomInput";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import LoginButton from "../../components/atoms/LoginButton";
import { useNavigation } from "@react-navigation/native";
import FooterAgreement from "../../components/molecules/FooterAgreement";

import DatePicker from "../../components/molecules/DatePicker";

const nationalityList = [
  { label: "Filipino", value: "Filipino" },
  { label: "American", value: "American" },
  { label: "Chinese", value: "Chinese" },
  { label: "Japanese", value: "Japanese" },
  { label: "Korean", value: "Korean" },
  { label: "Indian", value: "Indian" },
  { label: "Indonesian", value: "Indonesian" },
  { label: "Thai", value: "Thai" },
  { label: "Vietnamese", value: "Vietnamese" },
  { label: "Australian", value: "Australian" },
  { label: "Canadian", value: "Canadian" },
  { label: "British", value: "British" },
  { label: "German", value: "German" },
  { label: "French", value: "French" },
  { label: "Russian", value: "Russian" },
];

const occupationList = [
  { label: "Student", value: "Student" },
  { label: "Employed", value: "Employed" },
  { label: "Unemployed", value: "Unemployed" },
  { label: "Retired", value: "Retired" },
  { label: "Self-Employed", value: "Self-Employed" },
];

export default function SignupAdditionalInfo() {
  const navigation = useNavigation();

  // Radio Button and Drop Down
  const [showDropDown, setShowDropDown] = useState(false);
  const [nationality, setNationality] = useState("");
  const [checked, setChecked] = useState("male");

  //get age from child component
  const [age, setAge] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  //Source of Income
  const [showDropDown2, setShowDropDown2] = useState(false);
  const [sourceOfIncome, setSourceOfIncome] = useState("");

  const onCheckedHandler = (value) => {
    setChecked(value);
  };

  // Form
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.age = age;
    data.dateOfBirth = dateOfBirth;
    data.nationality = nationality;
    data.gender = checked;
    data.income = sourceOfIncome;
    console.log(data);
  };

  const onSignInPressed = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/logo-nobg.png")}
            style={styles.imageIcon}
          />
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.title}>Additional Information</Text>
            <RadioButton.Group onValueChange={onCheckedHandler}>
              <Text style={styles.smallGrayText}>Sex</Text>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.radioButtonContainer}>
                  <RadioButton
                    value='male'
                    status={checked === "male" ? "checked" : "unchecked"}
                  />
                  <Text>Male</Text>
                </View>
                <View style={styles.radioButtonContainer}>
                  <RadioButton
                    value='female'
                    status={checked === "female" ? "checked" : "unchecked"}
                  />
                  <Text>Female</Text>
                </View>
              </View>
            </RadioButton.Group>
            <Text style={styles.smallGrayText}>Nationality</Text>
            <DropDown
              placeholder='---Select Nationality---'
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={nationality}
              setValue={setNationality}
              list={nationalityList}
              dropDownItemStyle={{
                backgroundColor: "#FDFCFB",
                color: "#2B283A",
              }}
              inputProps={{
                right: (
                  <TextInput.Icon
                    icon={showDropDown ? "caret-up-sharp" : "caret-down-sharp"}
                  />
                ),
              }}
            />
            <Text style={styles.smallGrayText}>Birthdate</Text>

            <DatePicker getAge={setAge} getBirthDate={setDateOfBirth} />

            <Text style={styles.smallGrayText}>Place of Birth</Text>
            <CustomInput
              mode='outlined'
              control={control}
              name='placeOfBirth'
              rules={{
                required: "Place of Birth is required",
              }}
            />

            <Text style={styles.subTitle}>Address</Text>
            <Text style={styles.smallGrayText}>Street Address</Text>
            <CustomInput
              mode='outlined'
              control={control}
              name='streetAddress'
              rules={{
                required: "Street Address is required",
              }}
            />
            <Text style={styles.smallGrayText}>City/Municipality</Text>
            <CustomInput
              mode='outlined'
              control={control}
              name='city'
              rules={{
                required: "City/Municipality is required",
              }}
            />
            <Text style={styles.smallGrayText}>State/Province</Text>
            <CustomInput
              mode='outlined'
              control={control}
              name='state'
              rules={{
                required: "State/Province is required",
              }}
            />
            <Text style={styles.smallGrayText}>Postal/Zip Code</Text>
            <CustomInput
              mode='outlined'
              control={control}
              name='postalCode'
              rules={{
                required: "Postal/Zip Code is required",
              }}
            />
            <Text style={styles.subTitle}>Source of Income</Text>

            <DropDown
              placeholder='---Select Source of Income---'
              mode={"outlined"}
              visible={showDropDown2}
              showDropDown={() => setShowDropDown2(true)}
              onDismiss={() => setShowDropDown2(false)}
              value={sourceOfIncome}
              setValue={setSourceOfIncome}
              list={occupationList}
              dropDownItemStyle={{
                backgroundColor: "#FDFCFB",
                color: "#2B283A",
              }}
              inputProps={{
                right: (
                  <TextInput.Icon
                    icon={showDropDown2 ? "caret-up-sharp" : "caret-down-sharp"}
                  />
                ),
              }}
            />

            <LoginButton
              title='Next'
              onPress={handleSubmit(onSubmit)}
              style={styles.button}
            />

            <View
              style={{
                flexDirection: "row",

                justifyContent: "center",
                paddingTop: 20,
              }}
            >
              <Text variant='bodyLarge' style={styles.signUpText}>
                Already have an account? {""}
              </Text>
              <TouchableOpacity onPress={onSignInPressed}>
                <Text variant='bodyLarge' style={styles.signInLink}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>

            <FooterAgreement />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(16),
    backgroundColor: "#FDFCFB",
  },
  inner: {
    justifyContent: "flex-start",
  },
  title: {
    fontFamily: "Inter-SemiBold",
    fontSize: scale(24),
    color: "#2B283A",
    marginBottom: verticalScale(16),
  },
  imageIcon: {
    width: scale(281),
    height: verticalScale(96),
    resizeMode: "contain",
  },
  imageContainer: {
    alignItems: "center",
    paddingBottom: verticalScale(15),
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  subTitle: {
    fontFamily: "Inter-Medium",
    fontSize: scale(16),
    color: "#2B283A",
    marginTop: verticalScale(16),
  },
  smallGrayText: {
    fontFamily: "Inter-Medium",
    fontSize: scale(12),
    color: "#918E9B",
    marginTop: verticalScale(15),
  },
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#918E9B",
    borderRadius: 5,
    padding: scale(8),
    marginTop: verticalScale(8),
  },
  button: {
    marginTop: verticalScale(25),
    borderRadius: 8,
  },
  signUpText: {
    color: "#2B283A",
    fontSize: scale(16),
    fontWeight: "600",
    bottom: 0,
  },
  signInLink: {
    color: "#F55A5A",
    fontSize: scale(16),
    fontWeight: "600",
  },
});
