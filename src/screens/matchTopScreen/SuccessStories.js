import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Card, Text } from "react-native-paper";
import { FlashList } from "@shopify/flash-list";
import SuccessStoriesItemList from "./SuccessStoriesItemList";
import { useNavigation } from "@react-navigation/native";

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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
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

export default function SuccessStories() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("MatchStackScreen", {
      screen: "SuccessStoryModal",
    });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#FDFCFB" }}>
      <View
        style={{
          height: height * 0.7,
        }}
      >
        <FlashList
          nestedScrollEnabled={true}
          estimatedItemSize={100}
          ListHeaderComponent={
            <>
              <Text style={styles.screenTitle}>Featured Story</Text>
              <Card mode='elevated' elevation={2} style={styles.featuredCard}>
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
          renderItem={({ item }) => (
            <SuccessStoriesItemList
              name={item.name}
              image={item.image}
              description={item.description}
              onPress={handlePress}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontFamily: "Inter-SemiBold",
  },
  screenTitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
  featuredCard: {
    height: height * 0.3,
    width: width - 20,
    margin: 10,
    backgroundColor: "#FFFFFF",
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
