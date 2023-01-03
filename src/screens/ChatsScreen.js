import { FlatList } from "react-native";
import ChatListItem from "../components/ChatListItem";
import chats from "../../assets/data/chats.json";
import React from 'react';

const ChatsScreen = () => {
  return (
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatListItem chat={item} />}
      />
  );
};



export default ChatsScreen;