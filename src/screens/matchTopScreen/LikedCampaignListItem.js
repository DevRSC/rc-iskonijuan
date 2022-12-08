import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Card, Text } from "react-native-paper";
import { scale } from "react-native-size-matters";

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function LikedCampaignListItem(props) {
  return (
    <View>
      <Card mode='elevated' elevation={2} style={styles.card} key={props.id}>
        <Card.Content style={styles.cardContent}>
          <Image source={{ uri: props.image }} style={styles.image} />
          <View style={styles.cardText}>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.description} numberOfLines={3}>
              {props.description}
            </Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    height: height * 0.2,
    width: width - 20,
    margin: 10,
  },
  cardContent: {
    height: "100%",
    width: width / 1.4,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  cardText: {
    marginLeft: 10,
  },
  image: {
    height: "100%",
    width: width / 3,
    borderRadius: 10,
    resizeMode: "cover",
  },
  title: {
    fontSize: scale(20),
    fontWeight: "bold",
  },
  description: {
    fontSize: scale(13),
    flexShrink: 1,
  },
});
