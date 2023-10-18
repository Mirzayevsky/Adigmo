import { Box, Container, Title, Wrapper ,Button} from "./style";
const Success = ({setPopUp,setToggle}) => {
    setTimeout(()=>{
        setToggle(false)
        setPopUp(false)
    },1500)
    return(
        <Wrapper>
            <Container>
                <Box>
                    <Title>
                    Данные успешно отправлены
                    </Title>
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