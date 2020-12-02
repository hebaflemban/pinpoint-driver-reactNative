import React from "react";
import { styles } from "./styles/homeStyles";
import { View, TouchableOpacity, ImageBackground, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LOGIN } from "../navigation/screens";

function Home({ navigation }) {
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
export default Home;
