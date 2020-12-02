import { AsyncStorage } from "react-native";
import decode from "jwt-decode";

import { SET_CURRENT_USER } from "./types";
import { instance } from "./instance";
import { PROFILE } from "../../navigation/screens";
import { setPackages } from "./packages";

export const login = (userData, navigation) => async (dispatch) => {
  console.log(userData);
  try {
    const res = await instance.post(`login/`, userData);

    const { access } = res.data;
    dispatch(setCurrentUser(access));
    navigation.navigate(PROFILE);
  } catch (error) {
    console.error("Error while logging in", error.responce);
  }
};

const setCurrentUser = (token) => async (dispatch) => {
  await setToken(token);
  dispatch({
    type: SET_CURRENT_USER,
    payload: token ? decode(token) : null,
  });
  token ? dispatch(setPackages()) : null;
};

const setToken = async (token) => {
  if (token) {
    await AsyncStorage.setItem("PinpointToken", token);
    instance.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.Authorization;
    await AsyncStorage.removeItem("PinpointToken");
  }
};

export const checkToken = () => async (dispatch) => {
  const currentTimeInSeconds = Date.now() / 1000;
  const token = await AsyncStorage.getItem("PinpointToken");

  if (token && decode(token).exp >= currentTimeInSeconds) {
    dispatch(setCurrentUser(token));
  } else setToken();
};

export const logout = () => setCurrentUser();
