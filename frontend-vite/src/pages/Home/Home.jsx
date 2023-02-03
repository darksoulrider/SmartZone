import React from "react";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import styled from "styled-components";
import MainPanel from "../../components/MainPanel/MainPanel";
import RightPanel from "../../components/RightPanel/RightPanel";
const Home = ()=>{

    return (
        
        <Container >
            <LeftPanel />
            <MainPanel />
            <RightPanel />
        </Container>

    );
}
export default Home;


const Container = styled.div`
    display: flex;
    width: 100%;
    gap: 2rem;
    overflow-x: hidden;
    position: fixed;  // we can cooment this also add scroll functinolity
    top: 8rem;
    
`
