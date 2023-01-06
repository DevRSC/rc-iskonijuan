import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import { Auth, Storage } from 'aws-amplify';
import { S3Image } from 'aws-amplify-react-native';
import ImageView from "react-native-image-viewing"
const Message = ({ message }) => {
  const [isMe, setIsMe] = useState(false)
  const [imageSources, setImageSources] = useState([])
  const [imageViewerVisible, setImageViewerVisible] =useState(false)
  useEffect(() => {
    const isMyMessage = async () => {
      const authUser = await Auth.currentAuthenticatedUser();

      setIsMe(message.userID === authUser.attributes.sub);
    };

    isMyMessage();
  }, []);
  
  useEffect(() => {
    const downloadImages = async () => {
      if (message.images) {
        const imageUrls = await Promise.all(message.images.map(Storage.get));
  
        setImageSources(imageUrls.map((uri) => ({ uri })));
      }
    };
    downloadImages();
  }, [message.images]);

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
      {imageSources?.length > 0 && (
      <>
        <Pressable onPress={() => setImageViewerVisible(true)}>
          <Image source={imageSources[0]} style={styles.image} />
        </Pressable>

        <ImageView
          images={imageSources}
          imageIndex={0}
          visible={imageViewerVisible}
          onRequestClose={() => setImageViewerVisible(false)}
        />
      </>
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