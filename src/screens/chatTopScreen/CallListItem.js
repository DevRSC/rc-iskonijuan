import { StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, List, Text } from "react-native-paper";
import { scale } from "react-native-size-matters";
import PropTypes from "prop-types";

CallListItem.propTypes = {
  name: PropTypes.string,
  imageUri: PropTypes.string,
  date: PropTypes.string,
  verified: PropTypes.bool,
};

export default function CallListItem(props) {
  return (
    <List.Item
      title={
        <View style={styles.listTitle}>
          <Text style={styles.name}>{props?.name}</Text>
          <List.Icon
            icon={
              props.verified
                ? "md-checkmark-circle-outline"
                : "ellipsis-horizontal-circle-outline"
            }
            color={props.verified ? "#F55A5A" : "#2B283A"}
          />
        </View>
      }
      description={props?.date}
      left={(item) => (
        <Avatar.Image
          {...item}
          size={45}
          source={{
            uri: props?.imageUri,
          }}
        />
      )}
      right={(item) => (
        <List.Icon {...item} icon='call' color='#F55A5A' size={12} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  listTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: scale(16),
    paddingRight: 10,
  },
});
