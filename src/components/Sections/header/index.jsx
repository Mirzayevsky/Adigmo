import React, { useState } from "react";
import "toastify-js/src/toastify.css";
import { PatternFormat } from "react-number-format";
import { TypeAnimation } from "react-type-animation";
import PopUp from "../../popUp";
import { HttpRequest } from "../../../hooks/httpRequest";
import { serviceData } from "../../../Constants/serviceType";
import {useNavigation} from "react-router-dom";
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
import {useNavigate} from "react-router-dom";
const Header = () => {
  const [popUp, setPopUp] = useState(false);
  const [state, setState] = useState({
    name:"",
    number:"",
    email:"",
    service:"Лендинг"
  });
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    HttpRequest(
      {
        e,state,setState
      }
    ).then(()=> {
      navigate('/success')
      console.log(('Request sent successfully'))
    })
     .catch((err)=>{
          console.log(err)
        })
  }

  return (
    <Wrapper id={"home"}>
      {popUp ? <PopUp popUp={popUp}  setPopUp={setPopUp} /> : ""}
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
                required={true} 
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />

              <PatternFormat
                className={"input-numb"}
                format="+998(##)###-##-##"
                placeholder={"Телефон"}
                value={state.number}
                required={true} 

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
                  required={true}
               onChange={(e) =>
                  setState({ ...state, service: e.target.value })
                }
                >
                {serviceData?.map(({id,name}) => (
                  <Option key={id}  value={name}>
                    {name}
                  </Option>
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
