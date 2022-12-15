import React from "react";

import { RoomStatusEnum } from "@route/common/enum";
import { IRoom } from "@route/common/interfaces";
import {
  Button,
  RoomStatus,
  RoomTitle,
  RoomWrapper,
} from "@route/Components/Styled";
import { socket } from "@route/common";
import { useAppSelector } from "@route/store/hooks";

interface IProps {
  room: IRoom;
}
const Room: React.FC<IProps> = ({ room }) => {
  const { user, strings } = useAppSelector((store) => store.userReducer);
  const clickHanlder = () => {
    socket.emit("join-to-room", JSON.stringify({ roomId: room.id, user }));
  };
  return (
    <RoomWrapper>
      <RoomTitle>{room.title}</RoomTitle>
      <RoomStatus>
        {room.status === RoomStatusEnum.END
          ? strings.gameFinished
          : room.status === RoomStatusEnum.WAITING
          ? `${strings.waitingUsers}${room.users.length}/2`
          : strings.gameStarted}
      </RoomStatus>
      {!room.isGameEnded && room.status !== RoomStatusEnum.INPROCESS && (
        <Button onClick={clickHanlder}>{strings.join}</Button>
      )}
    </RoomWrapper>
  );
};

export default Room;
