import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { roomsReducer } from "./rooms";

export const reducer = combineReducers({
  userReducer,
  roomsReducer,
});

export const store = configureStore({
  reducer,
});
