import styled from "styled-components";
import { NumericFormat } from 'react-number-format';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff;
`;
export const Container = styled.div`
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
  
`;
export const Title = styled.div`
    font-size: 70px;
   font-weight: 700;
  width: 90%;
  margin: auto;
  margin-top: 140px;
  span{
    color: #0080ff;
  }
`;
export const LeftSide = styled.div`
    width: 60%;
`;
export const RightSide = styled.div`
  height: 100%;
  width: 50%;
  padding-top: 140px;
`;





export const Form = styled.form`
  width: 400px;
  background-color: #e1e1e1;
  padding: 15px 0;
  border-radius: 15px;
  margin: auto;
  font-size: 16px;
  font-family: Mozerati,sans-serif !important;
  font-weight: 500 !important;
`;
export const FormContainer = styled.div`
  width: 80%;
  margin:  auto;
  .input-numb{
    width: 295px;
    margin: 10px 0;
    border: 0;
    border-radius: 6px;
    padding: 11px 12px;
    &:hover{
      border: 1px solid #0080ff;
    }
  }
`;
export const FormTitle = styled.div`
    font-size: 25px;
    font-weight: 700;
    font-family: Mozerati,sans-serif;
  text-align: center;
  margin-bottom: 20px;
  
  
`;

export const Input = styled.input`
  width: 295px;
  margin: 7px 0;
  border: 0;
  border-radius: 6px;
  padding: 11px 12px;
  &:hover{
    border: 1px solid #0080ff;
  }
`;
export const SelectInput = styled.select`
  margin-bottom: 10px;
  border: 0px ;
  width: 100%;
  padding: 11px 12px;
  border-radius: 6px;
  margin-top: 10px;
  cursor: pointer;
`;
export const Option = styled.option`
  cursor: pointer;
  padding: 5px 0;
`;

export const Button = styled.div`
    background-color: #0080ff;
    padding: 10px 30px;
  border-radius: 15px;
  width: fit-content;
  color: #fff;
  margin: auto;
  margin-top: 15px;
  cursor: pointer;
  &:hover{
    background-color: #49CB86;
  }
`;
