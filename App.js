import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect } from "react";
import StackNavigator from "./src/navigations/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import Ionicon from "react-native-vector-icons/Ionicons";

//import amplify
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';

//import authenticator
//import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native";

//import Themes
import {
  adaptNavigationTheme,
  MD3LightTheme,
  Provider as PaperProvider,
  useTheme,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Custom font integration of React Native Expo and React Native Paper
const customThemeFonts = Object.fromEntries(
  Object.entries(MD3LightTheme.fonts).map(
    ([variantName, variantProperties]) => [
      variantName,
      { ...variantProperties, fontFamily: "Inter-Regular" },
      { ...variantProperties, fontFamily: "Inter-Bold" },
    ]
  )
);

// Custom Theme Configuration for App

const { LightTheme } = adaptNavigationTheme({
  light: NavigationDefaultTheme,
});

const theme = {
  ...MD3LightTheme,
  version: 3,
  roundness: 6,
  fonts: customThemeFonts,
  myOwnProperty: true,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#F55A5A",
    secondary: "#2B283A",
    tertiary: "#918E9B",
    background: "#FDFCFB",
  },
};

const combinedDefaultTheme = {
  ...theme,
  ...LightTheme,
  colors: {
    ...theme.colors,
    ...LightTheme.colors,
  },
};

//Configure amplify
Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.otf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.otf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.otf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider
      theme={theme}
      settings={{
        icon: (props) => <Ionicon {...props} />,
      }}
    >
      <SafeAreaProvider>
        <NavigationContainer
          onReady={onLayoutRootView}
          theme={combinedDefaultTheme}
        >
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
/*
const signUpConfig = {
  header: 'My Customized Sign up',
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Full name',
      key: 'name',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string',
    },
    {
      label: 'Username',
      key: 'preferred_username',
      required: true,
      displayOrder: 3,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 4,
      type: 'password',
    },
  ],
};

*/
//export default withAuthenticator (App, {signUpConfig, theme: customTheme});

export default App;
