import { combineReducers } from "@reduxjs/toolkit";
import siderBar from "./sider/sider";
import authorized from "./author/author";

export const rootReducer = combineReducers({
  siderBar,
  authorized
});
