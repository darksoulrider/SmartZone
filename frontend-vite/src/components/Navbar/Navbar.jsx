import React from "react";
import styled from "styled-components";
import {AiOutlineSearch} from "react-icons/ai"
import {BiMessageSquare} from "react-icons/bi"
import {IoIosNotifications} from "react-icons/io"
import {GiHamburgerMenu} from "react-icons/gi"
import {useNavigate} from "react-router-dom"
const Navbar = ()=>{
    const navigate = useNavigate();
    return(
        <Container>
            <div className="logo" onClick={()=>navigate("/")}>SMARTZONE</div>
            <div className="searchBar">
                <input type="text" className="search-input"/>
                <AiOutlineSearch className="search-icon"/>
            </div>
            <div className="menu-items">
                <AiOutlineSearch/>
                <BiMessageSquare/>
                <IoIosNotifications/>
                <GiHamburgerMenu/>
            </div>

        </Container>
    );
}


export default Navbar;
 
const Container = styled.nav`
    height: 8rem;
    width: 100%;
    background-color: #e9e6e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0;
    z-index: 100;
    filter: drop-shadow(0.1rem 0.11rem 0.1rem black);
    .logo{
        font-size: 2rem;
        font-weight: bold;
        font-family: 'DM Serif Display', serif;
        letter-spacing: 0.4rem;
        color:#340606;
        margin:1rem;
    }
    .menu-items{
        /* border: 1px solid black; */
        font-size: 2rem;
        margin-right: 2rem;
        display: flex;
        gap:2rem
    }
    .searchBar{
        @media (max-width: 600px) {
            display: none;
        }
    }

    @media (min-width: 800px) {
        .menu-items{
            gap: 4rem;
            margin-right: 6rem;
        }
    }
    

`