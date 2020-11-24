import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Platform,
  Dimensions,
  SafeAreaView,
} from "react-native";

import MapView, { Marker, AnimatedRegion } from "react-native-maps";
import { usePubNub } from "pubnub-react";
import * as Permissions from "expo-permissions";

const Geolocation = () => {
  //user permission
  const getPermission = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
  };

  const { width, height } = Dimensions.get("window");
  const pubnub = usePubNub();

  const ASPECT_RATIO = width / height;
  const LATITUDE = 37.78825;
  const LONGITUDE = -122.4324;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const [initialState, setInitialState] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    coordinate: new AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
  });

  //componentDidMount
  useEffect(() => {
    const { coordinate } = initialState;
    getPermission();
    const watchID = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const newCoordinate = {
          latitude,
          longitude,
        };

        if (Platform.OS === "android") {
          if (marker) {
            marker._component.animateMarkerToCoordinate(
              newCoordinate,
              500 // 500 is the duration to animate the marker
            );
          }
        } else {
          coordinate.timing(newCoordinate).start();
        }

        setInitialState({
          ...initialState,
          latitude,
          longitude,
        });
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 0,
      }
    );

    // componentWillUnmount
    return () => {
      navigator.geolocation.clearWatch(watchID);
    };
  }, []);

  //componentDidUpdate
  useEffect(() => {
    pubnub.publish({
      message: {
        latitude: initialState.latitude,
        longitude: initialState.longitude,
      },
      channel: "location",
    });
  }, [initialState]);

  // const watchLocation = () => {

  const getMapRegion = () => ({
    latitude: initialState.latitude,
    longitude: initialState.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showUserLocation
          followUserLocation
          loadingEnabled
          region={getMapRegion()}
        >
          <Marker.Animated
            ref={(marker) => {
              marker = marker;
            }}
            coordinate={initialState.coordinate}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};
export default Geolocation;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
