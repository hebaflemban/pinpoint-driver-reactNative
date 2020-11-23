import { combineReducers } from "redux";

import user from "./user";
import packages from "./packages";
export default combineReducers({ user, packages });
