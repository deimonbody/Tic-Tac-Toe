import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "@route/global";
import { myTheme } from "@route/myTheme";
import { Routing } from "@route/Route/Routing";
import { socket } from "@route/common/variables";
import { useDispatch } from "react-redux";
import { addNewRoom } from "@route/store/rooms/actions";
import { useAuth } from "@route/hooks/isAuth";

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
