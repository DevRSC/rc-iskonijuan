import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/bottomScreens/HomeScreen";
import ChatScreen from "../screens/bottomScreens/ChatScreen";
import MatchScreen from "../screens/bottomScreens/MatchScreen";
import NotificationScreen from "../screens/bottomScreens/NotificationScreen";
import { verticalScale } from "react-native-size-matters";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Profile Navigation Flow
import Profile from "../screens/bottomScreens/HomeStackScreens/Profile";

//Create HomeStackNavigator
const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='HomeStackScreen'
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name='Profile'
        component={Profile}
        options={{ headerShown: true }}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      compact={true}
      shifting={true}
      activeColor='#F55A5A'
      inactiveColor='#918E9B'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Chat") {
            iconName = focused ? "chatbox" : "chatbox-outline";
          } else if (route.name === "Match") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "notifications" : "notifications-outline";
          }

          return (
            <Ionicons name={iconName} size={verticalScale(25)} color={color} />
          );
        },
      })}
      barStyle={{
        position: "absolute",
        backgroundColor: "#FDFCFB",
        height: verticalScale(45),
        bottom: 17,
      }}
    >
      <Tab.Screen key={0} name='Home' component={HomeStackScreen} />

      <Tab.Screen key={1} name='Chat' component={ChatScreen} />

      <Tab.Screen key={2} name='Match' component={MatchScreen} />

      <Tab.Screen
        key={3}
        name='Notification'
        component={NotificationScreen}
        options={{
          tabBarBadge: 5,
        }}
      />
    </Tab.Navigator>
  );
}
