import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { USER, ROUTE } from "./screens";
import UserStack from "./UserStack";
import RouteStack from "./RouteStack";
const { Navigator, Screen } = createStackNavigator();

export default function PinpointStack() {
  return (
    <Navigator initialRouteName={USER}>
      <Screen
        options={{ headerShown: false }}
        name={USER}
        component={UserStack}
      />
      <Screen
        options={{ headerShown: false }}
        name={ROUTE}
        component={RouteStack}
      />
    </Navigator>
  );
}
