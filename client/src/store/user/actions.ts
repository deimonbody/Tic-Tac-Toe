import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "@route/helper/api.helper";

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
