import React, { useState } from "react";
import { connect } from "react-redux";

import { OTPVERIFICATION, PROFILE, USER } from "../navigation/screens";
import { updateStatus, nextPackage, setPackages } from "../redux/actions";

// stylying
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

const PackageInfo = ({
  navigation,
  packages,
  updateStatus,
  nextPackage,
  setPackages,
}) => {
  const [count, setCount] = useState(1);
  const package_ = packages.packages.filter(
    (package_) => package_.order_in_journey === count
  )[0];
  const total = packages.total;

  const openMap = () => {
    console.log("open directions");
    Linking.openURL(package_.location);
  };

  const handleDelivering = () => {
    navigation.navigate(OTPVERIFICATION, {
      package_id: package_.id,
    });
  };

  const handleFailing = () => {
    updateStatus(package_.id, 4);
    setPackages();
  };

  const end = () => {
    navigation.navigate(USER, { screen: PROFILE });
  };

  return (
    <View style={styles.container}>
      <View style={styles.group2Stack}>
        <View style={styles.group2}>
          <View style={styles.imageStack}>
            <Image
              source={require("../assets/images/4.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Image
              source={require("../assets/images/header.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </View>
        </View>
        <View style={styles.rect}>
          <Text style={styles.packageDetails}>Package Details</Text>
          {package_.status.id === 4 || package_.status.id === 5 ? (
            <View
              style={package_.status.id === 5 ? styles.rect2 : styles.rect3}
            >
              <Text style={styles.delivered}>
                {package_.status.id === 4 ? "Failed" : "Delivered"}
              </Text>
            </View>
          ) : null}
          <Text
            style={
              package_.status.id === 2
                ? styles.customerInformation
                : styles.customerInformationWStatus
            }
          >
            Customer Information
          </Text>
          <View style={styles.group1}>
            <Text style={styles.cutomerName}>{package_.receiver_name}</Text>
          </View>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${package_.receiver_phone}`)}
          >
            <View style={styles.icon2Row}>
              <FeatherIcon name="phone" style={styles.icon2}></FeatherIcon>
              <Text style={styles.cutomerName1}>{package_.receiver_phone}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openMap()}>
            <View style={styles.icon3Row}>
              <FeatherIcon name="map-pin" style={styles.icon3}></FeatherIcon>
              <Text style={styles.cutomerName2}>Open in Google Maps</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.expected1}>Expected Delivery Time</Text>
          <Text style={styles.cutomerName3}>
            {package_.preferred_time.time}
          </Text>
          <Text style={styles.package2}>Delivery Instructions</Text>
          <Text style={styles.cutomerName4}>{package_.place_description}</Text>

          {count === total &&
          (package_.status.id === 4 || package_.status.id === 5) ? (
            <TouchableOpacity style={styles.button5} onPress={() => end()}>
              <Text style={styles.endJourny}>End Journy</Text>
            </TouchableOpacity>
          ) : (
            <>
              {package_.status.id === 5 || package_.status.id === 4 ? (
                <View style={styles.nextPackageRow}>
                  <Text style={styles.nextPackage}>Next Package</Text>
                  <TouchableOpacity
                    onPress={() => setCount((count) => count + 1)}
                    style={styles.button4}
                  >
                    <MaterialIconsIcon
                      name="arrow-back"
                      style={styles.icon5}
                    ></MaterialIconsIcon>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.button3Row}>
                  <TouchableOpacity
                    style={styles.button3}
                    onPress={() => handleFailing()}
                  >
                    <EntypoIcon name="cross" style={styles.icon4}></EntypoIcon>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button2}
                    onPress={() => handleDelivering()}
                  >
                    <Text style={styles.complete}>Complete</Text>
                  </TouchableOpacity>
                </View>
              )}
            </>
          )}
        </View>
        <Text style={styles.package1}>
          Package {package_.order_in_journey}/{total}
        </Text>
        <Image
          source={require("../assets/images/header2.png")}
          resizeMode="cover"
          style={styles.image3}
        ></Image>
        <TouchableOpacity
          onPress={() => navigation.navigate(PROFILE)}
          style={styles.button1}
        >
          <MaterialIconsIcon
            name="arrow-back"
            style={styles.icon1}
          ></MaterialIconsIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const mapStatesToProps = ({ packages }) => ({
  packages,
});
const mapDispatchToProps = {
  updateStatus,
  nextPackage,
  setPackages,
};

export default connect(mapStatesToProps, mapDispatchToProps)(PackageInfo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
  },
  group2: {
    top: 0,
    left: 0,
    width: 412,
    height: 375,
    position: "absolute",
    opacity: 0.7,
  },
  image: {
    top: 0,
    left: 0,
    width: 412,
    height: 233,
    position: "absolute",
    borderRadius: 91,
  },
  image2: {
    top: 149,
    left: 166,
    width: 229,
    height: 226,
    position: "absolute",
  },
  imageStack: {
    width: 412,
    height: 375,
  },
  rect: {
    top: 232,
    width: 375,
    height: 595,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    left: 18,
  },
  packageDetails: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 30,
    marginTop: 33,
    marginLeft: 34,
  },
  customerInformation: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 16,
    marginTop: 50,
    marginLeft: 34,
  },
  customerInformationWStatus: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 16,
    marginTop: 11,
    marginLeft: 35,
  },
  group1: {
    width: 136,
    height: 24,
    marginTop: 16,
    marginLeft: 35,
  },
  cutomerName: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
  },
  icon2: {
    color: "rgba(126,140,193,1)",
    fontSize: 25,
    height: 25,
    width: 25,
  },
  cutomerName1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 18,
    width: 200,
  },
  icon2Row: {
    height: 25,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 36,
    marginRight: 195,
  },
  icon3: {
    color: "rgba(126,140,193,1)",
    fontSize: 25,
    height: 25,
    width: 25,
  },
  cutomerName2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 19,
    marginLeft: 18,
    width: 250,
    height: 50,
  },
  icon3Row: {
    height: 25,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 35,
    marginRight: 195,
  },
  expected1: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 16,
    marginTop: 30,
    marginLeft: 36,
  },
  cutomerName3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    height: 24,
    width: 135,
    marginTop: 11,
    marginLeft: 36,
  },
  package2: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 16,
    marginTop: 31,
    marginLeft: 36,
  },
  cutomerName4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 11,
    marginLeft: 35,
  },

  button3: {
    width: 51,
    height: 49,
    backgroundColor: "rgba(211,221,246,1)",
    borderRadius: 30,
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 46,
    width: 40,
    marginTop: 1,
    marginLeft: 6,
  },
  button2: {
    width: 243,
    height: 49,
    backgroundColor: "rgba(126,140,193,1)",
    borderRadius: 30,
    marginLeft: 8,
  },
  complete: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 14,
    marginLeft: 82,
  },
  button3Row: {
    height: 49,
    flexDirection: "row",
    marginTop: 65,
    marginLeft: 33,
    marginRight: 40,
  },

  package1: {
    top: 138,
    left: 120,
    position: "absolute",
    fontFamily: "Aldrich-Regular",
    color: "#121212",
    fontSize: 30,
  },
  image3: {
    top: 60,
    left: 328,
    width: 38,
    height: 37,
    position: "absolute",
    borderRadius: 100,
  },
  button1: {
    top: 56,
    left: 32,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 100,
    justifyContent: "center",
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center",
  },
  group2Stack: {
    width: 412,
    height: 827,
    marginTop: -16,
    marginLeft: -17,
  },
  rect2: {
    width: 107,
    height: 33,
    backgroundColor: "rgba(230,248,167,1)",

    borderRadius: 12,
    marginTop: 6,
    marginLeft: 35,
  },
  rect3: {
    width: 107,
    height: 33,
    backgroundColor: "rgba(255,207,192,1)",
    borderRadius: 12,
    marginTop: 6,
    marginLeft: 35,
  },
  delivered: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 5,
    marginLeft: 16,
  },
  button4: {
    width: 40,
    height: 40,
    borderRadius: 100,
    transform: [
      {
        rotate: "178.00deg",
      },
    ],
    justifyContent: "center",
    marginLeft: 1,
  },
  icon5: {
    color: "rgba(126,140,193,1)",
    fontSize: 29,
    alignSelf: "center",
  },
  nextPackage: {
    fontFamily: "roboto-700",
    color: "rgba(126,140,193,1)",
    fontSize: 22,
    marginTop: 6,
  },
  nextPackageRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 65,
    marginLeft: 172,
    marginRight: 25,
  },
  endJourny: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 14,
    marginLeft: 78,
  },
  button5: {
    width: 243,
    height: 49,
    backgroundColor: "rgba(126,140,193,1)",
    borderRadius: 30,
    marginTop: 68,
    marginLeft: 66,
  },
});
