import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { Container } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { default as theme } from "./theme.json";

import RootNavigator from "./navigation";
import { Provider } from "react-redux";
import store from "./redux";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer initialRouteName="USER">
        <Container>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
            <RootNavigator />
          </ApplicationProvider>
        </Container>
      </NavigationContainer>
    </Provider>
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
