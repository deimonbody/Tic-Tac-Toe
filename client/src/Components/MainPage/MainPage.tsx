import { socket } from "@src/common";
import { useLanguage } from "@src/hooks/useLanguageChange";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import { loadRoomsAction, setRoomsLoading } from "@src/store/rooms/actions";
import React, { useEffect } from "react";

import { Languages } from "../Languages/Languages";
import { Loader } from "../Loader/Loader";
import { Header, UserName, Wrapper } from "../Styled";
import Control from "./Control/Control";
import Rooms from "./Rooms/Rooms";

export const MainPage = () => {
  const { user } = useAppSelector((store) => store.userReducer);
  const userLoading = useAppSelector((store) => store.userReducer.isLoading);
  const roomsLoading = useAppSelector((store) => store.roomsReducer.isLoading);
  const dispatch = useAppDispatch();
  const strings = useLanguage();

  useEffect(() => {
    dispatch(setRoomsLoading());
    dispatch(loadRoomsAction());
    if (!user.socketID && user.name) {
      socket.emit("user-conected", JSON.stringify({ userID: user.id }));
    }
  }, []);

  if (userLoading || roomsLoading) return <Loader />;
  return (
    <Wrapper>
      <Header>
        <UserName>
          {strings.user}: {user.name || strings.noName}
        </UserName>
        <Control />
        <Languages />
      </Header>
      <Rooms />
    </Wrapper>
  );
};
