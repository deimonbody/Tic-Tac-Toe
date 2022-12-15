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
import { Loader } from "../Loader/Loader";
import { Languages } from "../Languages/Languages";
import { LeaveRoomBtn, MainGameHeader } from "../Styled/Game";

export const Game = () => {
  const isJoinedRoom = useRoomGame();
  const { title, users, roomId, roomStatus, isGameStarted, isGameEnded } =
    useAppSelector((store) => store.gameReducer);
  const { user, strings } = useAppSelector((store) => store.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const leaveRoomHandler = () => {
    socket.emit("leave-room", JSON.stringify({ roomId, user }));
    dispatch(leaveGame());
    navigate(PATHES.MAIN_PAGE);
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
              </GameUserBlock>
              {index === 0 && <Versus>VS</Versus>}
            </>
          );
        })}
      </GameHeader>
      <GameFieldWrapper>{isGameStarted && <GameField />}</GameFieldWrapper>
    </Wrapper>
  );
};
