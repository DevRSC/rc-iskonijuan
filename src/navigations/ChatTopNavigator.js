import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions } from "react-native";

import Chats from "../screens/chatTopScreen/Chats";
import Calls from "../screens/chatTopScreen/Calls";

const topTab = createMaterialTopTabNavigator();

const { width } = Dimensions.get("window");

export default function ChatTopNavigator() {
  return (
    <topTab.Navigator
      initialRouteName='Chats'
      initialLayout={width}
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: "Inter-Medium",
          textTransform: "none",
        },
        tabBarActiveTintColor: "#F55A5A",
        tabBarInactiveTintColor: "#2B283A",
        tabBarIndicatorStyle: {
          backgroundColor: "#F55A5A",
          height: 4,
        },
        tabBarStyle: {
          backgroundColor: "#FDFCFB",
        },
      }}
    >
      <topTab.Screen name='Chats' component={Chats} />
      <topTab.Screen name='Calls' component={Calls} />
    </topTab.Navigator>
  );
}
