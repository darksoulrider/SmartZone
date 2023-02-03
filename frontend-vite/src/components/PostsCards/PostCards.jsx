import React from "react";
import styled from "styled-components";
import {BsThreeDotsVertical}  from "react-icons/bs"
import {BiLike}  from "react-icons/bi"
import {BiComment}  from "react-icons/bi"


const userData = {
  profileimage:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  postImage: "https://images.pexels.com/photos/9882736/pexels-photo-9882736.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
}






const PostCard = () =>{
  return(
    <Container>
      <div className="top">
        <div className="profileinfo">
          <img src={userData.profileimage} alt="" />
          <p>5 min ago.</p>
        </div>
        <BsThreeDotsVertical className="menu-icon"/>
      </div>
      <div className="imagecontiner">
        <img src={userData.postImage} alt="" />
      </div>
      <div className="actionRow">
        <div className="like">
          <BiLike className="like-icon"/>
          <p>Likes 40</p>

        </div>
        <div className="comment">
          <BiComment className="comment-icon"/>
          <p>Comments 40</p>
        </div>
      </div>
      <div className="commentRow">
        <input type="text" placeholder="Your comments...."/>
      </div>
    </Container>
  )
}


export default PostCard;

const  Container = styled.div`
  
  /* border: 1px solid red; */
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 1rem;
  box-shadow: -17px 8px 37px 0px rgba(0,0,0,0.1);
  background-color: #eceaea;

  .top{
    display: flex;
    font-size: 1rem;
    align-items: center;
    justify-content: space-between;
    .profileinfo{
      display: flex;
      align-items: center;
      gap:2rem;
      p{
        font-size: 1.4rem;
      }
      img{
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        object-fit: contain;
      }
    }
    .menu-icon{
      font-size: 2.1rem;
    }
  }
  .imagecontiner{
    /* border: 1px solid black; */
    margin: 1.4rem 2rem;
    
    img{
      aspect-ratio: 1/1;
      width:100%;
      object-fit: cover;
      border-radius: 1.1rem;
    }
  }
  .actionRow{
    display: flex;
    align-items: center;
    justify-content:space-between;
    margin: 0 2rem;
    font-size:1.5rem;
  }
  .like,.comment{
    display: flex;
    align-items: center;
    gap: 1rem;
    
  }
  .like-icon,.comment-icon{
    font-size: 2.4rem;
  }
  .commentRow{
    /* border:1px solid blue; */
    margin: 1.4rem 2rem;
    
    input{
      width: 100%;
      border-radius: 1rem;
      padding: 2rem;
    }
  }

`