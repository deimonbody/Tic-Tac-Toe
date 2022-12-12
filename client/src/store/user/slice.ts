import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./common";
import { userReducer } from "./reducer";

const initialState: IInitialState = {
  user: {
    name: null,
    password: null,
    emai: null,
    id: null,
  },
  isLoading: false,
};

const { reducer } = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
  extraReducers: userReducer,
});

export { reducer };
