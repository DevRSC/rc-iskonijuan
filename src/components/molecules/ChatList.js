import React from "react";
import { List } from "react-native-paper";

export default function ChatList({ chats, navigation }) {
  return (
    <>
      <List.Item
        title='Example'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        left={(props) => <List.Icon {...props} icon='folder' />}
      />
    </>
  );
}
