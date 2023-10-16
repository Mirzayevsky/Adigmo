import Toastify from "toastify-js";
import {TELEGRAM_API,chatIds} from "../Constants/api"

export const HttpRequest = async ({
  e,
  state,
  setState
}) => {
  const { name, number, email, service } = state;

  const FormData = `
    Name: ${name},
    Number: ${number},
    Email: ${email},
    Service: ${service}
    `;
  e.preventDefault();

  if ((name === "") | (number === null) | (email === "") | (service === "")) {
    console.log("formData is Empty");
  } else {
    try {
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
          setState({
            name: "",
            number:"",
            email:"",
            service:""
          })
          
          console.log(`Message sent successfully to chat ID: `);
        } else {
          alert("Данные не отправляются");
          console.log(
            Error(`sending message to chat ID ${chatId}: ${data.description}`)
          );
        }
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }
};
