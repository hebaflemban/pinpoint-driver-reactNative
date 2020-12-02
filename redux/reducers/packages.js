import { SET_PACKAGES, NEXT, VERIFY } from "../actions/types";
const initial = {
  packages: null,
  total: 0,
  verification: "",
};

export default (state = initial, { type, payload }) => {
  switch (type) {
    case SET_PACKAGES:
      console.log("from reducers", payload);
      return {
        packages: payload,
        total: payload.length,
        verification: "",
      };
    case VERIFY:
      return {
        ...state,
        verification: payload,
      };
    case NEXT:
      return {
        ...state,
        packages: packages.packages.filter(
          (package_) => package_.id !== payload
        ),
      };
    default:
      return state;
  }
};
