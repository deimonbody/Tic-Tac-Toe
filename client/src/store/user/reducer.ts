import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IInitialState } from "./common";
import * as userActions from "./actions";

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
    });
};
