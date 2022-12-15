import { createSlice } from "@reduxjs/toolkit";
import { LocalizationLanguagesEnum } from "@route/common/enum";
import { IInitialState } from "./common";
import { userReducer } from "./reducer";

const initialState: IInitialState = {
  user: {
    name: null,
    password: null,
    email: null,
    id: null,
    isOnline: false,
    socketID: null,
  },
  isLoading: false,
  currentLanguage: LocalizationLanguagesEnum.ENGLISH,
};

const { reducer } = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
  extraReducers: userReducer,
});

export { reducer };
