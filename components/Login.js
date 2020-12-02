import React, { useState } from "react";
import { login } from "../redux/actions";
import { connect } from "react-redux";
import { Button, Icon } from "@ui-kitten/components";
import { styles } from "./styles/loginStyles";
import { View, ImageBackground, TextInput, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
