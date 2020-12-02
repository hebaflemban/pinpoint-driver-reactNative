import React, { useState } from "react";
import { connect } from "react-redux";
import { styles } from "./styles/packageStyles";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { OTPVERIFICATION, PROFILE, USER } from "../navigation/screens";
import { updateStatus, setPackages } from "../redux/actions";

const PackageInfo = ({ navigation, packages, updateStatus, setPackages }) => {
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
    navigation.navigate(PROFILE);
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
  setPackages,
};

export default connect(mapStatesToProps, mapDispatchToProps)(PackageInfo);
