import React from "react";
import { Container, LinkWrapper, Logo, Wrapper,Button } from "./style";
import { ReactComponent as LogoSvg } from "../../assets/logo/adig.svg";
import { Link } from "react-router-dom";
const Navigationbar = () => {
  return (
    <Wrapper>
      <Container>
         <Logo>
          <LogoSvg />
        </Logo>
            <LinkWrapper>
            <li>
                <Link to={"#home"}>Главная</Link>
            </li>
            <li>
                <Link to={"#home"}>Главная</Link>
            </li>
            <li>
                <Link to={"#home"}>Главная</Link>
            </li>
            <li>
                <Link to={"#home"}>Главная</Link>
            </li>
            <li>
                <Link to={"#home"}>Главная</Link>
            </li>
            <li>
                <Link to={"#home"}>Главная</Link>
            </li>
            </LinkWrapper>
            <Button>Get Started</Button>
      </Container>
    </Wrapper>
  );
};
export default Navigationbar;
