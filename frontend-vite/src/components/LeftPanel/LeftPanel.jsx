import React from 'react'

import styled from 'styled-components';

const userData = {
    image:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
}

const LeftPanel = ()=>{
    return (
        <Left>
            <div className="Home">
                <img className='profile' src={userData.image} />
                <p>Mukesh R.</p>
            </div>
            <hr />
            <div className="userColumn">
                <p className="Friends">Friends <span>(100)</span></p>
                <p className="chats">Chats <span>(10)</span></p>
                <p className="SavedPosts">Collections</p>
            </div>       
        </Left>
    );
}

export default LeftPanel;

const Left = styled.div`
    flex: 3;
    height: 100vh;    
    /* overflow-y: scroll; */
    ::-webkit-scrollbar{
        display: none;
    } 
    @media (max-width:600px) {
        display: none;
        
    }
    .Home{
        display: flex;
        align-items: center;
        gap:2rem;
        margin: 1.5rem;
        img{
            width:4.2rem;
            height:4.2rem;
            border-radius:50%;
            object-fit: contain;
            cursor: pointer;
            :hover{
                transform: scale(1.2);
            }
        }
        p{
            font-size: 1.5rem;
            letter-spacing: 0.1rem;
            text-transform: uppercase;
            font-weight: 500;
            color: black;
            font-style: italic;
        }
    }
    hr{            
        border: 1px solid red;
        margin-top: 2rem;
    }
    
    .userColumn{
        display: flex;
        flex-direction: column;
        gap:1.4rem;
        margin-left: 1rem;
        margin-top: 2rem;
        /* font-size: 3rem; */
        /* border: 1px solid red; */
        height: 100rem;
        p{
            font-size: 2rem;
            /* border: 1px solid red; */
            width: 80%;
            padding: 0.5rem 0;
            padding-left: 1rem;
            background-color: rgba(192, 177, 92, 0.5);
            color: black;
            border-radius: 1rem;
            cursor: pointer;
            &:hover{
                
                background-color: rgba(77, 70, 33, 0.495);
                color:white;
            }
            span{
                font-size: 2rem;
            }
        }
    }
`
