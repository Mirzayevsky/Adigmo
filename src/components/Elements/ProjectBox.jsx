import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, text, action,link}) {
  return (
    <Wrapper>
      {/* onClick={action ? () => action() : null} */}
      <ImgBtn href={link}  target="_blank"  className="aniamte pointer" >
        <img className="radius8" src={img} alt="project"></img>
      </ImgBtn>
      <h3 className="font20 extraBold" >{title}</h3>
      <p className="font13">{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  h3 {
    margin-top: 20px;
    margin-bottom: 5px;
  }
`;
const ImgBtn = styled.a`
  
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  height: fit-content;
  width: fit-content;
  height: 300px;
  margin: 20px 0;


  @media only screen and (max-width: 1100px) {
    height: fit-content;
  }
  img{
    height: 100%;
    width: 100%;
  }
  :hover > img {
    opacity: 0.5;
  }
`;