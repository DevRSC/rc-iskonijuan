import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale } from "react-native-size-matters";
import * as Location from "expo-location";

import ProfileSetupHeader from "../../components/molecules/ProfileSetupHeader";
import LoginButton from "../../components/atoms/LoginButton";

export default function ProfileLocation() {
  const navigation = useNavigation();
  const [sendLocation, setSendLocation] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      if (sendLocation) {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setSendLocation(false);
      }
    })();
  }, [sendLocation]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  //get latitude and longitude from text variable
  console.log(location?.coords.latitude);
  console.log(location?.coords.longitude);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <ProfileSetupHeader number={2} title='Current Location' />
        <Text style={{ fontSize: 16, color: "#000000", marginTop: 16 }}>
          We need to know where you are so we can show you the best matches
          nearby.
        </Text>
        <Text style={{ fontSize: 16, color: "red", marginTop: 16 }}>
          {text}
        </Text>
        <View style={{ alignItems: "center", width: "100%", marginTop: 16 }}>
          <LoginButton
            title='Use Current Location'
            onPress={() => setSendLocation(true)}
          />
        </View>
      </View>

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
          onPress={() => navigation.navigate("ProfileInterest")}
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
  button: {
    marginTop: verticalScale(224),
    borderRadius: 10,
  },
});
