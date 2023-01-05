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
    value: "100,000 - Below",
  },
  {
    key: 2,
    value: "101,000 - 150,000",
  },
  {
    key: 3,
    value: "151,000 - 200,000",
  },
  {
    key: 4,
    value: "201,000 - 250,000",
  },
  {
    key: 5,
    value: "251,000 - 300,000",
  },
  {
    key: 6,
    value: "300,000 - Above",
  },
];

export default function ProfileIncome() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <ProfileSetupHeader number={6} title={"Yearly Income"} />
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
            marginTop: verticalScale(114),
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
            onPress={() => navigation.navigate("ProfileEmployment")}
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
});
