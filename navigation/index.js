import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import {
  HOME,
  BOTTOMTAB,
  LOGIN,
  PACKAGEINFO,
  OTPVERIFICATION,
  PROFILE,
} from "./screens";
import Home from "../components/Home";
import Login from "../components/Login";
import PackageInfo from "../components/PackageInfo";
import OTPVerification from "../components/OTPVerification";
import Profile from "../components/Profile";

const { Navigator, Screen } = createStackNavigator();

export default function RootTabNavigator() {
  return (
    <Navigator initialRouteName={HOME}>
      <Screen options={{ headerShown: false }} name={HOME} component={Home} />
      <Screen options={{ headerShown: false }} name={LOGIN} component={Login} />
      <Screen
        options={{ headerShown: false }}
        name={PROFILE}
        component={Profile}
      />
      <Screen
        options={{ headerShown: false }}
        name={PACKAGEINFO}
        component={PackageInfo}
      />
      <Screen
        options={{ headerShown: false }}
        name={OTPVERIFICATION}
        component={OTPVerification}
      />
    </Navigator>
  );
}
