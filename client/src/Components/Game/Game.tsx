import React from "react";

import { useRoomGame } from "@route/hooks/isJoinedRoom";
import { useAppSelector } from "@route/store/hooks";
import { useNavigate } from "react-router-dom";
import { PATHES, socket } from "@route/common";
import { useDispatch } from "react-redux";
import { leaveGame } from "@route/store/game/actions";
import { RoomStatusEnum } from "@route/common/enum";
import { userNameStatus } from "@route/helper/game.helper";
import {
  Button,
  GameFieldWrapper,
  GameHeader,
  GameTitle,
  GameUser,
  GameUserBlock,
  UserRole,
  Versus,
  Wrapper,
} from "../Styled";
import GameField from "./Components/GameField";

export const Game = () => {
  const isJoinedRoom = useRoomGame();
  const { title, users, roomId, roomStatus, isGameStarted, isGameEnded } =
    useAppSelector((store) => store.gameReducer);
  const { user } = useAppSelector((store) => store.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const leaveRoomHandler = () => {
    socket.emit("leave-room", JSON.stringify({ roomId, user }));
    dispatch(leaveGame());
    navigate(PATHES.MAIN_PAGE);
  };
  if (!isJoinedRoom) {
    return <p>Loading...</p>;
  }
  return (
    <Wrapper>
      <GameHeader>
        <GameTitle>Room Name: {title}</GameTitle>
        {roomStatus !== RoomStatusEnum.INPROCESS && (
          <Button onClick={leaveRoomHandler}>Leave Room</Button>
        )}
      </GameHeader>
      <GameHeader>
        <GameUserBlock>
          <GameUser>
            {userNameStatus({ users, userIndex: 0, isGameEnded })}
          </GameUser>
          {users[0] && (
            <UserRole userRole={users[0]?.role}>
              {users[0] && users[0]?.role === 0 ? "0" : "X"}
            </UserRole>
          )}
        </GameUserBlock>
        <Versus>VS</Versus>
        <GameUserBlock>
          <GameUser>
            {userNameStatus({ users, userIndex: 1, isGameEnded })}
          </GameUser>
          {users[1] && (
            <UserRole userRole={users[1].role}>
              {users[1].role === 0 ? "0" : "X"}
            </UserRole>
          )}
        </GameUserBlock>
      </GameHeader>
      <GameFieldWrapper>{isGameStarted && <GameField />}</GameFieldWrapper>
    </Wrapper>
  );
};
