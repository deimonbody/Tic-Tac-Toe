import { createSlice } from "@reduxjs/toolkit";

import { IInitialState } from "./common";
import { roomsReducer } from "./reducer";

const initialState: IInitialState = {
  rooms: [],
  isLoading: false,
};

const { reducer } = createSlice({
  name: "roomsReducer",
  initialState,
  reducers: {},
  extraReducers: roomsReducer,
});

export { reducer };
