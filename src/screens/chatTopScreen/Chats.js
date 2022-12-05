import { StyleSheet, View, FlatList } from "react-native";
import React, { useRef } from "react";
import ChatListItem from "./ChatListItem";
import { useScrollToTop } from "@react-navigation/native";

const persons = [
  {
    id: "1",
    name: "Earnest Green",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: true,
  },
  {
    id: "2",
    name: "Winston Orn",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: false,
  },
  {
    id: "3",
    name: "Carlton Collins",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: true,
  },
  {
    id: "4",
    name: "Malcolm Labadie",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: false,
  },
  {
    id: "5",
    name: "Michelle Dare",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: true,
  },
  {
    id: "6",
    name: "Carlton Zieme",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: true,
  },
  {
    id: "7",
    name: "Jessie Dickinson",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: true,
  },
  {
    id: "8",
    name: "Julian Gulgowski",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: false,
  },
  {
    id: "9",
    name: "Ellen Veum",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: true,
  },
  {
    id: "10",
    name: "Lorena Rice",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: true,
  },

  {
    id: "11",
    name: "Carlton Zieme",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: false,
  },
  {
    id: "12",
    name: "Jessie Dickinson",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: false,
  },
  {
    id: "13",
    name: "Julian Gulgowski",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: false,
  },
  {
    id: "14",
    name: "Ellen Veum",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: false,
  },
  {
    id: "15",
    name: "Lorena Rice",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: false,
  },
];

export default function Chats() {
  const ref = useRef(null);
  useScrollToTop(ref);

  console.log("ChatScreen Rerendered");
  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        style={styles.flatList}
        data={persons}
        keyExtractor={(item) => item.id}
        renderItem={
          ({ item }) => (
            <ChatListItem
              name={item.name}
              imageUri={item.imageUri}
              status={item.status}
              verified={item.verified}
            />
          )
          // <List.Item
        }
        getItemLayout={(data, index) => ({
          length: 80,
          offset: 80 * index,
          index,
        })}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCFB",
  },
  flatList: {
    borderRadius: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "#D9D9D9",
  },
});
