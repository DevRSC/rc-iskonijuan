import { FlatList, StyleSheet, Text, View } from "react-native";
import ProfileSetupHeader from "../../components/molecules/ProfileSetupHeader";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import LoginButton from "../../components/atoms/LoginButton";
import { MultipleSelectList } from "react-native-dropdown-select-list";

import { TextInput } from "react-native-paper";

export default function ProfileInterest() {
  const navigation = useNavigation();
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  const fetchHobbies = () => {
    const url = "https://api.npoint.io/3ebcb3f057971e7ae428";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setHobbies(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchHobbies();

    return () => {};
  }, []);

  const handleSelected = () => {
    if (selectedHobbies.length > 5) {
      console.log("You can only select 5 interests");
    }
    console.log(selectedHobbies);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <ProfileSetupHeader number={3} title={"Choose Your Interest"} />

        <View style={{ marginTop: 16 }}>
          <MultipleSelectList
            setSelected={setSelectedHobbies}
            data={hobbies}
            label='Interest'
            searchPlaceholder='Search Interest'
            boxStyles={{ padding: 0 }}
            fontFamily='Inter-Regular'
            save={"value"}
            maxHeight={verticalScale(250)}
            onSelect={handleSelected}
            labelStyles={{ color: "#000", fontSize: scale(16) }}
            badgeStyles={{ backgroundColor: "#F55A5A" }}
            badgeTextStyles={{
              color: "#fff",
              fontSize: scale(12),
              fontFamily: "Inter-SemiBold",
            }}
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
            onPress={() => navigation.navigate("ProfileEthnicity")}
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
    width: "100%",
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
