import { createAction } from "@reduxjs/toolkit";

import { IRoom } from "@route/common/interfaces";

import { GameActions } from "./common";

export const joinedToRoom = createAction(
  GameActions.JOINED_TO_ROOM,
  ({ room }) => {
    return {
      payload: {
        room: room as IRoom,
      },
    };
  },
);

export const leaveGame = createAction(GameActions.LEAVE_GAME);
export const userLeavedGame = createAction(
  GameActions.USER_LEAVED_GAME,
  (data) => {
    const { room } = data;
    return { payload: { room: room as IRoom } };
  },
);
export const userMakeActions = createAction(
  GameActions.USER_MAKE_ACTION,
  (data) => {
    const { room } = data;
    return { payload: { room: room as IRoom } };
  },
);
export const endGame = createAction(GameActions.END_GAME);
