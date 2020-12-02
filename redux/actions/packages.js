import instance from "./instance";
import { SET_PACKAGES, NEXT, VERIFY } from "./types";

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

export const otpVerify = (id, code) => async (dispatch) => {
  try {
    const responce = await instance.post("shipments/verify/", { code, id });

    const message = responce.data;
    dispatch({
      type: VERIFY,
      payload: message,
    });
  } catch (error) {
    console.error("Error verifying", error);
  }
};

export const resendOtp = (id) => async () => {
  try {
    await instance.get("shipments/resend/", { id: id });
  } catch (error) {
    console.error("Error resending otp code", error);
  }
};

export const updateStatus = (package_id, status_id) => async () => {
  await instance.put("shipments/status/update/", {
    id: package_id,
    status: status_id,
  });
};
