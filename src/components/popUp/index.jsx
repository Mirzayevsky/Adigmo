import React, { useState } from "react";
import { PatternFormat } from 'react-number-format';
import "toastify-js/src/toastify.css"
import {ReactComponent as ExitSvg}from '../../assets/main/red-icon.svg';
import {Button, Form, FormContainer, FormTitle, Option, SelectInput} from "./styles";
import {Cover, Input, PopUpWrapper} from "./styles";
import { HttpRequest } from "../../hooks/httpRequest";
import { serviceData } from "../../Constants/serviceType";
import  {useNavigate} from "react-router-dom";

const PopUp = ({setPopUp,popUp}) => {

    const [state, setState] = useState({
        name: "",
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
        )
            .then(()=> {
                navigate('/success')
                console.log(('Request sent successfully'))
            })
            .catch((err)=>{
                console.log(err)
            })

      }
    return(
        <PopUpWrapper>
            <Cover onClick={() => setPopUp(false)}/>
            <Form onSubmit={handleSubmit} >
                <div className="exit-button" onClick={()=>setPopUp(false)}>
                    <ExitSvg/>
                </div>
                <FormContainer>
                    <FormTitle> Свяжитесь с нами</FormTitle>
                    <Input className={"numb"}
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
        </PopUpWrapper>
    )
}
export default PopUp