import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Text, RadioButton, TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";

import CustomInput from "../../components/CustomInput";

export default function SignupAdditionalInfo() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [nationality, setNationality] = useState("");
  const [checked, setChecked] = useState("male");

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

  const onCheckedHandler = (value) => {
    setChecked(value);
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
              placeholder='Select Nationality'
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
              anchorStyle={{
                backgroundColor: "#FDFCFB",
                color: "#2B283A",
              }}
            />
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
  smallGrayText: {
    fontFamily: "Inter-Medium",
    fontSize: scale(12),
    color: "#918E9B",
    marginTop: verticalScale(15),
  },
});
