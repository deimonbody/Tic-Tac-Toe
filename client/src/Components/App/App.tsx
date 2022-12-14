import { Routing } from "@route/Route/Routing";
import { PATHES } from "@route/common";
import { GlobalStyles } from "@route/global";
import { useAuth } from "@route/hooks/isAuth";
import { useRoomGame } from "@route/hooks/isJoinedRoom";
import { myTheme } from "@route/myTheme";
import { useAppSelector } from "@route/store/hooks";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { socketListener } from "@route/helper/socket.helper";

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

  useEffect(() => {}, []);

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
