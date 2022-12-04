import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressBar, Text } from "react-native-paper";
import HeaderContainer from "../../components/molecules/HeaderContainer";
import { scale, verticalScale } from "react-native-size-matters";

import Ionicons from "react-native-vector-icons/Ionicons";

import Swiper from "react-native-deck-swiper";

const DummyData = [
  {
    id: 1,
    firstName: "Ramil S Cobilla Jr",
    campaignName: "For Academic Books",
    camapaignDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit vel quam vitae ultrices. Morbi tincidunt risus libero, eu feugiat nisi dictum eget. ",
    image:
      "https://scontent.fmnl30-3.fna.fbcdn.net/v/t1.6435-9/96600405_2792639730864865_2489118605287882752_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHUy0CGVvSGrPNROJ_KD1ZRWnkm3ayW9qNaeSbdrJb2o0wCMK1-fFUB6_Vk2Coczgkx3jRe_24FtKttM3vM-r6S&_nc_ohc=RjoqDv_V7mIAX9hXDGt&_nc_oc=AQn_Gkgk-YyHOmxXXtgYZ7ComVya-JHyNcdYwYeW8OFsZQlWfX14T-iQ5q0kSBBTxqU&_nc_ht=scontent.fmnl30-3.fna&oh=00_AfCMTqNyuoXVWIsQP8yVSxA4ik3BNs8L236wgMxiq6k15w&oe=639CDAA3",
    donationProgress: 0.5,
    verified: false,
    currentDonation: 1000,
    targetDonation: 2000,
  },
  {
    id: 2,
    firstName: "April Kate Pascual",
    campaignName: "For Academic Books",
    camapaignDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit vel quam vitae ultrices. Morbi tincidunt risus libero, eu feugiat nisi dictum eget. ",
    image:
      "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/299904457_5244890578942036_4207457958574787941_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGvisv85fqKRujF4Ol3OIp6z8hjh-GYZHrPyGOH4ZhkemdOMEgBZPhPRMpNL0SewuvwCOmlZGtcEfxwF-YLnrrF&_nc_ohc=qMd7llTqSCYAX8AKyp_&_nc_ht=scontent.fmnl30-2.fna&oh=00_AfDz1Khyb1whiMI96i4nzihxlk952_xZUVNZFk9Wv3BZEA&oe=637ADAE4",
    donationProgress: 0.2,
    verified: true,
    currentDonation: 1000,
    targetDonation: 2000,
  },
  {
    id: 3,
    firstName: "Jhon Carlo Dichoso",
    campaignName: "For Academic Books",
    camapaignDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit vel quam vitae ultrices. Morbi tincidunt risus libero, eu feugiat nisi dictum eget. ",
    image:
      "https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/241744456_4449126251801368_939455980581216076_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGAB0Lo3KIHXD3rJioBMK8EL0ddhS7XKGUvR12FLtcoZZEqa83vkguDv3pfT2hE-fM-yYeSvjbGsnQA5Cw9p658&_nc_ohc=yxlQF-NvCi8AX8dREH9&tn=QDPAccx4kdUj6ijQ&_nc_ht=scontent.fmnl30-3.fna&oh=00_AfA4aVU_Pg-FOBJ5P19i-hcJ12y2clKfwU5aN-rmLJdlmQ&oe=637B2E8C",
    donationProgress: 0.7,
    verified: false,
    currentDonation: 1000,
    targetDonation: 2000,
  },
  {
    id: 4,
    firstName: "Alexandre Minon",
    campaignName: "For Academic Books",
    camapaignDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit vel quam vitae ultrices. Morbi tincidunt risus libero, eu feugiat nisi dictum eget. ",
    image:
      "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/274471476_5029773607043904_5501496730304066253_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFVuyyTldKXoe1GqmN6erJZtcLSjHmZibG1wtKMeZmJsbGqinAqS54k7fdah1gmhcSZuy0hn-k_GafQ6w0Th7Mk&_nc_ohc=__zVcothCxcAX-qSNha&_nc_ht=scontent.fmnl30-2.fna&oh=00_AfDaxYC42nLVY8zOHr2eJQmADWbRhqhFf-UYG03wSkiB-Q&oe=6379E77A",
    donationProgress: 0.6,
    verified: true,
    currentDonation: 1000,
    targetDonation: 2000,
  },
  {
    id: 5,
    firstName: "Miguel Bracamonte",
    campaignName: "For Academic Books",
    camapaignDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit vel quam vitae ultrices. Morbi tincidunt risus libero, eu feugiat nisi dictum eget. ",
    image:
      "https://scontent.fmnl30-3.fna.fbcdn.net/v/t1.6435-9/124624436_3450456335034781_5069551858126246879_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeG4tdAih7T7kPKEbfWniDmd7k4y40eW32DuTjLjR5bfYFXUU43lLqaq_BT30oWBOL9mgx_1p4BDEFar1a6vALx9&_nc_ohc=oGYLDponXoYAX9ZsmMY&_nc_ht=scontent.fmnl30-3.fna&oh=00_AfDzIx9CZ3UWv-KnLdqmWCAyEjCroAgzV5Wn6fgMg24dPA&oe=639CCF64",
    donationProgress: 0.9,
    verified: true,
    currentDonation: 1000,
    targetDonation: 2000,
  },
];

