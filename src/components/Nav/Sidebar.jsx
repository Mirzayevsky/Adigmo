import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import {ReactComponent as LogoSvg }from "../../assets/logo/adig.svg";


export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper  className={"animate"} sidebarOpen={sidebarOpen}>
      <SidebarHeader >
          <LogoSvg className="sidebar-logo"/>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="darkColor"
            style={{ padding: "10px 15px" }}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Главная
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="darkColor"
            style={{ padding: "10px 15px" }}
            to="services"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Услуги
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="darkColor"
            style={{ padding: "10px 15px" }}
            to="pricing"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Цены
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="darkColor"
            style={{ padding: "10px 15px" }}
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Проекты
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="darkColor"
            style={{ padding: "10px 15px" }}
            to="AboutUs"
            spy={true}
            smooth={true}
            offset={-60}
          >
            О нас
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="darkColor"
            style={{ padding: "10px 15px" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Контакты
          </Link>
        </li>
      </UlStyle>

    </Wrapper>
  );
}

const Wrapper = styled.nav`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-100vw")};
  z-index: 9999;
  background-color: #fff;
  color: #000 !important;
  transition: 0.3s ease;
 .sidebar-logo{
   height: 50px;
   width: fit-content;
   @media (max-width: 600px) {
    margin-right: 200px;
  }
 }
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
  padding: 10px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
    @media only screen and (max-width:600px) {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;
