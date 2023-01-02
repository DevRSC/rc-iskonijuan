import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InitialWelcome from "../../screens/profileSetupScreen/InitialWelcome";
import ProfilePicture from "../../screens/profileSetupScreen/ProfilePicture";
import ProfileLocation from "../../screens/profileSetupScreen/ProfileLocation";
import ProfileInterest from "../../screens/profileSetupScreen/ProfileInterest";
import ProfileEthnicity from "../../screens/profileSetupScreen/ProfileEthnicity";
import ProfileStudy from "../../screens/profileSetupScreen/ProfileStudy";
import ProfileIncome from "../../screens/profileSetupScreen/ProfileIncome";
import ProfileEmployment from "../../screens/profileSetupScreen/ProfileEmployment";

export default function ProfileSetupStack() {
  const ProfileSetupStack = createNativeStackNavigator();
  return (
    <ProfileSetupStack.Navigator
      initialRouteName='Donate'
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileSetupStack.Screen
        name='InitialWelcome'
        component={InitialWelcome}
      />
      <ProfileSetupStack.Screen
        name='ProfilePicture'
        component={ProfilePicture}
      />
      <ProfileSetupStack.Screen
        name='ProfileLocation'
        component={ProfileLocation}
      />
      <ProfileSetupStack.Screen
        name='ProfileInterest'
        component={ProfileInterest}
      />
      <ProfileSetupStack.Screen
        name='ProfileEthnicity'
        component={ProfileEthnicity}
      />
      <ProfileSetupStack.Screen name='ProfileStudy' component={ProfileStudy} />
      <ProfileSetupStack.Screen
        name='ProfileIncome'
        component={ProfileIncome}
      />
      <ProfileSetupStack.Screen
        name='ProfileEmployment'
        component={ProfileEmployment}
      />
    </ProfileSetupStack.Navigator>
  );
}
