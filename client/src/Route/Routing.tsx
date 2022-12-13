import React from "react";

import { Route, Routes } from "react-router-dom";

import { PATHES } from "@route/common/enum";
import { Game } from "@route/Components/Game/Game";
import Login from "@route/Components/Login/Login";
import { MainPage } from "@route/Components/MainPage/MainPage";
import { useAuth } from "@route/hooks/isAuth";

import PrivateRouteHOC from "./PrivateRoute";

export const Routing = () => {
  const isAuth = useAuth();
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
      <Route path={`${PATHES.ROOM}/:id`} element={<Game />} />
    </Routes>
  );
};
