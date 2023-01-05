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
    value: "Business",
  },
  {
    key: 2,
    value: "Education",
  },
  {
    key: 3,
    value: "Engineering",
  },
  {
    key: 4,
    value: "Medicine",
  },
  {
    key: 5,
    value: "Computer Science",
  },
  {
    key: 6,
    value: "Nursing",
  },
  {
    key: 7,
    value: "Law",
  },
  {
    key: 8,
    value: "Psychology",
  },
  {
    key: 9,
    value: "Communications",
  },
  {
    key: 10,
    value: "Political Science",
  },
  {
    key: 11,
    value: "Anthropology",
  },
  {
    key: 12,
    value: "Geography",
  },
  {
    key: 13,
    value: "Sociology",
  },
  {
    key: 14,
    value: "Economics",
  },
  {
    key: 15,
    value: "History",
  },
  {
    key: 16,
    value: "Literature",
  },
  {
    key: 17,
    value: "Philosophy",
  },
  {
    key: 18,
    value: "Art",
  },
  {
    key: 19,
    value: "Music",
  },
  {
    key: 20,
    value: "Theater",
  },
  {
    key: 21,
    value: "Film",
  },
  {
    key: 22,
    value: "Mathematics",
  },
  {
    key: 23,
    value: "Physics",
  },
  {
    key: 24,
    value: "Chemistry",
  },
  {
    key: 25,
    value: "Biology",
  },
];

export default function ProfileStudy() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <ProfileSetupHeader number={5} title={"Field of Study"} />
        <View style={{ marginTop: 16, width: "100%" }}>
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
            onPress={() => navigation.navigate("ProfileIncome")}
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
