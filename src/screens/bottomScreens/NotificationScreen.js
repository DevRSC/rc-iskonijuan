import { SectionList, StyleSheet, View } from "react-native";
import React from "react";
import { Text, List, Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";

import HeaderContainer from "../../components/molecules/HeaderContainer";

const DATA = [
  {
    title: "New",
    data: [
      {
        name: "Jhon",
        description: "applied to be your scholar.",
        viewed: false,
      },
      {
        name: "April",
        description: "matched your criteria.",
        viewed: true,
      },
      {
        name: "Ramil",
        description: "completed her campaign.",
        viewed: true,
      },
      {
        name: "Ramil",
        description: "completed her campaign.",
        viewed: true,
      },
      {
        name: "Ramil",
        description: "completed her campaign.",
        viewed: true,
      },
      {
        name: "Ramil",
        description: "completed her campaign.",
        viewed: true,
      },
    ],
  },
  {
    title: "Earlier",
    data: [
      {
        name: "Jhon",
        description: "applied to be your scholar.",
        viewed: true,
      },
      {
        name: "April",
        description: "matched your criteria.",
        viewed: true,
      },
      {
        name: "Ramil",
        description: "completed her campaign.",
        viewed: true,
      },
      {
        name: "Ramil",
        description: "completed her campaign.",
        viewed: true,
      },
      {
        name: "Ramil",
        description: "completed her campaign.",
        viewed: true,
      },
      {
        name: "Ramil",
        description: "completed her campaign.",
        viewed: true,
      },
      {
        name: "Ramil",
        description: "completed her campaign.",
        viewed: true,
      },
    ],
  },
];

const renderItem = ({ item }) => (
  <List.Item
    onPress={() => {
      console.log("Current Item: ", item);
    }}
    title={
      <View style={[styles.listTitle, item.viewed ? "#2B283A" : "#918E9B"]}>
        <Text style={styles.name}>
          {item.name} {item.description}
        </Text>
      </View>
    }
    left={(props) => (
      <Avatar.Image
        {...props}
        size={45}
        source={{
          uri: "https://picsum.photos/200",
        }}
      />
    )}
    right={(props) => (
      <List.Icon {...props} icon='checkmark-done' color='#F55A5A' size={5} />
    )}
  />
);

export default function NotificationScreen() {
  console.log(DATA);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderContainer />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCFB",
  },
  header: {
    fontSize: scale(20),
    fontWeight: "bold",
    paddingLeft: 20,
  },
  flatList: {
    borderRadius: 20,
  },
  listTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: scale(13),
    paddingRight: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#D9D9D9",
  },
});
