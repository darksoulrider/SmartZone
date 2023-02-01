import styled from 'styled-components';


export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 100%;
min-height: 100vh;
border: 1px solid black;
background-color: #Eee5e9;
background-color: rgb(196, 195, 157);

`
export const Form = styled.form`
margin:1rem;
min-width: 34rem;
min-height: 55rem;
color:black;
background-color: #c7ceb5;
border-radius: 1rem;
filter: drop-shadow(0.1rem 0.1rem 1.2rem gray);

`

export const Left = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.infos{
    min-width: 90%;
    /* border:1px solid red; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    min-height:4rem;
    font-size: 1rem;
    margin-top: 2rem;
    .one{
        font-size: 1.3rem;
        span{
            margin-left: 0.5rem;
            cursor: pointer;
            font-weight: bold;
            &:hover{
                color: red;
            }
        }
    }
    .two{
        font-size: 1.3rem;
        cursor: pointer;
        &:hover{
            color: red;
        }
    }
}
.error{
    margin-right:auto;
    margin-left: 2.6rem;
    font-size: 1.2rem;
    margin-top: 0.2rem;
    color:red;
}
h1{
    margin:5rem 0;
    color:#340606;
    font-size: 3rem;
    font-family: 'DM Serif Display', serif;
    letter-spacing: 0.4rem;
}
input{
    margin-top:2rem;
    background-color: #e3e8d5;
    color: #030B42;
    ::placeholder{
        color: #030B42;
        opacity: 0.7;
    }
}

button{
    margin-top:3rem;
    font-size: 1.4rem;
    min-width: 6rem;
    min-height:4rem;
    font-family: Roboto, sans-serif;
    color: #EFF2FF;
    outline: none;
    border-style: none;
    background-color: #213d5b;
    padding: 1rem 2rem;
    filter: drop-shadow(0.01rem 0.01rem 0.01rem black);
    border-radius: 1rem;
    transition : 500ms;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    cursor: pointer; 
    &:hover{
        transition : 500ms;
        padding: 1rem 2.6rem;
        background-color: #4d0f04;
        color: white;
    }
}

`   

export const Right = styled.div`
border: 1px solid black;
display: none;
`