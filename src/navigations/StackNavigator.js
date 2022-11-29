import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/signUp/SignupScreen";
import SignupBenefactor from "../screens/signUp/SignupBenefactor";
import SignupStudent from "../screens/signUp/SignupStudent";
import SignupOrganization from "../screens/signUp/SignupOrganization";

import BottomNavigator from "./BottomNavigator";

const AuthStack = createNativeStackNavigator();

export default function StackNavigator() {
  const isLoggedin = false;
  return (
    <AuthStack.Navigator
      initialRouteName='SignUpBenefactor'
      screenOptions={{
        headerShown: false,
      }}
    >
      {isLoggedin ? (
        <AuthStack.Screen name='BottomNavigator' component={BottomNavigator} />
      ) : (
        <>
          <AuthStack.Screen name='Welcome' component={WelcomeScreen} />
          <AuthStack.Screen name='SignIn' component={SigninScreen} />
          <AuthStack.Screen name='SignUp' component={SignupScreen} />
          <AuthStack.Screen
            name='SignUpBenefactor'
            component={SignupBenefactor}
          />
          <AuthStack.Screen name='SignUpStudent' component={SignupStudent} />
          <AuthStack.Screen
            name='SignUpOrganization'
            component={SignupOrganization}
          />
        </>
      )}
    </AuthStack.Navigator>
  );
}
