import React, { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import { socket } from "@route/common/variables";
import { GlobalStyles } from "@route/global";
import { useAuth } from "@route/hooks/isAuth";
import { myTheme } from "@route/myTheme";
import { Routing } from "@route/Route/Routing";
import { addNewRoom } from "@route/store/rooms/actions";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

const App = () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  useEffect(() => {
    if (auth) {
      socket.on("add-new-room", (data) => {
        dispatch(addNewRoom(JSON.parse(data)));
      });
    }
  }, [auth]);
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
