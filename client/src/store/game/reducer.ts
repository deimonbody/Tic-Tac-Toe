import { ActionReducerMapBuilder, isAnyOf } from "@reduxjs/toolkit";
import { RoomStatusEnum } from "@route/common/enum";

import * as gameActions from "./actions";
import { IInitialState } from "./common";

export const gameReducer = (
  builder: ActionReducerMapBuilder<IInitialState>,
) => {
  builder
    .addCase(gameActions.leaveGame, (state) => {
      state.roomId = null;
      state.game = [];
      state.roomStatus = RoomStatusEnum.WAITING;
      state.isGameStarted = false;
      state.users = [];
      state.title = "";
    })
    .addMatcher(
      isAnyOf(gameActions.joinedToRoom, gameActions.userLeavedGame),
      (state, actions) => {
        const { room } = actions.payload;
        state.roomId = room.id;
        state.game = room.game;
        state.roomStatus = room.status;
        state.isGameStarted = room.users.length === 2;
        state.users = room.users;
        state.title = room.title;
      },
    );
};
