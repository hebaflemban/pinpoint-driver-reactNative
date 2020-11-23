import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { LOGIN, PROFILE, HOME } from "./screens";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Home from "../components/Home";

const { Navigator, Screen } = createStackNavigator();

export default function ProfileStack() {
  return (
    <Navigator initialRouteName={HOME}>
      <Screen name={HOME} component={Home} />
      <Screen name={LOGIN} component={Login} />
      <Screen name={PROFILE} component={Profile} />
    </Navigator>
  );
}
