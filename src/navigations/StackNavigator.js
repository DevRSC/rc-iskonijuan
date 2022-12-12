import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View, ActivityIndicator } from "react-native";
import Test from "./Test";
import WelcomeScreen from "../screens/signIn/WelcomeScreen";
import SigninScreen from "../screens/signIn/SigninScreen";
import Profile from "../screens/bottomScreens/ProfileStackScreens/Profile";
import ForgotPassword from "../screens/signIn/ForgotPassword";
import RequestPassword from "../screens/signIn/RequestPassword";
import CreateNewPassword from "../screens/signIn/CreateNewPassword";

import SignupScreen from "../screens/signUp/SignupScreen";
import SignupBenefactor from "../screens/signUp/SignupBenefactor";
import SignupStudent from "../screens/signUp/SignupStudent";
import SignupOrganization from "../screens/signUp/SignupOrganization";
import SignupContacts from "../screens/signUp/SignupContacts";
import SignupVerify from "../screens/signUp/SignupVerify";
import SignupAdditionalInfo from "../screens/signUp/SignupAdditionalInfo";

import LikedCampaignModal from "../screens/matchTopScreen/matchscreenStack/LikedCampaignModal";
import SuccessStoryModal from "../screens/matchTopScreen/matchscreenStack/SuccessStoryModal";
import CardModal from "../components/atoms/CardModal";
import ModalScreen from "../components/molecules/ModalScreen";

import Donate from "../screens/benefactor/Donate";

import BottomNavigator from "./BottomNavigator";

import { Auth, Hub } from "aws-amplify";
import { scale, verticalScale } from "react-native-size-matters";

const AuthStack = createNativeStackNavigator();

const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
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
      <ProfileStack.Screen
        name='ProfileStackScreen'
        component={Profile}
        options={{
          title: "Profile",
        }}
      />
    </ProfileStack.Navigator>
  );
};

const MatchStack = createNativeStackNavigator();
const MatchStackScreen = () => {
  return (
    <MatchStack.Navigator
      screenOptions={{
        headerShadowVisible: false,

        headerTitleStyle: {
          fontFamily: "Inter-Medium",
          fontSize: scale(20),
        },
        headerStyle: {
          backgroundColor: "#FDFCFB",
        },
        headerTitleAlign: "flex-start",
      }}
    >
      <MatchStack.Screen
        name='LikedCampaignModal'
        component={LikedCampaignModal}
        options={{
          title: "Liked Campaign",
        }}
      />
      <MatchStack.Screen
        name='SuccessStoryModal'
        component={SuccessStoryModal}
        options={{
          title: "Success Story",
        }}
      />
    </MatchStack.Navigator>
  );
};

//create stack screen for user profile

export default function StackNavigator() {
  const [user, setUser] = useState(undefined);
  const [userType, setUserType] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
      setUserType(authUser.attributes["custom:userType"]);
      console.log("userType", userType);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser().catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const authListener = Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          return checkUser();
        case "signOut":
          return setUser(null);
      }
    });
    return () => Hub.remove("auth", authListener);
  }, []);

  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === "signIn") {
        checkUser();
      }
    };
    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, []);

  if (user === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <AuthStack.Navigator
      initialRouteName='Welcome'
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <>
          {userType === "Benefactor" ? (
            <>
              <AuthStack.Screen
                name='BottomNavigator'
                component={BottomNavigator}
              />
              <AuthStack.Screen
                name='CardModalScreen'
                component={CardModal}
                options={{
                  headerShown: false,
                  presentation: "transparentModal",
                }}
              />
              <AuthStack.Screen
                name='MatchStackScreen'
                component={MatchStackScreen}
              />

              <AuthStack.Screen
                name='Donate'
                component={Donate}
                options={{
                  headerShown: true,

                  headerShadowVisible: false,
                  title: "Donate",
                  headerTitleStyle: {
                    fontFamily: "Inter-Medium",
                    fontSize: scale(20),
                  },
                  headerStyle: {
                    backgroundColor: "#FDFCFB",
                  },
                }}
              />
            </>
          ) : (
            <AuthStack.Screen name='Test' component={Test} />
          )}

          <AuthStack.Screen name='Profile' component={ProfileStackScreen} />
        </>
      ) : (
        <>
          <AuthStack.Screen name='Welcome' component={WelcomeScreen} />
          <AuthStack.Screen name='SignIn' component={SigninScreen} />
          <AuthStack.Screen name='ForgotPassword' component={ForgotPassword} />
          <AuthStack.Screen name='Request' component={RequestPassword} />
          <AuthStack.Screen
            name='CreateNewPassword'
            component={CreateNewPassword}
          />

          {/* Sign Up Screen Navigation flow /> */}
          <AuthStack.Group>
            <AuthStack.Screen name='SignUp' component={SignupScreen} />
            <AuthStack.Screen name='SignUpStudent' component={SignupStudent} />
            <AuthStack.Screen
              name='SignUpBenefactor'
              component={SignupBenefactor}
            />
            <AuthStack.Screen
              name='SignUpOrganization'
              component={SignupOrganization}
            />
            <AuthStack.Screen
              name='SignUpContacts'
              component={SignupContacts}
            />
            <AuthStack.Screen name='SignUpVerify' component={SignupVerify} />
            <AuthStack.Screen
              name='SignUpAdditionalInfo'
              component={SignupAdditionalInfo}
            />
          </AuthStack.Group>

          {/* Modal Screen Navigation flow /> */}
          <AuthStack.Group screenOptions={{ presentation: "modal" }}>
            <AuthStack.Screen name='Modal' component={ModalScreen} />
          </AuthStack.Group>
        </>
      )}
    </AuthStack.Navigator>
  );
}
