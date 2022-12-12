import React from "react";

import { RoomsWraper } from "@route/Components/Styled";
import { useAppSelector } from "@route/store/hooks";

import Room from "./Components/Room";

const Rooms = () => {
  const { rooms } = useAppSelector((store) => store.roomsReducer);
  return (
    <RoomsWraper>
      {!rooms.length && <p>There are no one rooms...</p>}
      {rooms.map((room) => (
        <Room room={room} key={room.id} />
      ))}
    </RoomsWraper>
  );
};

export default Rooms;
