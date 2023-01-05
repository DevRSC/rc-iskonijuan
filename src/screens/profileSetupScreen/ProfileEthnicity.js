import { StyleSheet, Text, View } from "react-native";
import ProfileSetupHeader from "../../components/molecules/ProfileSetupHeader";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import LoginButton from "../../components/atoms/LoginButton";
import { SelectList } from "react-native-dropdown-select-list";

const data = [
  {
    key: 1,
    value: "African",
  },
  {
    key: 2,
    value: "Asian",
  },
  {
    key: 3,
    value: "European",
  },
  {
    key: 4,
    value: "Latin American",
  },
  {
    key: 5,
    value: "Middle Eastern",
  },
  {
    key: 6,
    value: "Pacific Islander",
  },
  {
    key: 7,
    value: "Indigenous/Native American",
  },
  {
    key: 8,
    value: "Multiracial/Mixed-Race",
  },
  {
    key: 9,
    value: "Other (e.g. Romani, Jewish, etc.)",
  },
];

export default function ProfileEthnicity() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <ProfileSetupHeader number={4} title={"Ethnicity"} />
        <View style={{ marginTop: 16 }}>
          <SelectList
            data={data}
            setSelected={setSelected}
            save='value'
            fontFamily={"Inter-Regular"}
            inputStyles={{
              fontSize: scale(14),
              fontFamily: "Inter-Regular",
            }}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: scale(16),
          }}
        >
          <LoginButton
            title='Go Back'
            onPress={() => navigation.goBack()}
            style={styles.button}
          />
          <LoginButton
            title='Next'
            onPress={() => navigation.navigate("ProfileStudy")}
            style={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 16,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: verticalScale(36),
  },
  button: {
    borderRadius: 8,
  },
});
