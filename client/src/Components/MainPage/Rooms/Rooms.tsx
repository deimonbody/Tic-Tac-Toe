import { NothingHere, RoomsWraper } from "@src/Components/Styled";
import { useLanguage } from "@src/hooks/useLanguageChange";
import { useAppSelector } from "@src/store/hooks";
import React from "react";

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
