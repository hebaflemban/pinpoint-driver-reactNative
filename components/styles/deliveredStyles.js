import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect1__: {
    width: 303,
    height: 385,
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
    marginTop: 185,
    marginLeft: 36,
  },
  image2__: {
    top: 33,
    left: 34,
    width: 218,
    height: 261,
    position: "absolute",
  },
  button1__: {
    top: 0,
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
  image2Stack__: {
    width: 252,
    height: 294,
    marginTop: 13,
    marginLeft: 8,
  },
  otpVerified__: {
    fontFamily: "roboto-700",
    color: "rgba(126,140,193,1)",
    fontSize: 40,
    marginTop: 14,
    marginLeft: 19,
  },
});
