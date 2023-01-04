import { FlatList, StyleSheet, Text, View } from "react-native";
import ProfileSetupHeader from "../../components/molecules/ProfileSetupHeader";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import LoginButton from "../../components/atoms/LoginButton";

import { TextInput } from "react-native-paper";

export default function ProfileInterest() {
  const navigation = useNavigation();
  const [filteredHobbies, setFilteredHobbies] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    fetchHobbies();

    return () => {};
  }, []);

  const fetchHobbies = () => {
    const url = "https://api.npoint.io/85ae9508fccc74d78320/title";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFilteredHobbies(data);
        setHobbies(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <ProfileSetupHeader number={3} title={"Choose Your Interest"} />

        <View style={{ marginTop: verticalScale(16), width: "100%" }}>
          <TextInput
            label='Interest'
            mode='outlined'
            placeholder='Search for your Interests'
            right={<TextInput.Icon icon='search' />}
          />
        </View>
      </View>

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
          onPress={() => navigation.navigate("ProfileEthnicity")}
          style={styles.button}
        />
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
    alignItems: "flex-start",
  },
});
