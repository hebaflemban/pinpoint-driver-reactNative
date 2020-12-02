import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  container_: {
    flex: 1,
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
});
