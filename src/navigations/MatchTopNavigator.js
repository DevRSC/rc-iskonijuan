import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions } from "react-native";
import { scale } from "react-native-size-matters";

import Test from "./Test";

import LikedCampaign from "../screens/matchTopScreen/LikedCampaign";
import SuccessStories from "../screens/matchTopScreen/SuccessStories";

const topTab = createMaterialTopTabNavigator();

const { width } = Dimensions.get("window");

const LikedStack = createNativeStackNavigator();
const LikedStackScreen = () => {
  return (
    <LikedStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LikedStack.Screen name='LikedStackScreen' component={LikedCampaign} />
    </LikedStack.Navigator>
  );
};

const SuccessStack = createNativeStackNavigator();
const SuccessStackScreen = () => {
  return (
    <SuccessStack.Navigator
      initialRouteName='SuccessStackScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <SuccessStack.Screen
        name='SuccessStackScreen'
        component={SuccessStories}
      />
    </SuccessStack.Navigator>
  );
};

export default function MatchTopNavigator() {
  return (
    <topTab.Navigator
      initialRouteName='Liked Campaign'
      initialLayout={width}
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: scale(16),
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
      <topTab.Screen
        name='Liked Screen'
        options={{
          title: "Liked Campaigns",
        }}
        component={LikedStackScreen}
      />
      <topTab.Screen name='Success Stories' component={SuccessStackScreen} />
      {/* <topTab.Screen name='Liked Campaign' component={Campaign} />
      <topTab.Screen name='Success Stories' component={Stories} /> */}
    </topTab.Navigator>
  );
}
