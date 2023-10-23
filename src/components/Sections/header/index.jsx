import React, {useEffect, useState} from "react";
import "toastify-js/src/toastify.css";
import {NumericFormat, PatternFormat} from "react-number-format";
import { TypeAnimation } from "react-type-animation";
import PopUp from "../../popUp";
import { HttpRequest } from "../../../hooks/httpRequest";
import { serviceData } from "../../../Constants/serviceType";
import {useNavigate} from "react-router-dom";
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
  // don't  edit this code
  const [popUp, setPopUp] = useState(false);

  //  you can edit this code and it connected with form below
  const [state, setState] = useState({
    name: "",
    number:"",
    email:"",
    service:"Лендинг"
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(state,e));
    setIsSubmit(true);

  }

  useEffect(() => {


  }, [formErrors]);

  const validate = (values,e) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Имя обязательно!";
    } else if (values.name.length < 4){
      errors.name = "Имя должно содержать не менее 4 символов!";
    }
    else if (values.number.length == "") {
      errors.number = "Номер обязательно ";
    }
    else if (values.number.length < 9) {
      errors.number = "Номер телефона должен состоять не менее чем из 9 символов!";
    } else {
      HttpRequest(
          {
            e,state,setState
          }
      )
          .then(()=> {
            navigate('/success')
            console.log(('Request sent successfully'))
          })
          .catch((err)=> {
            console.log(err)
          })
    }


    return errors;
  };
  

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

          // this form allows to clients send their data to company
          // it placed in components > sections > header
          // you can adit here
          
          <Form onSubmit={handleSubmit}>
            <FormContainer>
              <FormTitle> Свяжитесь с нами</FormTitle>
              <p style={formErrors.name ? { color: 'red' } :{ color: 'black' } }>{formErrors.name ? formErrors.name : "Имя"}</p>
              <Input className={"numb"}
                     value={state.name}
                     type={"Name"}
                     placeholder={"Имя"}
                     maxLength={30}
                     onChange={(e) => setState({ ...state, name: e.target.value.trim() })}
              />
              <p style={formErrors.number ? { color: 'red' } :{ color: 'black' } }>{formErrors.number ? formErrors.number : "Номер телефона"}</p>
              <NumericFormat
                  className={"input-numb"}
                  value={state.number}
                  type={'tel'}
                  maxLength={9}
                  placeholder={'Номер телефона'}
                  onChange={(e) => setState({ ...state, number: e.target.value })}
              />
              <p>Электронная почта</p>
              <Input
                  className={"numb"}
                  type="email"
                  placeholder={"Электронная почта "}
                  value={state.email}
                  onChange={(e) => setState({ ...state, email: e.target.value })}
              />

              <p>Сервис</p>

              <SelectInput
                  onChange={(e) =>
                      setState({ ...state, service: e.target.value })
                  }
              >
                {serviceData.map(({id,name}) => (
                    <Option key={id} value={`${name}`}>
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
