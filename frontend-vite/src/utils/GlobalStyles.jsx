import {createGlobalStyle} from "styled-components"


export const screenSize = {
    mobile: "480px",
    tab: "980px",
    desktop:"1380px",
    extraLarge:"1920px",

}
const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: "border-box";
    }
    body{
        font-family: 'Roboto', sans-serif;
        width: 100vw;
        height: 100vh;
        background-color: black;
    }
    html{
        font-size: 62.5%;
        
        /* @media ()  {
            font-size: 55%;
        } */
    }





` // end of file

export default GlobalStyle;