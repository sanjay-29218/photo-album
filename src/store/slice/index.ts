import { combineReducers } from "@reduxjs/toolkit";
import { photoReducer } from "./photoSlice";

export const RootReducer = combineReducers({
  photo: photoReducer,
});
