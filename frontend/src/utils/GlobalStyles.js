import {createGlobalStyle} from "styled-components"


export const screenSize = {
    mobile: "480px",
    tab: "980px",
    desktop:"1380px",
    extraLarge:"1920px",

}
export const gloablStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: "border-box";
        background-color: blue;
    }
    body{
        font-family: 'Roboto', sans-serif;

    }
    html{
        font-size: 62.5%;

        @media (${window.innerWidth}>1800px)  {
            font-size: 55%;
        }
    }





` // end of file