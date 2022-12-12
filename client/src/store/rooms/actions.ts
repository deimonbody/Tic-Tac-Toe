import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { loadRooms } from "@route/helper/api.helper";

import { RoomActions } from "./common";

export const loadRoomsAction = createAsyncThunk(
  RoomActions.LOAD_ROOMS,
  async () => {
    try {
      const rooms = await loadRooms();
      return rooms;
    } catch (err) {
      throw new Error(err as string);
    }
  },
);
export const addNewRoom = createAction(RoomActions.ADD_NEW_ROOM, (data) => {
  const { newRoom } = data;
  return { payload: newRoom };
});
export const setRoomsLoading = createAction(RoomActions.SET_ROOMS_LOADING);
