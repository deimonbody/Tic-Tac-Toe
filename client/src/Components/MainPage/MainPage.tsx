import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@route/store/hooks";
import { loadRoomsAction, setRoomsLoading } from "@route/store/rooms/actions";

import { Header, UserName, Wrapper } from "../Styled";
import Control from "./Control/Control";
import Rooms from "./Rooms/Rooms";

export const MainPage = () => {
  const { user } = useAppSelector((store) => store.userReducer);
  const userLoading = useAppSelector((store) => store.userReducer.isLoading);
  const roomsLoading = useAppSelector((store) => store.roomsReducer.isLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setRoomsLoading());
    dispatch(loadRoomsAction());
  }, []);
  if (userLoading || roomsLoading) return <div>Loading...</div>;
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
