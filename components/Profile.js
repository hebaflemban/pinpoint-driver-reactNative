import React from "react";
import { connect } from "react-redux";
import { styles } from "./styles/profileStyles";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { PACKAGEINFO, ROUTE } from "../navigation/screens";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Profile({ navigation, packages }) {
  const package_ = packages.packages[0];
  const done = packages.packages.filter((package_) => package_.status.id === 3);
  const total = packages.total;
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <MaterialCommunityIconsIcon
          name="home"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
        <View style={styles.rect11Stack}>
          <View style={styles.rect11}></View>
          <View style={styles.rect10}>
            <View style={styles.dailyStats1Stack}>
              <Text style={styles.dailyStats1}>Daily stats</Text>
            </View>
            <View style={styles.hiHeba2StackRow}>
              <View style={styles.hiHeba2Stack}>
                <Text style={styles.hiHeba2}>Hi Heba</Text>
              </View>
              <Text style={styles.totalOf9}>0</Text>
            </View>
          </View>
          <View style={styles.rect9}>
            <View style={styles.group}>
              <Text style={styles.todaysJourney}>Today&#39;s Journey</Text>
              <View style={styles.rectStack}>
                <View style={styles.rect}>
                  <View style={styles.icon2Row}>
                    <EntypoIcon
                      name="location-pin"
                      style={styles.icon2}
                    ></EntypoIcon>
                    <Text style={styles.hittin}>{package_.region.name}</Text>
                    <Text style={styles.hittin1}>
                      {" "}
                      {package_.preferred_time.time}
                    </Text>
                  </View>
                  <Text style={styles.totalOf1}>{total} Packages</Text>
                </View>
                {done.length !== 0 ? (
                  <TouchableOpacity style={styles.button}>
                    <Text
                      style={styles.start}
                      onPress={() => navigation.navigate(PACKAGEINFO)}
                    >
                      START
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <IoniconsIcon
                    name="ios-checkmark-circle"
                    style={styles.icon3}
                  ></IoniconsIcon>
                )}
              </View>
            </View>
            <View style={styles.text5Stack}></View>
            <View style={styles.rect21}></View>
            <Text style={styles.dailyAvarage}>
              Daily Avarage of {done.length !== 0 ? 11.5 : 10.2} packages
            </Text>
            <View style={styles.rect20}></View>
            <View style={styles.dailyStatsRow}>
              <Text style={styles.dailyStats}>Daily stats</Text>
            </View>
            <View style={styles.rect12Row}>
              <View style={styles.rect12}>
                <Text style={styles.totalOf12}>
                  {done.length !== 0 ? "00" : 1.2}
                </Text>
                <Text style={styles.hours1}>Hours</Text>
              </View>
              <View style={styles.rect13}>
                <Text style={styles.totalOf3}>
                  {done.length !== 0 ? "00" : 37}
                </Text>
                <Text style={styles.miles1}>km</Text>
              </View>
              <View style={styles.rect14}>
                <Text style={styles.totalOf11}>
                  {done.length !== 0 ? 0 : 5}
                </Text>
                <Text style={styles.packages1}>Packages</Text>
              </View>
            </View>
            <View style={styles.group3}>
              <Text style={styles.weeklyStats}>Weekly stats</Text>
              <View style={styles.rect15Row}>
                <View style={styles.rect15}>
                  <Text style={styles.totalOf13}>
                    {done.length !== 0 ? 12.5 : 13.7}
                  </Text>
                  <Text style={styles.hours2}>Hours</Text>
                </View>
                <View style={styles.rect16}>
                  <Text style={styles.totalOf14}>
                    {done.length !== 0 ? 427 : 454}
                  </Text>
                  <Text style={styles.miles2}>km</Text>
                </View>
                <View style={styles.rect17}>
                  <Text style={styles.totalOf15}>
                    {done.length !== 0 ? 46 : 51}
                  </Text>
                  <Text style={styles.packages2}>Packages</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const mapStatesToProps = ({ packages }) => ({
  packages,
});

export default connect(mapStatesToProps)(Profile);
