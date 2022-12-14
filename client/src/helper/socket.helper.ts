import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { socket } from "@route/common";
import {
  endGame,
  joinedToRoom,
  userDisconected,
  userLeavedGame,
  userMakeActions,
} from "@route/store/game/actions";
import { addNewRoom, updateRoomsList } from "@route/store/rooms/actions";
import { setUserSocketID } from "@route/store/user/actions";

export const socketListener = (dispatch: Dispatch<AnyAction>) => {
  socket.on("add-new-room", (data) => {
    dispatch(addNewRoom(JSON.parse(data)));
  });
  socket.on("current-user-joined-to-room", (data) => {
    dispatch(joinedToRoom(JSON.parse(data)));
  });
  socket.on("new-user-joined-to-room", (data) => {
    dispatch(joinedToRoom(JSON.parse(data)));
  });
  socket.on("update-room-list", (data) => {
    dispatch(updateRoomsList(JSON.parse(data)));
  });
  socket.on("user-leaved-the-room", (data) => {
    dispatch(userLeavedGame(JSON.parse(data)));
  });
  socket.on("user-make-action", (data) => {
    dispatch(userMakeActions(JSON.parse(data)));
  });
  socket.on("current-game-finished", () => {
    dispatch(endGame());
  });
  socket.on("add-current-user-socket-id", (data) => {
    dispatch(setUserSocketID(JSON.parse(data)));
  });
  socket.on("user-disconected", (data) => {
    dispatch(userDisconected(JSON.parse(data)));
  });
};
