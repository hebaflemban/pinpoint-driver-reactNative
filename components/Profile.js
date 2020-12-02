import React from "react";
import { connect } from "react-redux";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
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
                      onPress={() =>
                        navigation.navigate(ROUTE, { screen: PACKAGEINFO })
                      }
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
            <Text style={styles.dailyAvarage}>Daily Avarage of 0 packages</Text>
            <View style={styles.rect20}></View>
            <View style={styles.dailyStatsRow}>
              <Text style={styles.dailyStats}>Daily stats</Text>
            </View>
            <View style={styles.rect12Row}>
              <View style={styles.rect12}>
                <Text style={styles.totalOf12}>0</Text>
                <Text style={styles.hours1}>Hours</Text>
              </View>
              <View style={styles.rect13}>
                <Text style={styles.totalOf3}>0</Text>
                <Text style={styles.miles1}>Miles</Text>
              </View>
              <View style={styles.rect14}>
                <Text style={styles.totalOf11}>0</Text>
                <Text style={styles.packages1}>Packages</Text>
              </View>
            </View>
            <View style={styles.group3}>
              <Text style={styles.weeklyStats}>Weekly stats</Text>
              <View style={styles.rect15Row}>
                <View style={styles.rect15}>
                  <Text style={styles.totalOf13}>0</Text>
                  <Text style={styles.hours2}>Hours</Text>
                </View>
                <View style={styles.rect16}>
                  <Text style={styles.totalOf14}>0</Text>
                  <Text style={styles.miles2}>Miles</Text>
                </View>
                <View style={styles.rect17}>
                  <Text style={styles.totalOf15}>0</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 32,
    marginLeft: 270,
    marginTop: 100,
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 217,
  },
  rect11: {
    left: 0,
    width: 375,
    height: 733,
    position: "absolute",
    backgroundColor: "rgba(126,140,193,1)",
    top: 136,
  },
  rect10: {
    top: 0,
    left: 284,
    width: 462,
    height: 233,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 80,
    flexDirection: "row",
  },
  dailyStats1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
  },
  dailyStats2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
  },
  dailyStats1Stack: {
    width: 85,
    height: 26,
    marginLeft: 6,
    marginTop: 110,
  },
  hiHeba2: {
    top: 2,
    left: 0,
    position: "absolute",
    fontFamily: "average-sans-regular",
    color: "rgba(173,185,225,1)",
    fontSize: 30,
  },
  totalOf8: {
    top: 0,
    left: 16,
    position: "absolute",
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
  },
  totalOf10: {
    top: 0,
    left: 14,
    position: "absolute",
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
  },
  hiHeba2Stack: {
    width: 102,
    height: 52,
  },
  totalOf9: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginLeft: 29,
  },
  hiHeba2StackRow: {
    height: 52,
    flexDirection: "row",
    flex: 1,
    marginRight: 174,
    marginLeft: 43,
    marginTop: 163,
  },
  rect9: {
    top: 233,
    left: 243,
    width: 416,
    height: 789,
    position: "absolute",
    backgroundColor: "rgba(126,140,193,1)",
    borderRadius: 80,
  },
  group: {
    width: 309,
    height: 201,
    marginTop: 17,
    marginLeft: 73,
  },
  todaysJourney: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
  },
  rect: {
    top: 0,
    left: 0,
    width: 309,
    height: 142,
    position: "absolute",
    borderRadius: 14,
    backgroundColor: "rgba(230, 230, 230,0.54)",
    shadowColor: "rgba(51,51,51,1)",
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 30,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    opacity: 0.85,
    height: 21,
    width: 18,
    marginTop: 4,
  },
  hittin: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
  },
  hittin1: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 180,
  },
  icon2Row: {
    height: 26,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 7,
    marginRight: 10,
  },
  totalOf1: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 9,
    marginLeft: 70,
  },
  button: {
    top: 124,
    left: 200,
    width: 98,
    height: 37,
    position: "absolute",
    backgroundColor: "rgba(92,98,114,1)",
    borderRadius: 12,
  },
  start: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 5,
    marginLeft: 23,
  },
  rectStack: {
    width: 309,
    height: 161,
    marginTop: 14,
  },
  text5: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
  },
  text6: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
  },
  text7: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
  },
  text8: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
  },
  text5Stack: {
    width: 3,
    height: 16,
    marginTop: 15,
    marginLeft: 233,
  },
  rect21: {
    width: 285,
    height: 1,
    backgroundColor: "#E6E6E6",
    opacity: 0.34,
    marginTop: 11,
    marginLeft: 86,
  },
  dailyAvarage: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 8,
    marginLeft: 111,
  },
  rect20: {
    width: 285,
    height: 1,
    backgroundColor: "#E6E6E6",
    opacity: 0.34,
    marginTop: 12,
    marginLeft: 86,
  },
  dailyStats: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
  },
  text: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
  },
  text2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
  },
  text3: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
  },
  text4: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
  },
  textStack: {
    width: 3,
    height: 16,
    marginLeft: 72,
  },
  dailyStatsRow: {
    height: 26,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 71,
    marginRight: 185,
  },
  rect12: {
    width: 78,
    height: 95,
    borderRadius: 14,
    backgroundColor: "rgba(230, 230, 230,0.54)",
    shadowColor: "rgba(51,51,51,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  totalOf12: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 9,
    marginLeft: 26,
  },
  hours1: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 4,
    marginLeft: 14,
  },
  rect13: {
    width: 78,
    height: 95,
    borderRadius: 14,
    backgroundColor: "rgba(230, 230, 230,0.54)",
    shadowColor: "rgba(51,51,51,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    marginLeft: 41,
  },
  totalOf3: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 13,
    marginLeft: 27,
  },
  miles1: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 17,
  },
  rect14: {
    width: 78,
    height: 95,
    borderRadius: 14,
    backgroundColor: "rgba(230, 230, 230,0.54)",
    shadowColor: "rgba(51,51,51,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    marginLeft: 37,
  },
  totalOf11: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 13,
    marginLeft: 27,
  },
  packages1: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 2,
  },
  rect12Row: {
    height: 95,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 75,
    marginRight: 29,
  },
  group3: {
    width: 318,
    height: 136,
    marginTop: 35,
    marginLeft: 71,
  },
  weeklyStats: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
  },
  rect15: {
    width: 78,
    height: 95,
    borderRadius: 14,
    backgroundColor: "rgba(230, 230, 230,0.54)",
    shadowColor: "rgba(51,51,51,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  totalOf13: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 13,
    marginLeft: 26,
  },
  hours2: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 14,
  },
  rect16: {
    width: 78,
    height: 95,
    borderRadius: 14,
    backgroundColor: "rgba(230, 230, 230,0.54)",
    shadowColor: "rgba(51,51,51,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    marginLeft: 41,
  },
  totalOf14: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 13,
    marginLeft: 26,
  },
  miles2: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 17,
  },
  rect17: {
    width: 78,
    height: 95,
    borderRadius: 14,
    backgroundColor: "rgba(230, 230, 230,0.54)",
    shadowColor: "rgba(51,51,51,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    marginLeft: 37,
  },
  totalOf15: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 13,
    marginLeft: 28,
  },
  packages2: {
    fontFamily: "average-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 2,
  },
  rect15Row: {
    height: 95,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 7,
    marginRight: -1,
  },
  rect11Stack: {
    width: 746,
    height: 1022,
    marginLeft: 5774,
  },
  iconRow: {
    height: 1022,
    flexDirection: "row",
    flex: 1,
    marginRight: -87,
    marginLeft: -6098,
    marginTop: -108,
  },
});
