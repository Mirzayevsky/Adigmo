import React, { useState,useEffect } from "react";
import "toastify-js/src/toastify.css"
import {ReactComponent as ExitSvg}from '../../assets/main/red-icon.svg';
import {Button, Form, FormContainer, FormTitle, Option, SelectInput} from "./styles";
import {Cover, Input, PopUpWrapper} from "./styles";
import { HttpRequest } from "../../hooks/httpRequest";
import { serviceData } from "../../Constants/serviceType";
import  {useNavigate} from "react-router-dom";
import { NumericFormat } from 'react-number-format';
const PopUp = ({setPopUp,popUp}) => {

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

        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(state);
        }
    }, [formErrors]);

    const validate = (values,e) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Имя обязательно!";
        } else if (values.name.length < 4){
            errors.name = "Имя должно содержать не менее 4 символов!";
        }
        if (values.number.length == "") {
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

    return(
        <PopUpWrapper>
            <Cover onClick={() => setPopUp(false)}/>
            <Form autoComplete="on" autoSave="on" onSubmit={handleSubmit}>
                <div className="exit-button" onClick={()=>setPopUp(false)}>
                    <ExitSvg/>
                </div>
                <FormContainer>
                    <FormTitle>
                        Свяжитесь с нами
                    </FormTitle>
                    <p style={formErrors.name ? { color: 'red' } :{ color: 'black' } }>{formErrors.name ? formErrors.name : "Имя"}</p>
                    <Input className={"numb"}
                           value={state.name}
                           type={"Name"}
                           placeholder={"Имя"}
                           maxLength={30}
                           onChange={(e) => setState({ ...state, name: e.target.value })}
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
                <Button > Отправить </Button>
            </Form>
        </PopUpWrapper>
    )
}
export default PopUp