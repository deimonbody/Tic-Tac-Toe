import { ActionReducerMapBuilder, isAnyOf } from "@reduxjs/toolkit";
import { RoomStatusEnum } from "@route/common/enum";
import { standartGameField } from "@route/common/variables";

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
      state.gameField = standartGameField;
      state.isGameEnded = false;
    })
    .addCase(gameActions.userMakeActions, (state, actions) => {
      const { game } = actions.payload.room;
      const indexOfChangedCell = state.gameField.findIndex(
        (cell) => cell.cellNum === game[game.length - 1].action.cellNum,
      );
      const { userRole } = game[game.length - 1].action;
      state.gameField[indexOfChangedCell].isBusy = true;
      state.gameField[indexOfChangedCell].userRole = userRole;
      state.game = game;
    })
    .addCase(gameActions.endGame, (state) => {
      state.isGameEnded = true;
      state.roomStatus = RoomStatusEnum.END;
    })
    .addCase(gameActions.userDisconected, (state, actions) => {
      const { users } = actions.payload.room;
      state.game = [];
      state.gameField = standartGameField;
      state.isGameEnded = false;
      state.isGameStarted = false;
      state.roomStatus = RoomStatusEnum.WAITING;
      state.users = users;
    })
    .addMatcher(
      isAnyOf(gameActions.joinedToRoom, gameActions.userLeavedGame),
      (state, actions) => {
        const { room } = actions.payload;
        state.roomId = room.id;
        state.game = room.game;
        state.roomStatus = room.status;
        if (!state.isGameEnded) {
          state.isGameStarted = room.users.length === 2;
        }
        state.users = room.users;
        state.title = room.title;
        state.isGameEnded = room.isGameEnded;
      },
    );
};
