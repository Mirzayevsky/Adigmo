import MessageTik from "../MessageTik";
import { Box, Container, Title, Wrapper, Button, Icon } from "./style";
const Success = ({ setPopUp = () => {}, setToggle }) => {
  setTimeout(() => {
    setToggle(false);
    setPopUp(false);
  }, 20500);
  return (
    <Wrapper>
      <Container>
        <Box>
          <Icon>
            <MessageTik />
          </Icon>
          <Title>Здравствуйте, дорогой друг Адигмо!</Title>
          <p>
          Ура! Ваша форма контакта успешно отправлена! Наша команда с нетерпением ждет возможности связаться с вами.
            {/* <a className={"ancor"} href="tel:+998977531401">
              {" "}
              +998 (97) 753 14 01
            </a> */}
          </p>
          <p>
          Ожидайте звонка или письма от наших специалистов в ближайшее время. Вместе мы воплотим ваши идеи в реальность и создадим успешное партнерство.
          </p>
          <p>Благодарим вас за обращение в Адигмо и до скорого общения!</p>
          <p>С уважением, Команда Адигмо</p>

          <Button
            onClick={() => {
              setToggle(false);
              setPopUp(false);
            }}
          >
            хорошо
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
};
export default Success;
