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
import * as firebase from "firebase";

const OTPVerification = ({ navigation }) => {
  const verify = () => {
    let recaptch = new firebase.auth.RecaptchaVerifier("recaptcha", {
      size: "invisible",
      callback: function (response) {
        onSignInSubmit();
      },
    });
    let number = +19162250594;
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptch)
      .then(function (e) {
        let code = prompt("Enter OTP number", "");
        if (code === null) return;

        e.confirm(code)
          .then(function (result) {
            console.log(result.user, "user");
          })
          .catch((error) => {
            console.log(error);
          });
      });
    navigation.navigate(DELIVERED);
  };

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text category="h1">OTPVerification</Text>
        <Button onPress={() => verify()}> VERIFY </Button>
      </Layout>
    </ApplicationProvider>
  );
};
export default OTPVerification;
