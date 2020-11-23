import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { PACKAGEINFO, DELIVERED, FAILD, OTPVERIFICATION } from "./screens";
import PackageInfo from "../components/PackageInfo";
import Delivered from "../components/Delivered";
import Failed from "../components/Failed";
import OTPVerification from "../components/OTPVerification";

const { Navigator, Screen } = createStackNavigator();

export default function RouteStack() {
  return (
    <Navigator initialRouteName={PACKAGEINFO}>
      <Screen name={PACKAGEINFO} component={PackageInfo} />
      <Screen name={DELIVERED} component={Delivered} />
      <Screen name={FAILD} component={Failed} />
      <Screen name={OTPVERIFICATION} component={OTPVerification} />
    </Navigator>
  );
}
