import { PATHES } from "@route/common/enum";
import Login from "@route/Components/Login/Logint";
import { MainPage } from "@route/Components/MainPage/MainPage";
import { useAuth } from "@route/hooks/isAuth";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouteHOC from "./PrivateRoute";

export const Routing = () => {
  const isAuth = useAuth();
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
};
