import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { LocalizationLanguagesEnum } from "@src/common/enum";
import { loginUser } from "@src/helper/api.helper";

import { ISetUserProps, UserActions } from "./common";

export const setUser = createAsyncThunk(
  UserActions.SET_USER,
  async ({ email, password }: ISetUserProps) => {
    try {
      const user = await loginUser({ email, password });
      return user;
    } catch (err) {
      throw new Error(err as string);
    }
  },
);

export const setLoading = createAction(UserActions.SET_USER_LOADING);
export const setUserSocketID = createAction(
  UserActions.SET_USER_SOCKET_ID,
  (data) => {
    const { socketID } = data;
    return {
      payload: socketID,
    };
  },
);
export const changeLanguage = createAction(
  UserActions.CHANGE_LANGUAGE,
  (code: LocalizationLanguagesEnum) => ({ payload: code }),
);
export const logoutUser = createAction(UserActions.LOGOUT_USER);
