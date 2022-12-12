import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "@route/global";
import { myTheme } from "@route/myTheme";
import { Routing } from "@route/Route/Routing";

const App = () => {
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
