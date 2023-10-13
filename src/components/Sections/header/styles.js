import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff;

  @media screen and (max-width: 900px){
    height: fit-content;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 600px){
    height: 100vh;
    padding-bottom: 50px;
    background-size: contain;

  }
`;
export const Container = styled.div`
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 160px;


  @media screen and (max-width: 800px){
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top:100px;
  }
  @media screen and (max-width: 600px){
    height: fit-content;
    padding-top:0px;
    font-size: 20px;
    width: 100%;
    height: 100%;
    margin: auto;
  }
`;
export const Title = styled.div`
    font-size: 60px;
   font-weight: 700;
  width: 90%;
  margin: auto;
  margin-top: 140px;
  @media screen and (max-width: 800px){
   font-size: 45px;
    width: 100%;
  }
  @media screen and (max-width: 500px){
    font-size: 27px;
    font-weight: 600;
    line-height: 31px;
    width: 90%;
    margin-top: 0;
  }
  span{
    color: #0080ff;
  }
`;
export const LeftSide = styled.div`
    width: 60%;
  @media screen and (max-width: 800px){
    width: 100%;
  }
`;
export const RightSide = styled.div`
  height: 100%;
  width: 50%;
  padding-top: 140px;
  @media screen and (max-width: 800px){
    width: 100%;
  }
  @media screen and (max-width: 600px){
    display: none;
  }
`;





export const Form = styled.form`
  width: 400px;
  background-color: #e8e7e7;
  padding: 15px 0;
  border-radius: 15px;
  margin: auto;
  font-size: 16px;
  font-family: Mozerati, sans-serif !important;
  font-weight: 500 !important;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const FormContainer = styled.div`
  width: 80%;
  margin: auto;

  .input-numb {
    width: 295px;
    margin: 10px 0;
    border: 0;
    border-radius: 6px;
    padding: 11px 12px;
    @media screen and (max-width: 800px) {
      width: 90%;
      margin: 7px auto;
    }

    &::placeholder {
      color: #afafaf;
      font-size: 15px;
    }

    &:focus {
      outline: 1px solid #0080ff;
    }
  }
`;
export const FormTitle = styled.div`
    font-size: 25px;
    font-weight: 700;
    font-family: Mozerati,sans-serif;
  text-align: center;
  margin: 20px 0;
  
  
  
`;

export const Input = styled.input`
  width: 295px;
  margin: 7px 0;
  border: 0;
  border-radius: 6px;
  padding: 11px 12px;
  @media screen and (max-width: 800px) {
    width: 100%;
    width: 90%;
      margin: 7px auto;
  }
  &::placeholder {
    color: #afafaf;
    font-size: 15px;
  }

  &:focus {
    outline: 1px solid #0080ff;
  }
`;
export const SelectInput = styled.select`
  margin-bottom: 10px;
  border: 0px ;
  height: fit-content;
  width: 100%;
  padding: 11px 12px;
  border-radius: 6px;
  margin-top: 10px;
  cursor: pointer;
  line-height: 70px;
  @media screen and (max-width: 800px) {
    width: 98%;
      margin: 7px auto;
  }
  &::placeholder {
    color: #afafaf;
    font-size: 15px;
  }
  &:focus {
    outline: 1px solid #0080ff;
  }
`;
export const Option = styled.option`
  cursor: pointer;
  font-size: 16px;
  
`;

export const Button = styled.button`
    background-color: #0080ff;
    padding: 10px 47px;
  border-radius: 15px;
  border: 0;
  width: fit-content;
  color: #fff;
  margin: auto;
  margin-top: 15px;
  cursor: pointer;
  display: block;
  &:hover{
    background-color: #49CB86;
  }
`;
export const MobileBtn = styled.div`
display: none;
@media only screen and (max-width:600px){
  display: block;
  color: #fff;
font-weight: 600;
width: fit-content;
background-color: #0080ff;
border-radius: 17px;
font-size: 18px;
padding: 11px 50px;
margin-top:27px;
margin-left: 16px;
}



`;