import MessageTik from "../MessageTik";
import { Box, Container, Title, Wrapper ,Button, Icon} from "./style";
const Success = ({setPopUp = () => {},setToggle}) => {
    setTimeout(()=> {
        setToggle(false)
        setPopUp(false)
    },2000)
    return(
        <Wrapper>
            <Container>
                <Box>
                <Icon>
                    <MessageTik/>
                    </Icon>
                    <Title>
                    Ваше сообщение отправлено в компанию ООО «Адигмо»!
                    </Title>
                    <p>
                    Сообщение скоро увидят сотрудники компании Адигмо.
Если вы хотите немедленно связаться, вот номер нашей компании 
<a className={"ancor"} href="tel:+998977531401">  +998 (97) 753 14 01</a>
                    </p>
                    
                    <Button onClick={()=> {
                        setToggle(false)
                        setPopUp(false)
                    }}>хорошо</Button>
                </Box>
            </Container>
        </Wrapper>
    )
}
export default Success