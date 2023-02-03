import React from "react";
import styled from "styled-components";
import {MdDriveFileMoveOutline} from "react-icons/md"
import { useState } from "react";

const userData = {
    image:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
}
const UploadPost = ()=>{
    const [file, setFile] = useState();
    const [filename,setFileName] = useState(null);
    const [previewUrl,setPreviewUrl] = useState(null);
    const deleteFile = ()=>{
        setPreviewUrl(null);
    }
    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        setFile(file);
        setFileName(e.target.files[0].name)
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
            console.log(reader.result);
        };
        reader.readAsDataURL(file);
      };
    const getFile = ()=>{
        document.querySelector(".input-file").click();
    }
    return (
        <Container>
            <div className="wrapper">
                <div className="FirstRow">
                    <img src={userData.image} alt="" />
                    <textarea name="myTextarea" placeholder="Whats in your in mind..." cols="50" rows="2" minLength="10" maxLength="500"  required></textarea>
                </div>
                <div className="secondRow">
                    <div className="uploadImg">
                        <input 
                        type="file" 
                        onChange={handleFileSelect}
                        hidden 
                        accept="image/*"
                        className="input-file"
                        />
                        <MdDriveFileMoveOutline onClick={getFile} className="icon-upload" type="file"/>
                        <p className="upload">UPLOAD</p>
                    </div>
                    <div className="share">POST</div>
                    <div className="delete" onClick={deleteFile}>DELETE</div>
                </div>
                <div className="preview">
                    {/* <img src={userData.image} alt="" /> */}
                    {previewUrl && <img src={previewUrl} alt="" />}
                    {previewUrl && <p>{filename}</p> }

                </div>
            </div>
        </Container>
    );
}

export default UploadPost;

const  Container = styled.div`
    margin:1rem;
    /* border: 1px solid  black; */
    background-color: white;
    border-radius: 1rem;
    box-shadow: -17px 8px 37px 0px rgba(0,0,0,0.1);
    .wrapper{
        width: 100%;
        min-height: 18rem;
        padding:1rem;
        .FirstRow{
            /* border: 1px solid red; */
            display: flex;
            align-items: center;
            gap:3rem;
            img{
                width:6rem;
                height: 6rem;
                border-radius: 50%;
                object-fit: contain;
            }
            textarea{
                border-radius: 1.2rem;
                padding: 1.2rem;
                outline: none;
                border-style: none;
                resize: none;
                font-size: 1.7rem;
                ::-webkit-scrollbar{
                    display: none;
                }
                &:focus{
                    /* z-index: 100; */
                    height: 30rem;
                    position: relative;
                    /* top:11rem;
                    left:55rem; */
                    box-shadow: -17px 8px 37px 0px rgba(0,0,0,0.1);
                    
                }
            }
        }
        .secondRow{
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin: 2rem 0;
            font-size: 1.4rem;
            
            .uploadImg{
                display: flex;
                align-items: center;
                gap:1.9rem;
                align-content: center;
                /* border: 1px solid red; */
                margin-left: 3rem;
                
                .icon-upload{
                    font-size: 3rem;
                    color: #126bab;
                    width: 4rem;
                    height: 3rem;
                    background-color: #0d2e0d37;
                    cursor: pointer;
                    &:hover{
                        transform: scale(1.2);
                    }
                    /* background-color: ; */
                }
            }
            .share,.delete,.upload{
                /* border: 1px solid black; */
                border-radius: 1rem;
                width: 8rem;
                height: 3rem;
                align-content: center;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: white;
                box-shadow: -17px 8px 37px 0px rgba(0, 0, 0, 0.1);
                cursor: pointer;
                letter-spacing: 0.1rem;
                
                &:hover{
                    opacity: 1;
                }
            }
            .delete{
                background-color: #7e1d1d;
                color: white;
                font-weight: 600;
                margin-right:4rem;
                
            }
            .share{
                background-color: #173e17;
                color: white;
                font-weight: 600;
            }
            .upload{
                background-color: #06283e;
                color: white;
                
            }
            

        }
        .preview{
            display: flex;
            align-items: center;
            font-size: 1.2rem;
            gap:1.2rem;
            img{
                width: 4rem;
                height: 4rem;
                object-fit: contain;
            }
        }
    }


`