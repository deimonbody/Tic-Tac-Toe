import { createSlice } from "@reduxjs/toolkit";

import { RoomStatusEnum } from "@route/common/enum";

import { IInitialState } from "./common";
import { gameReducer } from "./reducer";

const initialState: IInitialState = {
  roomId: null,
  game: [],
  isGameStarted: false,
  roomStatus: RoomStatusEnum.WAITING,
  users: [],
  title: "",
};

const { reducer } = createSlice({
  name: "gameReducer",
  initialState,
  reducers: {},
  extraReducers: gameReducer,
});

export { reducer };
