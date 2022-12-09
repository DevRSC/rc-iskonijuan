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
  </View>
);

export default function SuccessStories() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FDFCFB" }}>
      <View
        style={{
          height: height * 0.7,
        }}
      >
        <FlatList
          nestedScrollEnabled={true}
          ListHeaderComponent={
            <>
              <Text style={styles.screenTitle}>Featured Story</Text>
              <Card mode='elevated' elevation={2} style={styles.feauredCard}>
                <Card.Content style={styles.featuredcardContent}>
                  <Image
                    source={{ uri: "https://picsum.photos/700" }}
                    style={styles.featuredcardImage}
                  />
                  <View style={styles.featuredcardText}>
                    <Text style={styles.title}>Books for Kids</Text>
                    <Text style={styles.description} numberOfLines={3}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </View>
                </Card.Content>
              </Card>
            </>
          }
          data={Dummy_Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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
  screenTitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
  feauredCard: {
    height: height * 0.3,
    width: width - 20,
    margin: 10,
  },
  featuredcardContent: {
    height: 140,
    width: "100%",
  },
  featuredcardImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});
