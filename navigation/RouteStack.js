import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import {
  PACKAGEINFO,
  DELIVERED,
  FAILD,
  OTPVERIFICATION,
  GEOLOCATION,
} from "./screens";
import PackageInfo from "../components/PackageInfo";
import Delivered from "../components/Delivered";
import Failed from "../components/Failed";
import OTPVerification from "../components/OTPVerification";
import Geolocation from "../components/Geolocation";

const { Navigator, Screen } = createStackNavigator();

export default function RouteStack() {
  return (
    <Navigator initialRouteName={OTPVERIFICATION}>
      <Screen name={GEOLOCATION} component={Geolocation} />
      <Screen
        options={{ headerShown: false }}
        name={PACKAGEINFO}
        component={PackageInfo}
      />
      <Screen
        options={{ headerShown: false }}
        name={DELIVERED}
        component={Delivered}
      />
      <Screen
        options={{ headerShown: false }}
        name={FAILD}
        component={Failed}
      />
      <Screen
        options={{ headerShown: false }}
        name={OTPVERIFICATION}
        component={OTPVerification}
      />
    </Navigator>
  );
}
