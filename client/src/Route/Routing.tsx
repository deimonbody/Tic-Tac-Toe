import { PATHES } from "@src/common/enum";
import { Game } from "@src/Components/Game/Game";
import Login from "@src/Components/Login/Login";
import { MainPage } from "@src/Components/MainPage/MainPage";
import { useAuth } from "@src/hooks/isAuth";
import { useRoomGame } from "@src/hooks/isJoinedRoom";
import React from "react";
import { Route, Routes } from "react-router-dom";

import GameProtecteHOC from "./GameProtectedRoute";
import PrivateRouteHOC from "./PrivateRoute";

export const Routing = () => {
  const isAuth = useAuth();
  const isHasRoom = useRoomGame();
  return (
    <Routes>
      <Route
        path={PATHES.MAIN_PAGE}
        element={
          <PrivateRouteHOC isAuth={isAuth}>
            <MainPage />
          </PrivateRouteHOC>
        }
      />
      <Route path={PATHES.LOGIN} element={<Login />} />
      <Route
        path={`${PATHES.ROOM}/:id`}
        element={
          <GameProtecteHOC isRoom={isHasRoom}>
            <Game />
          </GameProtecteHOC>
        }
      />
    </Routes>
  );
};
