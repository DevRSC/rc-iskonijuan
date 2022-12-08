import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import Animated, { BounceIn } from "react-native-reanimated";
import { Text } from "react-native-paper";
import Fontawesome from "react-native-vector-icons/FontAwesome";
import { scale, verticalScale } from "react-native-size-matters";

import { useNavigation, useRoute } from "@react-navigation/native";

import LoginButton from "../atoms/LoginButton";

export default function CardModal() {
  const navigation = useNavigation();
  const route = useRoute();
  const { Name, Title, Description } = route.params;

  return (
    //Create Modal Card
    <SafeAreaView style={styles.container}>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
        onPress={navigation.goBack}
      >
        <Animated.View entering={BounceIn} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>{Name}</Text>
          </View>
          <View style={styles.cardHeaderLeft}>
            <Text style={styles.cardSubtitle}>{Title}</Text>
          </View>
          <View style={styles.cardBody}>
            <ScrollView>
              <Text style={styles.cardBodyText}>{Description}</Text>
            </ScrollView>
          </View>
          <View style={styles.cardFooter}>
            <LoginButton title='Close' onPress={() => navigation.goBack()} />
          </View>
        </Animated.View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "93%",
    height: verticalScale(420),
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: verticalScale(55),
  },
  cardHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardHeaderLeft: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  cardSubtitle: {
    fontSize: scale(16),
    fontFamily: "Inter-Medium",
    color: "#2B283A",
  },

  cardHeaderText: {
    fontSize: scale(20),
    fontFamily: "Inter-SemiBold",
  },
  cardBody: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  cardBodyText: {
    fontSize: 16,
    textAlign: "center",
  },
  cardFooter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
