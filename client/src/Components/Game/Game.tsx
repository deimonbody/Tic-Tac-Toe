import { PATHES, socket } from "@src/common";
import { RoomStatusEnum } from "@src/common/enum";
import { IIsGameEndResult } from "@src/common/interfaces";
import { userNameStatus } from "@src/helper/game.helper";
import { useRoomGame } from "@src/hooks/isJoinedRoom";
import { useLanguage } from "@src/hooks/useLanguageChange";
import { leaveGame } from "@src/store/game/actions";
import { useAppSelector } from "@src/store/hooks";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Languages } from "../Languages/Languages";
import { Loader } from "../Loader/Loader";
import {
  GameFieldWrapper,
  GameHeader,
  GameTitle,
  GameUser,
  GameUserBlock,
  RestartGameBtn,
  UserRole,
  Versus,
  Wrapper,
} from "../Styled";
import { LeaveRoomBtn, MainGameHeader } from "../Styled/Game";
import GameField from "./Components/GameField";
import Timer from "./Components/Timer";

export const Game = () => {
  const isJoinedRoom = useRoomGame();
  const { title, users, roomId, roomStatus, isGameStarted, isGameEnded } =
    useAppSelector((store) => store.gameReducer);
  const { user } = useAppSelector((store) => store.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const strings = useLanguage();
  const [turnRole, setTurnRole] = useState<0 | 1>(0);
  const [gameEnd, setIsGameEnd] = useState<IIsGameEndResult>({
    isEnd: false,
    winner: null,
  });
  const changeTurnRole = (role: 0 | 1) => {
    setTurnRole(role);
  };
  const leaveRoomHandler = () => {
    socket.emit("leave-room", JSON.stringify({ roomId, user }));
    dispatch(leaveGame());
    navigate(PATHES.MAIN_PAGE);
  };

  const restartGameHanlder = () => {
    socket.emit("restart-game", JSON.stringify({ roomId }));
  };
  const timeUp = () => {
    setIsGameEnd({
      isEnd: true,
      winner: turnRole === 0 ? 1 : 0,
    });
    socket.emit("end-game", JSON.stringify({ roomId }));
  };
  if (!isJoinedRoom) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <MainGameHeader>
        <GameTitle>
          {strings.roomName}: {title}
        </GameTitle>
        {roomStatus !== RoomStatusEnum.INPROCESS && (
          <LeaveRoomBtn onClick={leaveRoomHandler}>
            {strings.leaveRoom}
          </LeaveRoomBtn>
        )}
        {roomStatus === RoomStatusEnum.END && (
          <RestartGameBtn onClick={restartGameHanlder}>
            {strings.restartGame}
          </RestartGameBtn>
        )}
        <Languages />
      </MainGameHeader>
      <GameHeader>
        {[0, 1].map((index) => {
          return (
            <>
              <GameUserBlock>
                <GameUser>
                  {userNameStatus({
                    users,
                    userIndex: index,
                    isGameEnded,
                    strings,
                  })}
                </GameUser>
                {users[index] && (
                  <UserRole userRole={users[index]?.role}>
                    {users[index] && users[index]?.role === 0 ? "0" : "X"}
                  </UserRole>
                )}
                {turnRole === users[index]?.role &&
                  roomStatus === RoomStatusEnum.INPROCESS && (
                    <Timer timeUp={timeUp} />
                  )}
              </GameUserBlock>
              {index === 0 && <Versus>VS</Versus>}
            </>
          );
        })}
      </GameHeader>
      <GameFieldWrapper>
        {isGameStarted && (
          <GameField
            changeTurnRole={changeTurnRole}
            turnRole={turnRole}
            setIsGameEnd={setIsGameEnd}
            gameEnd={gameEnd}
          />
        )}
      </GameFieldWrapper>
    </Wrapper>
  );
};
