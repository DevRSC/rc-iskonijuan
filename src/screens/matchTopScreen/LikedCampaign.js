import React from "react";
import { StyleSheet, View, Image, FlatList } from "react-native";
import { Card, Text } from "react-native-paper";
import { scale } from "react-native-size-matters";

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Dummy_Data = [
  {
    id: 1,
    name: "Books for Kids",
    image: "https://picsum.photos/700",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Books for Kids",
    image: "https://picsum.photos/700",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Books for Kids",
    image: "https://picsum.photos/700",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Books for Kids",
    image: "https://picsum.photos/700",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    name: "Books for Kids",
    image: "https://picsum.photos/700",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    name: "Books for Kids",
    image: "https://picsum.photos/700",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const renderItem = ({ item }) => (
  <View>
    <Card mode='elevated' elevation={2} style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.cardText}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {item.description}
          </Text>
        </View>
      </Card.Content>
    </Card>
  </View>
);

export default function LikedCampaign() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FDFCFB" }}>
      <View
        style={{
          height: height * 0.7,
        }}
      >
        <FlatList
          data={Dummy_Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ backgroundColor: "#FFFFFF" }}
        />
      </View>
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
