import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import SigninScreen from "../screens/SigninScreen";
import ForgotPassword from "../screens/ForgotPassword";
import RequestPassword from "../screens/RequestPassword";
import CreateNewPassword from "../screens/CreateNewPassword";

import SignupScreen from "../screens/signUp/SignupScreen";
import SignupBenefactor from "../screens/signUp/SignupBenefactor";
import SignupStudent from "../screens/signUp/SignupStudent";
import SignupOrganization from "../screens/signUp/SignupOrganization";
import SignupContacts from "../screens/signUp/SignupContacts";
import SignupVerify from "../screens/signUp/SignupVerify";
import ModalScreen from "../components/molecules/ModalScreen";
import { Auth } from "aws-amplify";

import BottomNavigator from "./BottomNavigator";

const AuthStack = createNativeStackNavigator();

export default function StackNavigator() {
  const [user, setUser] = useState(false);

  // const checkUser = async () => {
  //   const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
  //   setUser(authUser);
  //   console.log("user", user);
  // };

  // useEffect(() => {
  //   checkUser();
  // }, []);

  return (
    <AuthStack.Navigator
      initialRouteName='Welcome'
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <AuthStack.Screen name='BottomNavigator' component={BottomNavigator} />
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
