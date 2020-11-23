import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
} from "@ui-kitten/components";
import { default as theme } from "../theme.json";
import { FAILD, OTPVERIFICATION } from "../navigation/screens";
import { setRoute } from "../redux/actions";
import { connect } from "react-redux";

const PackageInfo = ({ navigation, setRoute, user }) => {
  console.log(user);
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text category="h1">PACKAGE INFO</Text>
        <Button onPress={() => setRoute()}> Set Route </Button>
        <Button onPress={() => navigation.navigate(OTPVERIFICATION)}>
          {" "}
          Complete{" "}
        </Button>
        <Button onPress={() => navigation.navigate(FAILD)}>
          {" "}
          Not Delievered{" "}
        </Button>
      </Layout>
    </ApplicationProvider>
  );
};
const mapStatesToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  setRoute: () => dispatch(setRoute()),
});

export default connect(mapStatesToProps, mapDispatchToProps)(PackageInfo);
