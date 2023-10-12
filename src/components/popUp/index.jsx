import React, { useEffect, useState } from "react";
import {AdviceForm, AdviceWrapper, Container, Title, Input, PopUpWrapper, Cover} from "./styles";
import { PatternFormat } from 'react-number-format';
import "toastify-js/src/toastify.css"
import img from '../../assets/main/red-icon.png';
import {useNavigate} from 'react-router-dom';
const PopUp = ({popUp,setPopUp}) => {
    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const TELEGRAM_API = `https://api.telegram.org/bot6390607652:AAEQlzn_NNraLCmmSKoNX7r5hoYqK2zR9sY/sendMessage`;
    const chatIds = [1516652790]; // Add the additional chat IDs you want to send the message to
    const message = `
     Name: ${nameValue},
     Number:${numberValue}
    `;
    const navigate = useNavigate();
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

                    // navigate('/success');

                    console.log(`Message sent successfully to chat ID: `);
                    setNameValue("")
                    setNumberValue("")
                    setPopUp(false)
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
    return(
       <PopUpWrapper>
           <Cover onClick={() => setPopUp(false)}/>

           <AdviceWrapper >
               <img src={img} className={"svg-one"} alt={"Exit"} onClick={() => setPopUp(false)}/>
               <Container>
                   <Title>
                       Заполнить форму
                   </Title>
                   <AdviceForm onSubmit={handleSubmit}>
                       <>
                           <PatternFormat
                               className={"num-for"}
                               format="+998(##)###-##-##"
                               value={numberValue}
                               allowEmptyFormatting
                               mask="_"
                               onChange={handleNumberChange}
                           />

                           <Input placeholder={"Name"}
                                  value={nameValue}
                                  onChange={handleNameChange}
                           />
                           {/*<Text id="inputText"/>*/}
                       </>
                       <button >
                           Отправить
                       </button>
                   </AdviceForm>
               </Container>
           </AdviceWrapper>
       </PopUpWrapper>
    )
}
export default PopUp