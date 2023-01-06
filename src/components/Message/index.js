import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import { Auth } from 'aws-amplify';
import { S3Image } from 'aws-amplify-react-native';

const Message = ({ message }) => {
  const [isMe, setIsMe] = useState(false);

  useEffect(() => {
    const isMyMessage = async () => {
      const authUser = await Auth.currentAuthenticatedUser();

      setIsMe(message.userID === authUser.attributes.sub);
    };

    isMyMessage();
  }, []);
  
  //console.log(message)
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMe ? "#F55A5A" : "white",
          alignSelf: isMe ? "flex-end" : "flex-start",
        },
      ]}
    >
      {message.images?.length > 0 && (
        <S3Image imgKey={message.images[0]} style={styles.image} />
      )}
      <Text style={[
        {
          color: isMe ? "#FFFFFF" : "#2B283A",
        },
        ]}>
          {message.text}
      </Text>
      <Text style={[styles.time,
      {
          color: isMe ? "#FFFFFF" : "#FAF9F6",
      },
      ]}>
        {dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',

    // Shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  time: {
    alignSelf: 'flex-end',
  },
  text: {
    color:  "#FFFFFF",
  },
  image: {
    width: 200,
    height: 100,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Message;