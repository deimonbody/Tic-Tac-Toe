import "react-toastify/dist/ReactToastify.css";

import { PATHES } from "@src/common";
import { GlobalStyles } from "@src/global";
import { socketListener } from "@src/helper/socket.helper";
import { useAuth } from "@src/hooks/isAuth";
import { useRoomGame } from "@src/hooks/isJoinedRoom";
import { myTheme } from "@src/myTheme";
import { Routing } from "@src/Route/Routing";
import { useAppSelector } from "@src/store/hooks";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

const App = () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const joinedRoom = useRoomGame();
  const navigate = useNavigate();
  const { roomId } = useAppSelector((store) => store.gameReducer);

  useEffect(() => {
    if (auth) socketListener(dispatch);
  }, [auth]);

  useEffect(() => {
    if (joinedRoom) navigate(`${PATHES.ROOM}/${roomId}`);
  }, [joinedRoom]);

  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <Routing />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </ThemeProvider>
  );
};

export default App;
