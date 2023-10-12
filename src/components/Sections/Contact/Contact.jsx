import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../../assets/img/contact-1.png";
import ContactImg2 from "../../../assets/img/contact-2.png";
import ContactImg3 from "../../../assets/img/contact-3.png";

const  Contact = () => {
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
              <Form>
                <label className="font13">Имя и фамилия:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="font13">Электронная почта:</label>
                <input type="text" id="email" name="email" className="font20 extraBold" />
                <label className="font13">Тема:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold" />
                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" />
              </Form>
          <SumbitWrapper className="flex">
            <ButtonInput type="submit" value="Написать сообщение" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
          </SumbitWrapper>


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
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  background-color: #0080ff;
  width: 100%;
  border: 0;
  padding: 15px;
  outline: none;
  color: #fff;
  margin: 30px 0;
  margin-left:140px;
  :hover {
    background-color: #49CB86;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









