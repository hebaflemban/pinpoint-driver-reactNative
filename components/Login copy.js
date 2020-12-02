import React, { useState } from "react";
import { Layout, Button, Input, Icon } from "@ui-kitten/components";
import { login } from "../redux/actions";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";

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
    <View style={styles.container}>
      <ImageBackground
        source={require("/Users/Heba/Desktop/CODED/final-capstone/pinpoint-2/assets/home2.png")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Input
          status="warning"
          placeholder="Pinpoint ID"
          {...warningInputState}
        />
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
      </ImageBackground>
    </View>

    // {/* <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> */}
  );
};
const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: 528,
    height: 882,
    marginLeft: -94,
  },
  image_imageStyle: {
    opacity: 0.3,
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 100,
    width: 100,
    marginTop: 312,
    marginLeft: 144,
  },
});
