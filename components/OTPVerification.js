import React, { useState } from "react";
import { styles } from "./styles/otpStyles";
import {
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { PACKAGEINFO } from "../navigation/screens";
import { connect } from "react-redux";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import {
  otpVerify,
  resendOtp,
  updateStatus,
  setPackages,
} from "../redux/actions";
import Failed from "./Failed";
import Delivered from "./Delivered";
const CELL_COUNT = 4;

function OTPVerification({
  route,
  navigation,
  updateStatus,
  otpVerify,
  resendOtp,
  setPackages,
  msg,
}) {
  const { package_id } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [deliveredVisible, setDeliveredVisible] = useState(false);

  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const verify = async () => {
    await otpVerify(package_id, value);
    if (msg === "Success") {
      setDeliveredVisible(true);
      updateStatus(package_id, 5);
      setPackages();
    } else {
      setModalVisible(true);
    }
  };
  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: "white" }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <View style={styles.container}>
        {modalVisible ? (
          <Failed
            modalVisible
            setModalVisible={setModalVisible}
            navigation={navigation}
          />
        ) : null}
        {deliveredVisible ? (
          <Delivered
            deliveredVisible
            setDeliveredVisible={setDeliveredVisible}
            navigation={navigation}
          />
        ) : null}
        <View
          style={styles.button1Stack}
          onPress={() => navigation.navigate(PACKAGEINFO)}
        >
          <TouchableOpacity
            onPress={() => consolelog("clocked")}
            style={styles.button1}
          >
            <Icon name="add" style={styles.icon1}></Icon>
          </TouchableOpacity>
          <ImageBackground
            source={require("../assets/images/hiclipart.com.png")}
            resizeMode="contain"
            style={styles.image1}
            imageStyle={styles.image1_imageStyle}
          ></ImageBackground>
          <Text style={styles.verification1}>Delivery Verification</Text>
          <View style={styles.group2}>
            <View style={styles.group3}>
              <View style={styles.rect1}>
                <View style={styles.rect2}></View>
                <TouchableOpacity
                  style={styles.button2}
                  onPress={() => verify()}
                >
                  <Text style={styles.verify}>Verify</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => resendOtp(package_id)}>
                  <Text style={styles.resend}>resend verification code</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.group4}>
            <View style={styles.placeholder1Row}>
              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFiledRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                  <Text
                    key={index}
                    style={[styles.placeholder1, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}
                  >
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
            </View>
          </View>
          <Image
            source={require("../assets/images/Pinpoint2.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const mapDispatchToProps = {
  otpVerify,
  resendOtp,
  updateStatus,
  setPackages,
};
const mapStatesToProps = ({ packages }) => ({
  msg: packages.verification.msg,
});

export default connect(mapStatesToProps, mapDispatchToProps)(OTPVerification);
