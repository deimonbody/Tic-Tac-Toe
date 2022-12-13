import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { roomsReducer } from "./rooms";
import { userReducer } from "./user";

export const reducer = combineReducers({
  userReducer,
  roomsReducer,
});

export const store = configureStore({
  reducer,
});
