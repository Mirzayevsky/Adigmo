import React, { useEffect, useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { useNavigate } from "react-router-dom";
import { PatternFormat } from "react-number-format";
import { TypeAnimation } from "react-type-animation";
import PopUp from "../../popUp";
import {TELEGRAM_API,chatIds} from "../../../Constants/api"
import {
  Button,
  Container,
  Form,
  FormContainer,
  SelectInput,
  Option,
  FormTitle,
  Input,
  LeftSide,
  RightSide,
  Title,
  Wrapper,
  MobileBtn,
} from "./styles";
const Header = () => {
  const [popUp, setPopUp] = useState(false);
  const [state, setState] = useState({
    name: "",
    number:null,
    email:"",
    service:""
  });
  const { name, number,email, service} = state;

  const FormData = `
  Name: ${name},
  Number: ${number},
  Email: ${email},
  Service: ${service}
 `;
 

  const serviceData = [
    {
      id:0,
      name:"Лендинг",
    },
    {
      id:1,
      name:"Бизнес сайт",
    },
    {
      id:2,
      name:"Интернет магазин",
    },
  ]


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      (name === "") |
      (number === null) |
      (email === "") |
      (service === "") 
    ) {
      console.log("formData is Empty");
    } else{
      try{
        for (const chatId of chatIds) {
          const response = await fetch(TELEGRAM_API, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: FormData,
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
           
          } else {
            alert("Данные не отправляются")
            console.log(
                Error (`sending message to chat ID ${chatId}: ${data.description}`)
            );
          }
        }
    
       }
       catch (error){
        console.log("Error:", error);
       }
    }

  
   
  

    
  };

 

  return (
    <Wrapper id={"home"}>
      {popUp ? <PopUp popUp={popUp} setPopUp={setPopUp} /> : ""}s{" "}
      <Container>
        <LeftSide>
          <Title>
            Экспертное создание
            <div>
              <TypeAnimation
                sequence={[
                  "сайтов", // Types 'One'
                  2000, // Waits 1s
                  "Бизнес сайта", // Deletes 'One' and types 'Two'
                  4000, // Waits 2s
                  "Интернет магазина",
                  4000,
                  // Types 'Three' without deleting 'Two'
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                speed={7}
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "", display: "inline-block" }}
              />
            </div>
            <div>для увеличения продаж</div>
          </Title>
          <MobileBtn onClick={() => setPopUp(true)}>начать</MobileBtn>
        </LeftSide>

        <RightSide>
          <Form onSubmit={handleSubmit}>
            <FormContainer>
              <FormTitle> Свяжитесь с нами</FormTitle>
              <Input
                className={"numb"}
                value={state.name}
                type={"Name"}
                placeholder={"Имя"}
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />

              <PatternFormat
                className={"input-numb"}
                format="+998(##)###-##-##"
                placeholder={"Телефон"}
                value={state.number}
                onChange={(e) => setState({ ...state, number: e.target.value })}
              />
              <Input
                className={"numb"}
                type="email"
                placeholder={"Электронная почта "}
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
              <SelectInput 
               onChange={(e) =>
                  setState({ ...state, service: e.target.value })
                }
                >

                {serviceData.map(({id,name}) => (
                  <option key={id} value={`${name}`}>
                    {" "}
                    {name}
                  </option>
                ))}

              </SelectInput>
            </FormContainer>
            <Button> Отправить </Button>
          </Form>
        </RightSide>
      </Container>
    </Wrapper>
  );
};
export default Header;
