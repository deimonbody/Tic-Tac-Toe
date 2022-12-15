import React from "react";

import { NothingHere, RoomsWraper } from "@route/Components/Styled";
import { useAppSelector } from "@route/store/hooks";

import { useLanguage } from "@route/hooks/useLanguageChange";
import Room from "./Components/Room";

const Rooms = () => {
  const { rooms } = useAppSelector((store) => store.roomsReducer);
  const strings = useLanguage();
  return (
    <RoomsWraper>
      {!rooms.length && <NothingHere>{strings.noRooms}</NothingHere>}
      {rooms.map((room) => (
        <Room room={room} key={room.id} />
      ))}
    </RoomsWraper>
  );
};

export default Rooms;
