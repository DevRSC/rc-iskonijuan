import { StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text } from "react-native-paper";
import { scale, verticalScale } from "react-native-size-matters";
import React from "react";
import PropTypes from "prop-types";

ShareLogo.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
};

export default function ShareLogo(props) {
  return (
    <View style={styles.rowContainer}>
      <Ionicons
        name={props.iconName}
        size={scale(25)}
        color={props.iconColor}
      />
      <Text style={styles.blackSub}>{props.Title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: verticalScale(16),
    width: scale(328),
  },
  blackSub: {
    fontFamily: "Inter-SemiBold",
    fontSize: scale(16),
    paddingLeft: scale(16),
    color: "#2B283A",
  },
});
