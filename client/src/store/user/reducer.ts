import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

import * as userActions from "./actions";
import { IInitialState } from "./common";

export const userReducer = (
  builder: ActionReducerMapBuilder<IInitialState>,
) => {
  builder
    .addCase(userActions.setUser.fulfilled, (state, actions) => {
      state.user = actions.payload;
      state.isLoading = false;
    })
    .addCase(userActions.setLoading, (state) => {
      state.isLoading = true;
    })
    .addCase(userActions.setUserSocketID, (state, actions) => {
      state.user.socketID = actions.payload;
    })
    .addCase(userActions.changeLanguage, (state, actions) => {
      state.currentLanguage = actions.payload;
    });
};
