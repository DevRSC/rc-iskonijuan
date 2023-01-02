import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

import {
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { Text, Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import LoginButton from "../../components/atoms/LoginButton";
import ProfileSetupHeader from "../../components/molecules/ProfileSetupHeader";

export default function ProfilePicture() {
  const navigation = useNavigation();
  const imageProfile = require("../../../assets/images/addProfile.png");

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <ProfileSetupHeader number='1' title='Profile Picture' />

        <View style={styles.profileView}>
          <TouchableOpacity onPress={pickImage}>
            <Avatar.Image
              source={{
                uri: image
                  ? image
                  : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
              }}
              size={scale(280)}
              style={styles.imageContainer}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: scale(16),
              marginTop: verticalScale(16),
            }}
          >
            Add Profile Picture
          </Text>
        </View>
        <View
          style={{
            marginTop: verticalScale(56),
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <LoginButton
            title='Next'
            onPress={() => navigation.navigate("ProfileLocation")}
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
    alignItems: "flex-start",
    padding: 16,
  },
  profileView: {
    marginTop: verticalScale(16),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginTop: verticalScale(50),
  },
  button: {
    borderRadius: 8,
  },
});
