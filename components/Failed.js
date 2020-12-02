import React from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from "./styles/failedStyles";

function Failed({ modalVisible, setModalVisible }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.rectStack_}>
        <View style={styles.rect_}></View>
        <ImageBackground
          source={require("../assets/images/failed.png")}
          resizeMode="contain"
          style={styles.image4_}
        >
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.button1_}
          >
            <Icon name="add" style={styles.icon1_}></Icon>
          </TouchableOpacity>
          <Text style={styles.otpVerified_}>OTP Provided is not correct!</Text>
        </ImageBackground>
      </View>
    </Modal>
  );
}
export default Failed;
