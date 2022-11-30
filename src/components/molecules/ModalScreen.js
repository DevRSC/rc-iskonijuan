import { StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";
import Animated, { BounceIn } from "react-native-reanimated";
import { Text } from "react-native-paper";
import Fontawesome from "react-native-vector-icons/FontAwesome";
import { verticalScale } from "react-native-size-matters";

export default function ModalScreen() {
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
          Your number has been verfied
        </Text>
        <Animated.View entering={BounceIn}>
          <Fontawesome
            size={verticalScale(150)}
            name='check-circle'
            color='#F55A5A'
            style={{ marginTop: verticalScale(70) }}
          />
        </Animated.View>
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
