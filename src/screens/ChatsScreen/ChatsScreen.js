import { FlatList } from "react-native";
import ChatListItem from "../../components/ChatListItem";
import { API, graphqlOperation, Auth } from "aws-amplify";
import React from 'react';
import { useEffect, useState } from "react";
import { listChatRooms } from "./queries";

const ChatsScreen = () => {
  const [chatRoom, setChatRooms] = useState([]);

  useEffect(() => {
    const fetchChatRooms = async () => {
      const authUser = await Auth.currentAuthenticatedUser()

      const response = await API.graphql(
        graphqlOperation(listChatRooms, { id: authUser.attributes.sub })
      );

      const rooms = response.data.getUser.ChatRooms.items;
      const sortedRooms = rooms.sort(
        (room1, room2) =>
          new Date(room2.chatRoom.updatedAt) - new Date(room1.chatRoom.updatedAt)
      );

      setChatRooms(sortedRooms);
    };

    fetchChatRooms()
  }, []);

  return (
    <FlatList
      data={chatRoom}
      renderItem={({ item }) => <ChatListItem chat={item.chatRoom} />}
      style={{ backgroundColor: "white" }}
    />
  );
};




export default ChatsScreen;