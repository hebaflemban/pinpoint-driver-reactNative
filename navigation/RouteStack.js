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
    <Navigator initialRouteName={GEOLOCATION}>
      <Screen name={GEOLOCATION} component={Geolocation} />
      <Screen name={PACKAGEINFO} component={PackageInfo} />
      <Screen name={DELIVERED} component={Delivered} />
      <Screen name={FAILD} component={Failed} />
      <Screen name={OTPVERIFICATION} component={OTPVerification} />
    </Navigator>
  );
}
