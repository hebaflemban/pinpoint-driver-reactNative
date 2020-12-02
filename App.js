import React, { useEffect } from "react";
import { Container } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { default as theme } from "./theme.json";
import { Provider } from "react-redux";
import { StyleSheet } from "react-native";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import RootNavigator from "./navigation";
import store from "./redux";
import HOME from "./navigation/screens";
import * as Font from "expo-font";

const pubnub = new PubNub({
  publishKey: "pub-c-bc6df04b-ff73-421b-959b-99d804b1acf0",
  subscribeKey: "sub-c-23d7f202-2de6-11eb-9713-12bae088af96",
});

export default function App() {
  useEffect(async () => {
    await Font.loadAsync({
      "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "Aldrich-Regular": require("./assets/fonts/Aldrich-Regular.ttf"),
      "roboto-700": require("./assets/fonts/roboto-700.ttf"),
      "average-sans-regular": require("./assets/fonts/average-sans-regular.ttf"),
    });
  }, []);
  return (
    <PubNubProvider client={pubnub}>
      <Provider store={store}>
        <NavigationContainer initialRouteName={HOME}>
          <Container>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
              <RootNavigator />
            </ApplicationProvider>
          </Container>
        </NavigationContainer>
      </Provider>
    </PubNubProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
