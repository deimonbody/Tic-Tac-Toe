import { createGlobalStyle } from "styled-components";
import MontserratLight from "./fonts/Montserrat-Light.ttf";
import MontserratMedium from "./fonts/Montserrat-Medium.ttf";
import MontserratBold from "./fonts/Montserrat-Bold.ttf";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0; 
    box-sizing:border-box;
}
@font-face {
    font-family: 'Montserrat-reg';
    font-style: normal;
    font-weight: 400;
    src: url(${MontserratLight});
}
@font-face {
    font-family: 'Montserrat-medium';
    font-style: normal;
    font-weight: 400;
    src:  url(${MontserratMedium});
}
@font-face {
    font-family: 'Montserrat-bold';
    font-style: normal;
    font-weight: 700;
    src:  url(${MontserratBold});
}

`;
