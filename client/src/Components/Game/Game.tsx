import { PATHES, socket } from "@src/common";
import { RoomStatusEnum } from "@src/common/enum";
import { userNameStatus } from "@src/helper/game.helper";
import { useRoomGame } from "@src/hooks/isJoinedRoom";
import { useLanguage } from "@src/hooks/useLanguageChange";
import { leaveGame } from "@src/store/game/actions";
import { useAppSelector } from "@src/store/hooks";
import React from "react";
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
  UserRole,
  Versus,
  Wrapper,
} from "../Styled";
import { LeaveRoomBtn, MainGameHeader } from "../Styled/Game";
import GameField from "./Components/GameField";

export const Game = () => {
  const isJoinedRoom = useRoomGame();
  const { title, users, roomId, roomStatus, isGameStarted, isGameEnded } =
    useAppSelector((store) => store.gameReducer);
  const { user } = useAppSelector((store) => store.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const strings = useLanguage();
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
