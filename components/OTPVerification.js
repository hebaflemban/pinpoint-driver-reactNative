import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
} from "@ui-kitten/components";
import { default as theme } from "../theme.json";
import { DELIVERED, LOGIN } from "../navigation/screens";

const OTPVerification = ({ navigation }) => {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text category="h1">OTPVerification</Text>
        <Button onPress={() => navigation.navigate(DELIVERED)}> VERIFY </Button>
      </Layout>
    </ApplicationProvider>
  );
};
export default OTPVerification;
