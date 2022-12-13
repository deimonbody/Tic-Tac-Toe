import { Routing } from "@route/Route/Routing";
import { PATHES } from "@route/common";
import { socket } from "@route/common/variables";
import { GlobalStyles } from "@route/global";
import { useAuth } from "@route/hooks/isAuth";
import { useRoomGame } from "@route/hooks/isJoinedRoom";
import { myTheme } from "@route/myTheme";
import { joinedToRoom, userLeavedGame } from "@route/store/game/actions";
import { useAppSelector } from "@route/store/hooks";
import { addNewRoom, updateRoomsList } from "@route/store/rooms/actions";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";

const App = () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const joinedRoom = useRoomGame();
  const navigate = useNavigate();
  const { roomId } = useAppSelector((store) => store.gameReducer);

  useEffect(() => {
    if (auth) {
      socket.on("add-new-room", (data) => {
        dispatch(addNewRoom(JSON.parse(data)));
      });
      socket.on("current-user-joined-to-room", (data) => {
        dispatch(joinedToRoom(JSON.parse(data)));
      });
      socket.on("new-user-joined-to-room", (data) => {
        dispatch(joinedToRoom(JSON.parse(data)));
      });
      socket.on("update-room-list", (data) => {
        dispatch(updateRoomsList(JSON.parse(data)));
      });
      socket.on("user-leaved-the-room", (data) => {
        dispatch(userLeavedGame(JSON.parse(data)));
      });
    }
  }, [auth]);

  useEffect(() => {
    if (joinedRoom) {
      navigate(`${PATHES.ROOM}/${roomId}`);
    }
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
