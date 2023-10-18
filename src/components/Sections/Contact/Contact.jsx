import React, {useState} from "react";
import styled from "styled-components";
import { HttpRequest } from "../../../hooks/httpRequest";
import { PatternFormat } from 'react-number-format';
import Success from "../../SuccessCard";

const  Contact = () => {
  const [toggle,setToggle] = useState(false)


  const [state, setState] = useState({
    name: "",
    number:null,
    email:"",
    text:""
  });
 
  const handleSubmit = (e) => {
    HttpRequest(
      {
        e,state,setState
      }
    )
    setToggle(true)
  }


  return (
    <Wrapper id="contact">
      {toggle ? <Success setToggle={setToggle} /> : ""}
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold flexCenter">Давайте свяжемся с вами</h1>
            <p className="font19 flexCenter subtitle ">
            Ваши идеи и бизнес-цели заслуживают выдающегося воплощения в цифровом мире. В Adigmo мы готовы помочь вам в этом.Оставьте свои контактные данные в форме ниже, и наш специалист свяжется с вами в ближайшее время для обсуждения вашего проекта.
            </p>
          </HeaderInfo>
              <Form onSubmit={handleSubmit} >
                <label className="font13">Имя и фамилия:</label>
                <input 
                type="text" id="fname" name="fname"  className="font20 extraBold" 
                value={state.name} 
                onChange={(e) => setState({ ...state, name: e.target.value })}
                />

                <label className="font13">Номер телефона :</label>
                 <PatternFormat
                  className="font20 extraBold"
                            format="+998(##)###-##-##"
                            value={state.number}
                            onChange={(e) => setState({ ...state, number: e.target.value })}
                        />
                <SumbitWrapper className="flex">
                  <Button >Отправить </Button>
                </SumbitWrapper>
              </Form>



        </div>
      </div>
    </Wrapper>
  );
}
export default Contact

const Wrapper = styled.section`
  width: 100%;
  label{
    font-size: 16px;
    font-weight: 500;
  }
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  h1{
    margin: 20px 0;
  }
  @media (max-width: 860px) {
    text-align: center;
  }
  .subtitle{
    width: 80%;
    margin: auto;
    padding:15px 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;

    text-align: center;
    @media (max-width: 860px) {
      width: 90%;
    }
    @media (max-width: 600px) {
      width: 90%;
      font-size: 14px;
      font-weight: 500;
      display: none;
    }
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  width: 80%;
  margin: auto;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
    font-weight: 500 !important;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;

const Button = styled.button`
  //background-color: ;
  padding: 13px 30px;
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
  transition: all 450ms;
  letter-spacing: .5px;
  margin-right: auto;
@media screen and (max-width: 600px){
  width: fit-content;
  margin: auto;
}
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
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
const SumbitWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  padding: 10px 0;
  padding-bottom: 40px;
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 0px;
  }
`;