const { height, width } = Dimensions.get("window");

export default function HomeScreen() {
  const swipeRef = useRef(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFCFB" }}>
      {/* Header */}
      <HeaderContainer />
      {/*Header End*/}

      {/* Cards */}
      <View style={styles.cardsContainer}>
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DummyData}
          stackSize={3}
          cardIndex={0}
          animateCardOpacity
          infinite
          verticalSwipe={false}
          onSwipedLeft={() => console.log("onSwipedLeft NOPE!")}
          onSwipedRight={() => console.log("onSwipedRight Match!")}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  color: "red",
                  borderColor: "red",
                  borderWidth: 3,
                  borderRadius: 10,
                  fontSize: scale(30),
                  textAlign: "center",
                  transform: [{ rotate: "35deg" }],
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: verticalScale(30),
                  marginLeft: -20,
                },
              },
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  color: "green",
                  borderColor: "green",
                  borderWidth: 3,
                  borderRadius: 10,
                  fontSize: scale(35),
                  textAlign: "center",
                  transform: [{ rotate: "-35deg" }],
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: verticalScale(30),
                  marginLeft: 20,
                },
              },
            },
          }}
          renderCard={(card) => {
            return (
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardName}>{card.firstName}</Text>
                  {card.verified ? (
                    <Ionicons
                      name='checkmark-circle'
                      size={20}
                      color='#127FFE'
                    />
                  ) : null}
                </View>
                <Image style={styles.image} source={{ uri: card.image }} />
                <Text style={styles.cardTitle}>{card.campaignName}</Text>
                <Text style={styles.cardDescription}>
                  {card.camapaignDescription}
                </Text>

                <ProgressBar
                  progress={card.donationProgress}
                  style={styles.progressBar}
                />
                <Text style={styles.cardDonationStatus}>
                  ₱{card.currentDonation} raised of ₱{card.targetDonation}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => swipeRef.current.swipeLeft()}>
          <Ionicons name='close' size={70} color='#2B283A' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => swipeRef.current.swipeRight()}>
          <Ionicons name='heart' size={60} color='#F55A5A' />
        </TouchableOpacity>
      </View>

      {/* Cards End */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    marginTop: verticalScale(-30),
  },
  card: {
    backgroundColor: "white",
    height: height * 0.55,
    width: width - 40,
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    paddingHorizontal: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    padding: 10,
  },
  image: {
    width: width - 80,
    height: height * 0.2,
    borderRadius: 5,
    resizeMode: "cover",
  },
  cardName: {
    fontSize: scale(18),
    fontWeight: "bold",
    color: "black",
    paddingRight: 5,
  },
  cardTitle: {
    fontSize: scale(15),
    fontWeight: "bold",
    color: "black",
    alignSelf: "flex-start",
    marginTop: verticalScale(20),
  },
  cardDescription: {
    fontSize: scale(12),
    color: "black",
    alignSelf: "flex-start",
    marginTop: verticalScale(10),
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "absolute", //Here is the trick
    bottom: "14%", //Here is the trick
  },
  cardDonationStatus: {
    fontSize: scale(15),
    fontWeight: "bold",
    color: "black",
    alignSelf: "flex-start",
    marginTop: verticalScale(10),
  },

  progressBar: {
    width: width - 80,
    borderRadius: 7.5,
    height: height * 0.02,
    marginTop: verticalScale(10),
  },
});
