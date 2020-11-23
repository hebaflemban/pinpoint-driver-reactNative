import { SET_PACKAGES, NEXT } from "../actions/types";

export default (packages = null, { type, payload }) => {
  switch (type) {
    case SET_PACKAGES:
      return payload;
    case NEXT:
      return packages.filter((package_) => package_.id !== payload);
    default:
      return packages;
  }
};
