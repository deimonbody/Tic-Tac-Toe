import React from "react";

import { useRoomGame } from "@route/hooks/isJoinedRoom";
import { useAppSelector } from "@route/store/hooks";
import { useNavigate } from "react-router-dom";
import { PATHES, socket } from "@route/common";
import { useDispatch } from "react-redux";
import { leaveGame } from "@route/store/game/actions";
import {
  Button,
  GameFieldWrapper,
  GameHeader,
  GameTitle,
  GameUser,
  Versus,
  Wrapper,
} from "../Styled";
import GameField from "./Components/GameField";

export const Game = () => {
  const isJoinedToGame = useRoomGame();
  const { title, users, roomId, isGameStarted } = useAppSelector(
    (store) => store.gameReducer,
  );
  const { user } = useAppSelector((store) => store.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const leaveRoomHandler = () => {
    socket.emit("leave-room", JSON.stringify({ roomId, user }));
    dispatch(leaveGame());
    navigate(PATHES.MAIN_PAGE);
  };
  if (!isJoinedToGame) {
    navigate(PATHES.MAIN_PAGE);
    return null;
  }
  return (
    <Wrapper>
      <GameHeader>
        <GameTitle>Room Name: {title}</GameTitle>
        {!isGameStarted && (
          <Button onClick={leaveRoomHandler}>Leave Room</Button>
        )}
      </GameHeader>
      <GameHeader>
        <GameUser>{users[0]?.name || "Waiting for user..."}</GameUser>
        <Versus>VS</Versus>
        <GameUser>{users[1]?.name || "Waiting for user..."}</GameUser>
      </GameHeader>
      <GameFieldWrapper>{isGameStarted && <GameField />}</GameFieldWrapper>
    </Wrapper>
  );
};
