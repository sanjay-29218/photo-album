import { combineReducers, combineSlices } from "@reduxjs/toolkit";
import { photoReducer } from "./photoSlice";

export const RootReducer = combineReducers({
  photo: photoReducer,
});
