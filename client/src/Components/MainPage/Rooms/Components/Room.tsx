import React from "react";

import { RoomStatusEnum } from "@route/common/enum";
import { IRoom } from "@route/common/interfaces";
import {
  Button,
  RoomStatus,
  RoomTitle,
  RoomWrapper,
} from "@route/Components/Styled";

interface IProps {
  room: IRoom;
}
const Room: React.FC<IProps> = ({ room }) => {
  return (
    <RoomWrapper>
      <RoomTitle>{room.title}</RoomTitle>
      <RoomStatus>
        {room.status === RoomStatusEnum.WAITING
          ? `Waiting users:${room.users.length}/2`
          : "Game has been started"}
      </RoomStatus>
      <Button>Join</Button>
    </RoomWrapper>
  );
};

export default Room;
