import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Donate from "../../screens/benefactor/Donate";
import DonateConfirmation from "../../screens/benefactor/DonateConfirmation";
import ShareCampaign from "../../screens/benefactor/ShareCampaign";
import { scale } from "react-native-size-matters";

const DonateStackScreen = createNativeStackNavigator();

export default function DonateStack() {
  return (
    <DonateStackScreen.Navigator
      initialRouteName='Donate'
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          // marginTop: verticalScale(50),
        },
        headerTitleStyle: {
          fontFamily: "Inter-Medium",
          fontSize: scale(20),
        },
        headerStyle: {
          backgroundColor: "#FDFCFB",
        },
        headerTitleAlign: "center",
      }}
    >
      <DonateStackScreen.Screen
        name='Donate'
        component={Donate}
        options={{
          title: "Donate",
        }}
      />
      <DonateStackScreen.Group screenOptions={{ presentation: "modal" }}>
        <DonateStackScreen.Screen
          name='DonateConfirmation'
          component={DonateConfirmation}
          options={{
            headerShown: false,
          }}
        />
        <DonateStackScreen.Screen
          name='ShareCampaign'
          component={ShareCampaign}
          options={{
            headerShown: false,
          }}
        />
      </DonateStackScreen.Group>
    </DonateStackScreen.Navigator>
  );
}
