import { StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";
import Animated, { BounceIn } from "react-native-reanimated";
import { Text } from "react-native-paper";
import Fontawesome from "react-native-vector-icons/FontAwesome";
import { verticalScale } from "react-native-size-matters";
import { useNavigation, useRoute } from "@react-navigation/native";
import LoginButton from "../atoms/LoginButton";

export default function ModalScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { modalMessage } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text
          style={{
            color: "#2B283A",
            fontSize: 21,
            fontWeight: "700",
            marginTop: verticalScale(194),
          }}
        >
          {modalMessage}
        </Text>
        <Animated.View entering={BounceIn}>
          <Fontawesome
            size={verticalScale(150)}
            name='check-circle'
            color='#F55A5A'
            style={{ marginTop: verticalScale(70) }}
          />
        </Animated.View>
        <LoginButton
          title='Proceed to Login'
          onPress={() => navigation.navigate("SignIn")}
          style={{ marginTop: verticalScale(70) }}
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
    alignItems: "center",
    justifyContent: "center",
  },
});
