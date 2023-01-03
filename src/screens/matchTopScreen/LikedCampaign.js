import React from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import LikedCampaignListItem from "./LikedCampaignListItem";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

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

export default function LikedCampaign() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("DonateStack", {
      screen: "Donate",
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: height * 0.7,
        }}
      >
        <FlashList
          data={Dummy_Data}
          renderItem={({ item }) => (
            <LikedCampaignListItem
              id={item.id}
              name={item.name}
              image={item.image}
              description={item.description}
              onPress={handlePress}
            />
          )}
          keyExtractor={(item) => item.id}
          estimatedItemSize={100}
          contentContainerStyle={{
            backgroundColor: "#FDFCFB",
          }}
        />
      </View>
    </View>
  );
}
