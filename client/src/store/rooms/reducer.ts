import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IInitialState } from "./common";
import * as roomsActions from "./actions";

export const roomsReducer = (
  builder: ActionReducerMapBuilder<IInitialState>,
) => {
  builder
    .addCase(roomsActions.loadRoomsAction.fulfilled, (state, actions) => {
      state.rooms = actions.payload;
      state.isLoading = false;
    })
    .addCase(roomsActions.setRoomsLoading, (state) => {
      state.isLoading = true;
    })
    .addCase(roomsActions.addNewRoom, (state, actions) => {
      state.rooms.push(actions.payload);
    });
};
