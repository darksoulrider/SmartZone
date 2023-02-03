import React from "react";
import styled from "styled-components";
import UploadPost from "../UploadPost/UploadPost"
import PostCard from "../PostsCards/PostCards";


const MainPanel = ()=>{
    return(
        <Main>
            <UploadPost/>
            <PostCard/>
        </Main>
    );
}

export default MainPanel;
const Main = styled.div`
    flex: 6;
    height: 100vh;
    background-color: #3d1313;
    background-color: #ececec;
    color: #170404;
    overflow-y: auto;
    ::-webkit-scrollbar{
        display: none;
    }
    
`








    /* &::-webkit-scrollbar {
        width: 0.2rem;
    }

    &::-webkit-scrollbar-thumb {
        background: #5c5959;
    }

    &::-webkit-scrollbar-track {
        background: #f3e7e7;
    } */

