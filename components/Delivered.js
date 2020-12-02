import React from "react";
import { connect } from "react-redux";
import { styles } from "./styles/deliveredStyles";
import { View, Image, TouchableOpacity, Text, Modal } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { PACKAGEINFO } from "../navigation/screens";
import { setPackages } from "../redux/actions";

const Delivered = ({
  deliveredVisible,
  setDeliveredVisible,
  navigation,
  setPackages,
}) => {
  const handleClose = () => {
    setPackages();
    setDeliveredVisible(!deliveredVisible);
    navigation.navigate(PACKAGEINFO);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={deliveredVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.rect1__}>
        <View style={styles.image2Stack__}>
          <Image
            source={require("../assets/images/delivered1.png")}
            resizeMode="contain"
            style={styles.image2__}
          ></Image>
          <TouchableOpacity
            onPress={() => handleClose()}
            style={styles.button1__}
          >
            <Icon name="add" style={styles.icon1__}></Icon>
          </TouchableOpacity>
        </View>
        <Text style={styles.otpVerified__}>OTP VERIFIED!</Text>
      </View>
    </Modal>
  );
};
const mapDispatchToProps = {
  setPackages,
};

export default connect(null, mapDispatchToProps)(Delivered);
