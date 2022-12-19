import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { socket } from "@src/common";
import {
  endGame,
  joinedToRoom,
  restartCurrentGame,
  userDisconected,
  userLeavedGame,
  userMakeActions,
} from "@src/store/game/actions";
import { addNewRoom, updateRoomsList } from "@src/store/rooms/actions";
import { setUserSocketID } from "@src/store/user/actions";

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
  socket.on("restart-current-game", () => {
    dispatch(restartCurrentGame());
  });
};
