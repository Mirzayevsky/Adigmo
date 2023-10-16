import React, {useState} from "react";
import styled from "styled-components";
import { HttpRequest } from "../../../hooks/httpRequest";

const  Contact = () => {
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
  }


  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold flexCenter">Давайте свяжемся с вами</h1>
            <p className="font19 flexCenter ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
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
                <input 
                type="number"  pattern="+998(##)###-##-##"  className="font20 extraBold" 
                 value={state.number}
                 onChange={(e) => setState({ ...state, number: e.target.value })}
                 />
                <label className="font13">Текс:</label>
                <input
                 type="text" id="subject" name="subject" className="font20 extraBold" 
                 value={state.text}
                 onChange={(e) => setState({ ...state, text: e.target.value })}
                  />
                <SumbitWrapper className="flex">
                  <Button >Отправить сообщение</Button>
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
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  h1{
    margin: 20px 0;
  }
  @media (max-width: 860px) {
    text-align: center;
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









