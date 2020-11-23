import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Layout, Button, Input, Icon } from "@ui-kitten/components";
import { login } from "../redux/actions";
import { connect } from "react-redux";

const useInputState = (initialValue = "") => {
  const [username, setUsername] = useState(initialValue);
  return { username, onChangeText: setUsername };
};

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

const Login = ({ navigation, login }) => {
  // for username input
  const warningInputState = useInputState();
  const username = warningInputState.username;
  // for password input
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Input status="warning" placeholder="Warning" {...warningInputState} />
      <Input
        value={password}
        status="warning"
        label="Password"
        placeholder="Place your Text"
        caption="Should contain at least 8 symbols"
        accessoryRight={renderIcon}
        captionIcon={AlertIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={(nextValue) => setPassword(nextValue)}
      />
      <Button onPress={() => login({ username, password }, navigation)}>
        {" "}
        Login{" "}
      </Button>
    </Layout>
  );
};
const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    margin: 2,
  },

  input: {
    flex: 1,
    margin: 1,
  },
});
