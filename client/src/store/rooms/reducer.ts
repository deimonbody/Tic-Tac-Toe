import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { logoutUser } from "../user/actions";
import * as roomsActions from "./actions";
import { IInitialState } from "./common";

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
    })
    .addCase(roomsActions.updateRoomsList, (state, actions) => {
      state.rooms = actions.payload;
    })
    .addCase(logoutUser, (state) => {
      state.isLoading = false;
      state.rooms = [];
    });
};
