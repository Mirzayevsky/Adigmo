import {TELEGRAM_API,chatIds} from "../Constants/api"
export const HttpRequest = async ({
  e,
  state,
  setState,
}) => {
  e.preventDefault();
  const { name, number, email, service,text } = state;

  const FormData = `
    Name: ${name},
    Number: ${number},
    Email: ${email ? email: "unknown" },
    Service: ${service ? service: "unknown" },
    text: ${text}
    `;

  if ((name === "") | (number === null)) {
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
          setState({
            name: "",
            number:"",
            email:"",
            service:"",
            text:""
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
