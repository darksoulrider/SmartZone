import {createGlobalStyle} from "styled-components"
import bgImg from "../assets/images/bg.jpg"

export const screenSize = {
    mobile: "480px",
    tab: "980px",
    desktop:"1380px",
    extraLarge:"1920px",

}
const GlobalStyle = createGlobalStyle`
    


    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    body{
        font-family: 'Roboto', sans-serif;
        max-width: 100%;
        max-height: 100%;
        overflow-x: hidden;
    }
    html{
        font-size: 62.5%;
        overflow-x: hidden;
        
    }

    /*  -------------- Elements --------------------- */

    input{
        font-size: 1.7rem;
        border-radius: 0.8rem;
        border-style: none;
        outline: none;
        height: 4.3rem;
        min-width: 29rem;
        padding: 1.2rem;
        /* filter: drop-shadow(0.01rem 0.01rem 0.1rem black); */


    }

    h1,h2,h3,h4,h5,h6 {
        font-weight: normal;
        margin: 1.5rem 0;
        text-transform: uppercase;
    }

` // end of file

export default GlobalStyle;