import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@route/store/hooks";
import { loadRoomsAction, setRoomsLoading } from "@route/store/rooms/actions";

import { socket } from "@route/common";
import { Header, UserName, Wrapper } from "../Styled";
import Control from "./Control/Control";

import Rooms from "./Rooms/Rooms";
import { Loader } from "../Loader/Loader";

export const MainPage = () => {
  const { user } = useAppSelector((store) => store.userReducer);
  const userLoading = useAppSelector((store) => store.userReducer.isLoading);
  const roomsLoading = useAppSelector((store) => store.roomsReducer.isLoading);
  const dispatch = useAppDispatch();
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
        <UserName>User: {user.name || "No Name"}</UserName>
        <Control />
      </Header>
      <Rooms />
    </Wrapper>
  );
};
