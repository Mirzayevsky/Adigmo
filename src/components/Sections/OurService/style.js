import styled from "styled-components";
export const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  background-color: #ffffff;;
  @media screen and (max-width: 900px) {
    height: fit-content;
  }
`;
export const Container = styled.div`
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1600px){
    width: 70%;
  }
  @media screen and (max-width: 800px){
    width: 90%;
  }
  h1{
    text-align: center;
  }
  .subtitle{
    width: 60%;
    margin: auto;
    padding:15px 0;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    @media (max-width: 860px) {
      width: 90%;
    }
  }
`;
export const ServiceWrapper =styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  padding-bottom: 160px;
  @media screen and (max-width: 1600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const Title =styled.div`
    font-size: 56px;
  font-weight: 800;
  text-align: center;
  padding-top: 120px;
  @media screen and (min-width: 1600px){
    font-size: 56px;
  }
  @media screen and (max-width: 1200px){
    font-size: 50px;
  }
  @media screen and (max-width: 900px){
    font-size: 36px;
  }
  @media screen and (max-width: 700px){
    font-size: 28px;
  }
  span{
color: #0080ff;    
  }
  &::selection {
    background: transparent;
    color: #0080ff;
  }
`;
export const ServiceBox =styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  padding: 40px 0;
  border-radius: 5px;
  width: 30%;
  @media screen and (max-width: 700px) {
    width: 80%;
    margin-top: 50px;
  }

  align-items: center;

  .svg-wrapper {
    height: 90px;
    width: fit-content;
    @media screen and (max-width:1200px){
      height: 50px;
    }
    @media screen and (max-width:700px){
      height: 40px;
    }
    svg {
      height: 100%;
      width: fit-content;
    }
  }

  .title {
    font-size: 22px;
    font-weight: 700;
    padding-top: 20px;
    @media screen and (max-width:1200px){
      font-size: 22px;
      text-align: center;
    }
  }
  .text {
    width: 70%;
    margin: auto;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    padding-top: 10px;

  }
`;
export const Button = styled.div`
  color: #fff;
  margin-top: 30px;
  padding: 10px 35px;
  cursor: pointer;
  background-color: #0080ff;
  border-radius: 16px;
  @media screen and (max-width:1200px){
    font-size: 18px;
    padding: 6px 25px;
  }
  &:hover{
    background-color: #49CB86;
  }
`;