import React, { useState } from "react";
import * as eva from "@eva-design/eva";
import { default as theme } from "../theme.json";
import { FAILD, OTPVERIFICATION } from "../navigation/screens";
import { connect } from "react-redux";
import { TouchableOpacity, Linking } from "react-native";
import { Icon } from "native-base";
import { updateStatus, nextPackage } from "../redux/actions";
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
} from "@ui-kitten/components";

const PackageInfo = ({ navigation, packages, updateStatus, nextPackage }) => {
  const package_ = packages[0];
  const [delievered, setDelievered] = useState();

  const openMap = () => {
    console.log("open directions");
    Linking.openURL(package_.location);
  };

  const handleDelivering = () => {
    navigation.navigate(OTPVERIFICATION);
    updateStatus(package_.id, 2);
  };

  const handleFailing = () => {
    navigation.navigate(FAILD);
    updateStatus(package_.id, 3);
  };

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text category="h1">PACKAGE INFO</Text>
        <Text>{`Package id: ${package_.unique_id}`}</Text>
        <Text>{`For: ${package_.receiver_name}`}</Text>
        <Text>{`Phone number: ${package_.receiver_phone}`}</Text>
        <Text>{`Expected at: ${package_.preferred_time}`}</Text>
        <Text>{`Expected at: ${package_.preferred_time}`}</Text>
        <Text>{`Address:`}</Text>
        <Text>{`Status: ${package_.status}`}</Text>

        <TouchableOpacity onPress={() => openMap()}>
          <Icon name="md-navigate" style={{ fontSize: 24 }} />
          <Text style={{ fontSize: 13, fontWeight: "700", lineHeight: 14 }}>
            NAVIGATE
          </Text>
        </TouchableOpacity>
        <Button onPress={() => handleDelivering()}> Complete </Button>
        <Button onPress={() => handleFailing()}> Not Delievered </Button>
        <Button onPress={() => nextPackage(package_.id)}> Next </Button>
      </Layout>
    </ApplicationProvider>
  );
};
const mapStatesToProps = ({ packages }) => ({
  packages,
});
const mapDispatchToProps = {
  updateStatus,
  nextPackage,
};

export default connect(mapStatesToProps, mapDispatchToProps)(PackageInfo);
