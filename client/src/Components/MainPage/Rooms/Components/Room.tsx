import { socket } from "@src/common";
import { RoomStatusEnum } from "@src/common/enum";
import { IRoom } from "@src/common/interfaces";
import {
  Button,
  RoomStatus,
  RoomTitle,
  RoomWrapper,
} from "@src/Components/Styled";
import { useLanguage } from "@src/hooks/useLanguageChange";
import { useAppSelector } from "@src/store/hooks";
import React from "react";

interface IProps {
  room: IRoom;
}
const Room: React.FC<IProps> = ({ room }) => {
  const { user } = useAppSelector((store) => store.userReducer);
  const strings = useLanguage();
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
