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

const Profile = ({ navigation }) => {
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
      </Layout>
    </ApplicationProvider>
  );
};
export default Profile;
