import React from "react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../myTheme";
import { GlobalStyles } from "../../global";
import { Routing } from "../../Route/Routing";

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <Routing />
    </ThemeProvider>
  );
};

export default App;
