import React, { useState } from "react";
import { login } from "../redux/actions";
import { connect } from "react-redux";
import { Layout, Button, Input, Icon } from "@ui-kitten/components";

import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Text,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { BOTTOMTAB, PROFILE } from "../navigation/screens";

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
    <KeyboardAwareScrollView
      style={{ backgroundColor: "white" }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("/Users/Heba/Desktop/CODED/final-capstone/pinpoint-2/assets/images/home2.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <TextInput
            value={password}
            placeholder="Password"
            style={styles.placeholder1}
            accessoryRight={renderIcon}
            captionIcon={AlertIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={(nextValue) => setPassword(nextValue)}
          ></TextInput>
        </ImageBackground>
        <TextInput
          placeholder="Pinpoint ID"
          style={styles.placeholder}
          {...warningInputState}
        ></TextInput>

        <Button
          style={styles.button}
          onPress={() => login({ username, password }, navigation)}
        >
          {" "}
          Login{" "}
        </Button>
        <Text style={styles.loremIpsum}>
          Improving your delivery experience
        </Text>
        <Text style={styles.pinpoint}>Pinpoint</Text>
      </View>
      <View style={{ height: 100 }} />
    </KeyboardAwareScrollView>
  );
};
const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
  },
  image: {
    top: 0,
    left: 0,
    width: 528,
    height: 882,
    position: "absolute",
  },
  image_imageStyle: {
    opacity: 0.21,
  },
  placeholder1: {
    borderBottomWidth: 2,
    borderBottomColor: "rgba(173,185,225,1)",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 42,
    width: 257,
    marginTop: 415,
    marginLeft: 156,
  },
  placeholder: {
    borderBottomWidth: 2,
    borderBottomColor: "rgba(173,185,225,1)",
    top: 344,
    left: 156,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 42,
    width: 257,
  },
  button: {
    top: 561,
    left: 156,
    width: 257,
    height: 50,
    position: "absolute",
  },
  loremIpsum: {
    top: 203,
    left: 162,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
  },
  pinpoint: {
    top: 154,
    left: 221,
    position: "absolute",
    fontFamily: "Aldrich-Regular",
    color: "#121212",
    fontSize: 30,
  },
  imageStack: {
    width: 528,
    height: 882,
    marginTop: -15,
    marginLeft: -97,
  },
});
