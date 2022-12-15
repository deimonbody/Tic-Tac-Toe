import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { gameReducer } from "./game";
import { roomsReducer } from "./rooms";
import { userReducer } from "./user";

export const reducer = combineReducers({
  userReducer,
  roomsReducer,
  gameReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
