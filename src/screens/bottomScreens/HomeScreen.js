import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useRef } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressBar, Text } from "react-native-paper";
import HeaderContainer from "../../components/molecules/HeaderContainer";
import { scale, verticalScale } from "react-native-size-matters";
import Ionicons from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-deck-swiper";
import { useNavigation } from "@react-navigation/native";

const DummyData = [
  {
    id: 1,
    firstName: "Ramil S Cobilla Jr",
    campaignName: "For Academic Books",
    camapaignDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit vel quam vitae ultrices. Morbi tincidunt risus libero, eu feugiat nisi dictum eget. ",
    image: "https://picsum.photos/700",
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
    image: "https://picsum.photos/700",
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
    image: "https://picsum.photos/700",
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
    image: "https://picsum.photos/700",
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
    image: "https://picsum.photos/700",
    donationProgress: 0.9,
    verified: true,
    currentDonation: 1000,
    targetDonation: 2000,
  },
];

const { height, width } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation();
  const swipeRef = useRef(null);

  const onPressHandler = (index) => {
    console.log("onPressHandler", index);

    //get card data
    const cardData = DummyData[index];
    console.log("cardData", cardData);
    navigation.navigate("CardModalScreen", {
      Name: cardData.firstName,
      Title: cardData.campaignName,
      Description: cardData.camapaignDescription,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFCFB" }}>
      {/* Header */}
      <HeaderContainer />
      {/*Header End*/}

      {/* Cards */}
      <View style={styles.cardsContainer}>
        <Swiper
          infinite
          stackSize={3}
          cardIndex={0}
          ref={swipeRef}
          cards={DummyData}
          verticalSwipe={false}
          containerStyle={{ backgroundColor: "transparent" }}
          onTapCard={(index) => onPressHandler(index)}
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
