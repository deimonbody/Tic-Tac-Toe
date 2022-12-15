import { createSlice } from "@reduxjs/toolkit";
import { LocalizationLanguagesEnum } from "@route/common/enum";
import { defaultSrings } from "@route/common/variables";

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
  strings: defaultSrings,
  currentLanguage: LocalizationLanguagesEnum.ENGLISH,
};

const { reducer } = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
  extraReducers: userReducer,
});

export { reducer };
