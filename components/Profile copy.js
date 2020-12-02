import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
} from "@ui-kitten/components";
import { default as theme } from "../theme.json";
import { PACKAGEINFO, ROUTE } from "../navigation/screens";
import { logout } from "../redux/actions";
import { connect } from "react-redux";

const Profile = ({ navigation, logout }) => {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text category="h1">PROFILE PAGE</Text>
        <Button
          onPress={() => navigation.navigate(ROUTE, { screen: PACKAGEINFO })}
        >
          {" "}
          Start Delivering{" "}
        </Button>
        <Button onPress={() => logout()}> Logout </Button>
      </Layout>
    </ApplicationProvider>
  );
};
const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(Profile);
