import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATHES } from "../common/enum";
import Login from "../Components/Login/Logint";
import { MainPage } from "../Components/MainPage/MainPage";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHES.MAIN_PAGE} element={<MainPage />} />
        <Route path={PATHES.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
