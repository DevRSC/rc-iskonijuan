import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Avatar } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HeaderContainer() {
  const navigation = useNavigation();
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("ProfileSetup")}>
        <Image
          style={styles.logoImage}
          source={require("../../../assets/images/logo-nobg.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Avatar.Image
          size={35}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FDFCFB",
  },
  logoImage: {
    width: 125,
    height: 55,
  },
});
