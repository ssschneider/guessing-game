import { createGlobalStyle } from "styled-components";
import BgImg from "../assets/bg.svg"

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Julius Sans One', sans-serif;
        font-size: 62.5%;
        color: #f1f1f1;
    }

    body {
        background: url(${BgImg}) center center no-repeat;
        background-color: #030303;
        height: 100vh;
    }
`

export default GlobalStyles