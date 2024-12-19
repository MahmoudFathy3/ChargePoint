import React, { createContext, useContext, useEffect } from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-reanimated";

import LoginPage from "./Screens/LoginPage";
import RegisterPage from "./Screens/RegisterPage";
import HomePage from "./Screens/HomePage";
import ProfilePage from "./Screens/ProfilePage";
import WelcomePage from "./Screens/WelcomePage";
import MyChagarPoint from "./Screens/MyChagarPoint";
// import { GETDATA } from "../hook/MethodAPI";
// import Storage from "expo-storage";
import { ContextProvider } from "../context/ContextProvider";

const Stack = createStackNavigator();

const RootLayout = () => {

  return (
    <>
      <ContextProvider>
        <Stack.Navigator initialRouteName="welcome">
          <Stack.Screen
            name="welcome"
            component={WelcomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="profile"
            component={ProfilePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="chargePoints"
            component={MyChagarPoint}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </ContextProvider>

      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
    </>
  );
};

export default RootLayout;
