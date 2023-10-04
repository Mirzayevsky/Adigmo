import React, { useEffect, useState } from "react";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import {useNavigate} from 'react-router-dom';
import { PatternFormat } from 'react-number-format';

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
    Wrapper
} from "./styles";
const  Header = () => {
    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const TELEGRAM_API = `https://api.telegram.org/bot6402829230:AAHLtsSBT4yK5ATJtwmdYcJ5M7CFjpBqpjg/sendMessage`;
    const chatIds = [6090223711]; // Add the additional chat IDs you want to send the message to
    const message = `
     Name: ${nameValue},
     Number:${numberValue},
     Email:${emailValue},
     Service:${selectedOption}
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
                    navigate(`/success`)
                    console.log(`Message sent successfully to chat ID: `);

                    setNameValue("")
                    setNumberValue("")
                    setEmailValue("")
                    setSelectedOption("")
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
    const handleEmailChange = (e) => {
        const newValue = e.target.value;
        setEmailValue(newValue);
    };
    const handleOptionChange = (e) => {
        const  newValue = e.target.value;
        setSelectedOption(newValue)
    };

    return(
        <Wrapper>
            <Container>
               <LeftSide>
                   <Title>
                       Экспертное создание
                       сайтов <span>
                       для увеличения
                       продаж
                   </span>
                   </Title>
               </LeftSide>
                <RightSide>
                    <Form>
                            <Form>
                                <FormContainer>
                                    <FormTitle> Свяжитесь с нами</FormTitle>
                                    <Input className={"numb"}
                                           value={nameValue}
                                           type={"Name"}
                                           placeholder={"Имя"}
                                           onChange={handleNameChange}/>
                                    <PatternFormat
                                        className={"input-numb"}
                                        format="+998(##)###-##-##"
                                        placeholder={"Телефон"}
                                        value={numberValue}
                                        onChange={handleNumberChange}
                                    />
                                    <Input
                                        className={"numb"}
                                        type="email"
                                        placeholder={"Электронная почта "}
                                        value={emailValue}
                                        onChange={handleEmailChange}
                                    />
                                    <SelectInput  value={selectedOption} onChange={handleOptionChange}>
                                        <Option value="Лендинг">Лендинг</Option>
                                        <Option value="Бизнессайт">Бизнес сайт</Option>
                                        <Option value="Интернетмагазин">Интернет магазин</Option>
                                    </SelectInput>

                                    <Button onSubmit={handleSubmit}> Отправить </Button>
                                </FormContainer>
                            </Form>

                    </Form>
                </RightSide>
            </Container>
        </Wrapper>
    )
}
export default Header