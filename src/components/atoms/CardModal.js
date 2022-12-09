import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Animated, { BounceIn } from "react-native-reanimated";
import { Text } from "react-native-paper";
import { scale, verticalScale } from "react-native-size-matters";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomProgressBar from "./CustomProgressBar";

import { useNavigation, useRoute } from "@react-navigation/native";

import LoginButton from "./LoginButton";

export default function CardModal() {
  const navigation = useNavigation();
  const route = useRoute();
  const { Name, Title, Description, verified, currentD, targetD, donationP } =
    route.params;

  return (
    //Create Modal Card
    <SafeAreaView style={styles.container}>
      <Animated.View entering={BounceIn} style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>{Name}</Text>
          {verified ? (
            <Ionicons name='checkmark-circle' size={20} color='#127FFE' />
          ) : null}
        </View>
        <View style={styles.cardHeaderLeft}>
          <Text style={styles.cardSubtitle}>{Title}</Text>
        </View>
        <ScrollView>
          <View style={styles.cardBody}>
            <Text style={styles.cardBodyText}>{Description}</Text>
          </View>
        </ScrollView>
        <CustomProgressBar
          style={{
            marginTop: verticalScale(15),
          }}
          donationProgress={donationP}
          currentDonation={currentD}
          targetDonation={targetD}
        />
        <View style={styles.cardFooter}>
          <LoginButton
            color='#2B283A'
            style={{
              borderRadius: 10,
            }}
            title='Close'
            onPress={() => navigation.goBack()}
          />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  card: {
    width: scale(320),
    height: verticalScale(462),
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 21,
    marginBottom: verticalScale(55),
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardHeaderLeft: {
    marginTop: verticalScale(15),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  cardSubtitle: {
    fontSize: scale(16),
    fontFamily: "Inter-SemiBold",
    color: "#2B283A",
  },

  cardHeaderText: {
    fontSize: scale(21),
    fontFamily: "Inter-Bold",
    paddingRight: scale(5),
  },
  cardBody: {
    marginTop: verticalScale(15),
    justifyContent: "center",
    alignItems: "center",
  },
  cardBodyText: {
    fontSize: 16,
    textAlign: "justify",
    color: "#918E9B",
  },
  cardFooter: {
    marginTop: verticalScale(15),
    justifyContent: "center",
    alignItems: "center",
  },
});
