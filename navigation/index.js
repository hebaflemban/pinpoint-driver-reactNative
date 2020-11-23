import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import { USER, ROUTE } from "./screens";
import UserStack from "./UserStack";
import RouteStack from "./RouteStack";

const { Navigator, Screen } = createBottomTabNavigator();

export default function RootTabNavigator() {
  return (
    <Navigator initialRouteName={USER}>
      <Screen name={USER} component={UserStack} />
      <Screen name={ROUTE} component={RouteStack} />
    </Navigator>
  );
}
