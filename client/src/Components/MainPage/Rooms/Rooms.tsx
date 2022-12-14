import React from "react";

import { NothingHere, RoomsWraper } from "@route/Components/Styled";
import { useAppSelector } from "@route/store/hooks";

import Room from "./Components/Room";

const Rooms = () => {
  const { rooms } = useAppSelector((store) => store.roomsReducer);
  return (
    <RoomsWraper>
      {!rooms.length && <NothingHere>There are no one rooms...</NothingHere>}
      {rooms.map((room) => (
        <Room room={room} key={room.id} />
      ))}
    </RoomsWraper>
  );
};

export default Rooms;
