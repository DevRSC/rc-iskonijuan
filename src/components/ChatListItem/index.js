import { Text, View, Image, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const ChatListItem = ({ chat }) => {
    const navigation = useNavigation()
    return (
      <Pressable onPress={() => navigation.navigate('ChatScreen', {id: chat.id, name: chat.user.name })} style={styles.container}>
        {/* User Avatar */}
        <Image source={{ uri: chat.user.image }} style={styles.image} />
  
        {/* content */}
        <View style={styles.content}>
            <View style={styles.row}>
                <Text style={styles.name} numberOfLines={1}>
                    {chat.user.name}
                </Text>
                <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
            </View>

            <Text numberOfLines={2} style={styles.subTitle}>
                {chat.lastMessage.text}
            </Text>
        </View>
      </Pressable>
    );
  };

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "stretch",
      marginHorizontal: 10,
      marginTop: 10,
      height: 80,
    },
    image: {
      width: 60,
      aspectRatio: 1,
      borderRadius: 30,
      marginRight: 10,
    },
    content: {
      flex: 1,
      borderBottomColor: "lightgray",
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginTop: 10,
    },
    row: {
      flexDirection: "row",
      marginBottom: 5,
    },
    name: {
      fontWeight: "bold",
      flex: 1,
    },
    subTitle: {
      color: "grey",
    },
  });

export default ChatListItem;