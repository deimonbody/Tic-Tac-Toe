import { createSlice } from "@reduxjs/toolkit";
import { RoomStatusEnum } from "@src/common/enum";
import { standartGameField } from "@src/common/variables";

import { IInitialState } from "./common";
import { gameReducer } from "./reducer";

const initialState: IInitialState = {
  roomId: null,
  game: [],
  isGameStarted: false,
  roomStatus: RoomStatusEnum.WAITING,
  users: [],
  title: "",
  gameField: standartGameField,
  isGameEnded: false,
};

const { reducer } = createSlice({
  name: "gameReducer",
  initialState,
  reducers: {},
  extraReducers: gameReducer,
});

export { reducer };
