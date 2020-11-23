import instance from "./instance";
import { SET_PACKAGES, NEXT } from "./types";

export const setPackages = () => async (dispatch) => {
  try {
    const responce = await instance.get("my-journey/");

    const packages = responce.data.packages;
    dispatch({
      type: SET_PACKAGES,
      payload: packages,
    });
  } catch (error) {
    console.error("Error while fetching packages", error);
  }
};

export const updateStatus = (package_id, status_id) => async () => {
  await instance.put("shipments/status/update/", {
    id: package_id,
    status: status_id,
  });
};

export const nextPackage = (package_id) => (dispatch) => {
  dispatch({
    type: NEXT,
    payload: package_id,
  });
};
