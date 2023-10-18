import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff;
  /* background: url(${(props)=>props.imgUrl}); */
 
  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 1100px) {
    height: fit-content;
    padding-bottom: 50px;

  }
  @media screen and (max-width: 600px) {
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
  @media screen and (min-width: 1600px) {
    width: 70%;
  }
  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
  @media screen and (max-width: 800px) {
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 100px;
  }
  @media screen and (max-width: 600px) {
    height: fit-content;
    font-size: 20px;
    padding-top: 0px;
    width: 100%;
    height: 100%;
    margin: auto;
    margin-top: 30px;
    /* backdrop-filter: blur(2px); */
    /* background: rgb(2,0,36); */
    /* background: linear-gradient(90deg, rgba(2,0,36,0.23573179271708689) 0%, rgba(9,9,121,0.17130602240896353) 35%, rgba(0,212,255,0.11528361344537819) 100%); */
  }
`;

export const LeftSide = styled.div`
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const RightSide = styled.div`
  height: 100%;
  padding-top: 140px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.div`
  font-size: 56px;
  font-weight: 700;
  width: 90%;
  margin: auto;
  margin-top: 140px;
  @media screen and (max-width: 1500px) {
    font-size: 40px;
  }
  @media screen and (max-width: 800px) {
    font-size: 45px;
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    font-size: 26px;
    font-weight: 700;
    line-height: 30px;
    width: 90%;
    margin-top: 0;
  }
  span {
    color: #0080ff;
  }
`;

export const Form = styled.form`
  width: 400px;
  background-color: #e8e7e7;
  padding: 15px 0;
  border-radius: 20px;
  margin: auto;
  font-size: 16px;
  font-family: Mozerati, sans-serif !important;
  font-weight: 500 !important;
  @media screen and (max-width: 1400px) {
    width: 350px;
  }
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
    @media screen and (max-width: 1500px) {
      width: 250px;
      padding-left: 10px;
    }
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
  font-family: Mozerati, sans-serif;
  text-align: center;
  margin: 20px 0;
`;

export const Input = styled.input`
  width: 295px;
  margin: 7px 0;
  border: 0;
  border-radius: 5px;
  padding: 11px 12px;
  @media screen and (max-width: 1500px) {
    width: 250px;
  }
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
  border: 0px;
  height: fit-content;
  width: 100%;
  padding: 11px 12px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  line-height: 70px;
  font-size: 15px;
  font-weight: 500;
  @media screen and (max-width: 1500px) {
    width: 98%;
  }
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
  //background-color: ;
  padding: 11px 30px;
  border: unset;
  border-radius: 20px;
  color: #fff;
  z-index: 1;
  background: #0080ff;
  position: relative;
  font-weight: 600;
  font-size: 17px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  overflow: hidden;
  display: block;
  margin: 10px auto;
  transition: all 450ms;
  letter-spacing: 0.5px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: rgb(0, 89, 255);
    //background-color: #222222;
    background-color: #0dc569;

    width: 0;
    border-radius: 15px;
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 450ms;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover::before {
    width: 100%;
  }
`;
export const MobileBtn = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    color: #fff;
    font-weight: 600;
    width: fit-content;
    background-color: #0080ff;
    border-radius: 20px;
    font-size: 20px;
    padding: 11px 60px;
    margin-top: 27px;
    margin-left: 16px;
  }
`;
