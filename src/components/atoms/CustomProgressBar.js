import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import { ProgressBar, Text } from "react-native-paper";
import { scale, verticalScale } from "react-native-size-matters";
import PropTypes from "prop-types";

CustomProgressBar.propTypes = {
  donationProgress: PropTypes.number,
  currentDonation: PropTypes.number,
  targetDonation: PropTypes.number,
  style: PropTypes.object,
};

const { height, width } = Dimensions.get("window");

export default function CustomProgressBar(props) {
  return (
    <View style={props.style}>
      <ProgressBar
        progress={props.donationProgress}
        style={styles.progressBar}
      />
      <Text style={styles.cardDonationStatus}>
        ₱{props.currentDonation} raised of ₱{props.targetDonation}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    width: width - 80,
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
});
