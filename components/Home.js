import React from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { logout } from "../redux/actions";
import { connect } from "react-redux";
import { LOGIN } from "../navigation/screens";

const Home = ({ navigation, logout }) => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h1">HOME</Text>
      <Button onPress={() => navigation.navigate(LOGIN)}> Login </Button>
      <Button onPress={() => logout()}> Logout </Button>
    </Layout>
  );
};
const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(Home);
