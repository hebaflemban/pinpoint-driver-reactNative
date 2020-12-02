import React from "react";
import { Text, Button } from "@ui-kitten/components";
import { logout } from "../redux/actions";
import { connect } from "react-redux";
import { LOGIN, BOTTOMTAB } from "../navigation/screens";

const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesign);

import { AntDesign } from "@expo/vector-icons";
import {
  Image,
  View,
  Dimensions,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const circle_size = 100;
const { width, height } = Dimensions.get("window");

const Circle = ({ onPress, animatedValue }) => {
  const inputRange = [0, 0.2, 0.5, 0.5, 1];
  const containerBg = animatedValue.interpolate({
    inputRange,
    outputRange: ["white", "white", "white", "#ADB9E1", "#ADB9E1"],
  });
  console.log(containerBg._config.outputRange);
  const circleBg = animatedValue.interpolate({
    inputRange,
    outputRange: ["#ADB9E1", "#ADB9E1", "white", "white", "white"],
  });

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        styles.circleContainer,
        {
          backgroundColor: containerBg,
        },
      ]}
    >
      <Animated.View
        style={[
          {
            transform: [
              {
                translateX: animatedValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ["0%", "50%", "100%"],
                }),
              },
            ],
          },
        ]}
      >
        <Image
          source={require("/Users/Heba/Desktop/CODED/final-capstone/pinpoint-2/assets/home2.png")}
          resizeMode="cover"
          style={{
            width: width,
            height: height,
          }}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: circleBg,
            transform: [
              {
                perspective: 400,
              },
              {
                rotateY: animatedValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ["0deg", "-90deg", "-180deg"],
                }),
              },
              {
                scale: animatedValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 8, 1],
                }),
              },
              {
                translateX: animatedValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ["0%", "50%", "0%"],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity onPress={onPress}>
          <View style={[styles.circle, styles.circleButton]}>
            <AntDesign name="arrowright" size={28} color={"white"} />
          </View>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const Home = ({ navigation }) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const fadeAnimation = React.useRef(new Animated.Value(0)).current;

  const [index, setIndex] = React.useState(0);
  const fadeOut = () =>
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    });

  const animation = (toValue) =>
    Animated.timing(animatedValue, {
      toValue,
      duration: 2000,
      useNativeDriver: false,
    });
  const onPress = () => {
    setIndex(index === 1 ? 0 : 1);
    animation(index === 1 ? 0 : 1).start();
    fadeOut().start();
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Circle onPress={onPress} animatedValue={animatedValue} />
    </View>
  );

  // const animatedValue = React.useRef(new Animated.Value(0)).current;
  // const animatedValue2 = React.useRef(new Animated.Value(0)).current;

  // const onPress = () => {
  //   animatedValue.setValue(0);
  //   animatedValue2.setValue(0);
  //   animate((index + 1) % colors.length).start();
  //   setIndex((index + 1) % colors.length);
  //   navigation.navigate(BOTTOMTAB, { screen: LOGIN });
  // };

  // return (
  //   <View style={{ width: width, height: height }}>
  //     <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
  // <Image
  //   source={require("/Users/Heba/Desktop/CODED/final-capstone/pinpoint-2/assets/home2.png")}
  //   resizeMode="cover"
  //   style={{
  //     width: width,
  //     height: height,
  //     position: "absolute",
  //   }}
  //       />
  //     </View>
  // <View
  //   style={{
  //     position: "absolute",
  //     bottom: "10%",
  //     left: 40,
  //     right: 40,
  //   }}
  // >
  //       <Text
  //         style={{
  //           color: "gray",
  //           textAlign: "center",
  //         }}
  //       ></Text>

  //       <Text
  //         style={{
  //           textAlign: "center",
  //           marginTop: 9,
  //           color: "grey",
  //         }}
  //       ></Text>

  //       <Button
  //         onPress={() => navigation.navigate(BOTTOMTAB, { screen: LOGIN })}
  //         style={{
  //           marginBottom: 30,
  //         }}
  //       >
  //         {" "}
  //         Login
  //       </Button>
  //     </View>
  //   </View>
  // );
};
const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    justifyContent: "center",
  },
  circleContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 8,
    paddingBottom: 100,
    backgroundColor: "white",
  },
  circle: {
    backgroundColor: "#ADB9E1",
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  circleButton: {
    // height: 100,
    // width: 100,
    // borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});
