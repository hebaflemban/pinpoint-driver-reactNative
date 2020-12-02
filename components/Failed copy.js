import React from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { PACKAGEINFO } from "../navigation/screens";

const Failed = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h1">Delivery Attempt Failed</Text>
      <Button onPress={() => navigation.navigate(PACKAGEINFO)}> NEXT </Button>
    </Layout>
  );
};
export default Failed;
