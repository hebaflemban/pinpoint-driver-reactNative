import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

// Screens
import { LOGIN, PROFILE, HOME } from "./screens";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Home from "../components/Home";

const { Navigator, Screen } = createStackNavigator();

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(function UserStack({ user }) {
  return (
    <Navigator initialRouteName={user ? PROFILE : HOME}>
      {/* {user ? ( */}
      <Screen
        options={{ headerShown: false }}
        name={PROFILE}
        component={Profile}
      />
      {/* ) : (
        <>
          <Screen
            options={{ headerShown: false }}
            name={LOGIN}
            component={Login}
          />
        </>
      )} */}
    </Navigator>
  );
});
