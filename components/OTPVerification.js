import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  TextInput,
  SafeAreaView,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { DELIVERED, FAILD, PACKAGEINFO } from "../navigation/screens";
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

function Untitled4({
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

export default connect(mapStatesToProps, mapDispatchToProps)(Untitled4);

const styles = StyleSheet.create({
  codeFiledRoot: { marginTop: 0 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(173,185,225,1)",
  },
  button1: {
    top: 96,
    left: 95,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 100,
    transform: [
      {
        rotate: "43.00deg",
      },
    ],
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 8,
    marginLeft: 8,
  },
  image1: {
    top: 0,
    left: 41,
    width: 502,
    height: 358,
    position: "absolute",
    transform: [
      {
        rotate: "-169.00deg",
      },
    ],
  },
  image1_imageStyle: {
    opacity: 0.1,
  },
  verification1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 156,
    marginLeft: 140,
  },
  group2: {
    top: 277,
    left: 80,
    width: 375,
    height: 672,
    position: "absolute",
  },
  group3: {
    width: 375,
    height: 733,
  },
  rect1: {
    width: 375,
    height: 733,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
  },
  rect2: {
    width: 159,
    height: 129,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 216,
  },
  button2: {
    width: 243,
    height: 49,
    backgroundColor: "rgba(126,140,193,1)",
    borderRadius: 30,
    marginTop: 358,
    marginLeft: 67,
  },
  verify: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 14,
    marginLeft: 99,
  },
  group4: {
    top: 251,
    left: 168,
    width: 236,
    height: 69,
    position: "absolute",
    flexDirection: "row",
  },
  placeholder1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 69,
    width: 48,
    backgroundColor: "rgba(87,100,162,1)",
    borderRadius: 1,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 2,
    textAlign: "center",
    fontSize: 40,
    margin: 10,
  },
  placeholder2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 69,
    width: 48,
    backgroundColor: "rgba(87,100,162,1)",
    borderRadius: 11,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 2,
    textAlign: "center",
    fontSize: 40,
    marginLeft: 15,
  },
  placeholder3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 69,
    width: 48,
    backgroundColor: "rgba(87,100,162,1)",
    borderRadius: 11,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 2,
    textAlign: "center",
    fontSize: 40,
    marginLeft: 14,
  },
  placeholder4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 69,
    width: 48,
    backgroundColor: "rgba(87,100,162,1)",
    borderRadius: 11,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 2,
    textAlign: "center",
    fontSize: 40,
    marginLeft: 15,
  },
  placeholder1Row: {
    height: 69,
    flexDirection: "row",
    flex: 1,
  },
  image2: {
    top: 286,
    left: 0,
    width: 536,
    height: 484,
    position: "absolute",
  },
  button1Stack: {
    width: 543,
    height: 949,
    marginTop: -56,
    marginLeft: -80,
  },
  resend: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    marginTop: 7,
    marginLeft: 115,
  },
  rect_: {
    top: 78,
    left: 0,
    width: 342,
    height: 388,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(51,51,51,1)",
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  image4_: {
    top: 0,
    left: 5,
    width: 357,
    height: 504,
    position: "absolute",
  },
  button1_: {
    width: 40,
    height: 40,
    borderRadius: 100,
    transform: [
      {
        rotate: "43.00deg",
      },
    ],
    marginTop: 86,
    marginLeft: 4,
  },
  icon1_: {
    color: "rgba(155,155,155,1)",
    fontSize: 24,
    marginTop: 8,
    marginLeft: 8,
  },
  otpVerified_: {
    fontFamily: "roboto-700",
    color: "rgba(126,140,193,1)",
    fontSize: 20,
    marginTop: 290,
    marginLeft: 39,
  },
  rectStack_: {
    width: 362,
    height: 504,
    marginTop: 128,
    marginLeft: 18,
  },
  rect__: {
    width: 289,
    height: 390,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(51,51,51,1)",
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    marginLeft: 43,
  },
  image4__: {
    top: 0,
    left: 9,
    width: 263,
    height: 370,
    position: "absolute",
  },
  otpVerified__: {
    fontFamily: "roboto-700",
    color: "rgba(126,140,193,1)",
    fontSize: 20,
    marginTop: 329,
  },
  button1__: {
    top: 9,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 100,
    transform: [
      {
        rotate: "43.00deg",
      },
    ],
  },
  icon1__: {
    color: "rgba(155,155,155,1)",
    fontSize: 24,
    marginTop: 8,
    marginLeft: 8,
  },
  image4Stack__: {
    width: 272,
    height: 370,
    marginTop: 4,
    marginLeft: 10,
  },
});
