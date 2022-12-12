import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user";

export const reducer = combineReducers({
  userReducer,
});

export const store = configureStore({
  reducer,
});
