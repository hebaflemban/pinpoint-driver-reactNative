import { SET_ROUTE } from "../actions/types";

export default (route = null, { type, payload }) => {
  switch (type) {
    case SET_ROUTE:
      return payload;
    default:
      return route;
  }
};
