import React, {useState} from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../../assets/img/contact-1.png";
import ContactImg2 from "../../../assets/img/contact-2.png";
import ContactImg3 from "../../../assets/img/contact-3.png";
import {useNavigate} from "react-router-dom";
import Toastify from "toastify-js";

const  Contact = () => {

  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const navigate = useNavigate();

  const TELEGRAM_API = `https://api.telegram.org/bot6402829230:AAHLtsSBT4yK5ATJtwmdYcJ5M7CFjpBqpjg/sendMessage`;
  const chatIds = [6090223711]; // Add the additional chat IDs you want to send the message to
  const message = `
     Name: ${nameValue},
     Number: ${numberValue},
     Text: ${textValue},
    `;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if the input values meet the required length
    if (nameValue.length < 5 || numberValue.length < 7) {
      alert("Пожалуйста, заполните форму");
      return; // Don't proceed with sending the message
    }
    try {
      for (const chatId of chatIds) {
        const response = await fetch(TELEGRAM_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        });
        const data = await response.json();
        if (data.ok) {
          Toastify({
            text: "Данные успешно отправлены",
            className: "info",
            style: {
              background: "linear-gradient(93.12deg, #1F5AFF 1.37%, #392ED6 54.75%, #1A2032 119.16%)",
            }
          }).showToast();
          console.log(`Message sent successfully to chat ID: `);
          setNameValue("")
          setNumberValue("")
          setTextValue("")
        } else {
          alert("Данные не отправляются")
          console.log(
              Error (`sending message to chat ID ${chatId}: ${data.description}`)
          );
        }
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleNameChange = (e) => {
    const newValue = e.target.value;
    setNameValue(newValue);
  };

  const handleNumberChange = (e) => {
    const newValue = e.target.value;
    setNumberValue(newValue);
  };
  const handleTextChange = (e) => {
    const newValue = e.target.value;
    setTextValue(newValue);
  };


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
                <input type="text" id="fname" name="fname"  className="font20 extraBold"  onChange={handleNameChange} />
                <label className="font13">Номер телефона :</label>
                <input type="number"  pattern="+998(##)###-##-##"  className="font20 extraBold"  onChange={handleNumberChange}/>
                <label className="font13">Текс:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold" onChange={handleTextChange} />
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









