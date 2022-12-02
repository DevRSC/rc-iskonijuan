import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator} from "react-native"
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
import ModalScreen from "../components/molecules/ModalScreen"
import BottomNavigator from "./BottomNavigator";
import { Auth, Hub } from "aws-amplify"
import HomeScreen from "../screens/bottomScreens/HomeScreen";
const AuthStack = createNativeStackNavigator();

export default function StackNavigator() {
  const isLoggedin = false;
  const [user, setUser] = useState(undefined)
  
  const checkUser = async() => {
    try{
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true})
      setUser(authUser)
    } catch (e) {
      setUser(null)
    }
  };


  useEffect(() => {
    checkUser()
  }, [])

  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === 'signIn'){
        checkUser();
      }
    }
    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener)
  }, [])

  if (user === undefined){
    return(
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <AuthStack.Navigator
      initialRouteName='Welcome'
      screenOptions={{
        headerShown: false,
      }}
    >

      {user ? (
        <AuthStack.Screen name='Home' component={HomeScreen} />
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
