import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LOGIN } from "../navigation/screens";

function Untitled7({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/homebg.png")}
        resizeMode="contain"
        style={styles.image2}
        imageStyle={styles.image2_imageStyle}
      >
        <Text style={styles.pinpoint}>Pinpoint</Text>
        <Text style={styles.loremIpsum}>
          Improving your delivery experience
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate(LOGIN)}>
          <Icon name="chevron-double-right" style={styles.icon}></Icon>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
  },
  image2: {
    width: 521,
    height: 917,
    marginLeft: -98,
  },
  image2_imageStyle: {},
  pinpoint: {
    fontFamily: "Aldrich-Regular",
    color: "#121212",
    fontSize: 30,
    marginTop: 139,
    marginLeft: 222,
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 20,
    marginLeft: 163,
  },
  icon: {
    color: "rgba(173,185,225,1)",
    fontSize: 72,
    height: 78,
    width: 72,
    marginTop: 492,
    marginLeft: 249,
  },
});

export default Untitled7;
