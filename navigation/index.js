import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { HOME, BOTTOMTAB, LOGIN } from "./screens";
import Home from "../components/Home";
import PinpointStack from "./PinpointStack";
import Login from "../components/Login";

const { Navigator, Screen } = createStackNavigator();

export default function RootTabNavigator() {
  return (
    <Navigator initialRouteName={HOME}>
      <Screen options={{ headerShown: false }} name={HOME} component={Home} />
      <Screen options={{ headerShown: false }} name={LOGIN} component={Login} />
      <Screen
        options={{ headerShown: false }}
        name={BOTTOMTAB}
        component={PinpointStack}
      />
    </Navigator>
  );
}
