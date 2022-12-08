import { StyleSheet, View, Image, Dimensions, ScrollView } from "react-native";
import { Text, ProgressBar } from "react-native-paper";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import LoginButton from "../../../components/atoms/LoginButton";

const { width, height } = Dimensions.get("window");

export default function LikedCampaignModal() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.inner}>
          <Image
            source={{
              uri: "https://picsum.photos/700",
            }}
            style={styles.imageContainer}
          />

          <View style={styles.headerContainer}>
            <Text style={styles.Title}>For Books</Text>
            <Text style={styles.SubTitle}>By Student 1</Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              hendrerit vel quam vitae ultrices. Morbi tincidunt risus libero,
              eu feugiat nisi dictum eget. Sed euismod, nisl sit amet ultricies
              tincidunt, nisl nisl aliquet nisl, nec ultricies nisl nisl nec
            </Text>
            <View style={{ marginTop: verticalScale(20) }}>
              <ProgressBar progress={0.5} style={styles.progressBar} />
              <Text style={styles.cardDonationStatus}>
                ₱{"100"} raised of ₱{"200"}
              </Text>
            </View>

            <View
              style={{
                width: scale(328),
                marginTop: verticalScale(40),
              }}
            >
              <LoginButton
                style={styles.donateButton}
                title='Donate'
                onPress={() => {
                  console.log("Donate");
                }}
              />
              <LoginButton
                textColor='#F55A5A'
                style={styles.shareButton}
                color='#FFFFFF'
                title='Share'
                onPress={() => {
                  console.log("Share");
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    marginTop: verticalScale(50),
    width: width - scale(16),
    height: verticalScale(140),
    borderRadius: 10,
  },
  headerContainer: {
    width: "100%",
    marginTop: verticalScale(22),
    paddingHorizontal: scale(16),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  Title: {
    fontFamily: "Inter-Bold",
    fontSize: scale(18),
  },
  SubTitle: {
    marginTop: verticalScale(12),
    fontFamily: "Inter-SemiBold",
    fontSize: scale(16),
  },
  body: {
    marginTop: verticalScale(18),
    alignItems: "center",
    flex: 1,
  },
  description: {
    paddingHorizontal: scale(16),
    fontFamily: "Inter-Regular",
    fontSize: scale(14),
    color: "#918E9B",
  },
  progressBar: {
    width: scale(320),
    borderRadius: 7.5,
    height: height * 0.02,
    marginTop: verticalScale(10),
  },
  cardDonationStatus: {
    fontSize: scale(15),
    fontWeight: "bold",
    color: "black",
    alignSelf: "flex-start",
    marginTop: verticalScale(10),
  },
  donateButton: {
    marginBottom: verticalScale(16),
    borderRadius: 10,
  },
  shareButton: {
    marginBottom: verticalScale(16),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F55A5A",
  },
});
