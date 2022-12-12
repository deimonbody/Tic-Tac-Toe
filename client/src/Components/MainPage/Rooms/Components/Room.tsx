import { IRoom } from "@route/common/interfaces";
import { Button } from "@route/Components/Styled/Common/Button";
import {
  RoomStatus,
  RoomTitle,
  RoomWrapper,
} from "@route/Components/Styled/Room";
import React from "react";

interface IProps {
  room: IRoom;
}
const Room: React.FC<IProps> = ({ room }) => {
  return (
    <RoomWrapper>
      <RoomTitle>{room.title}</RoomTitle>
      <RoomStatus>
        {room.status === "Waiting"
          ? `Waiting users:${room.users.length}/2`
          : "Game has been started"}
      </RoomStatus>
      <Button>Join</Button>
    </RoomWrapper>
  );
};

export default Room;
