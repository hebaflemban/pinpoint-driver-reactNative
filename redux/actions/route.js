import instance from "./instance";
import axios from "axios";
import { SET_ROUTE } from "./types";

export const setRoute = () => async (dispatch) => {
  try {
    const responce = await instance.get("my-journey/");

    const route = responce.data.packages;
    dispatch({
      type: SET_ROUTE,
      payload: route,
    });
  } catch (error) {
    console.error("Error while fetching route", error);
  }
};
