import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "./Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import {ReactComponent as LogoSvg }from "../../assets/logo/adig.svg";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
          className="flexCenter animate whiteBg"
          style={y > 100 ? { boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"} : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <div className="nav-logo">
              <LogoSvg/>
            </div>
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Главная
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="our-service" spy={true} smooth={true} offset={-80}>
                Услуги
              </Link>
            </li>

            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                Цены
              </Link>
            </li>

            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="projects" spy={true} smooth={true} offset={-80}>
                Проекты
              </Link>
            </li>

            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="AboutUs" spy={true} smooth={true} offset={-80}>
                О нас
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
              Контакты
              </Link>
            </li>
          </UlWrapper>
          <NavbarButton>
            <a href="tel:+998977531401">Связаться</a>
          </NavbarButton>
        </NavInner>
      </Wrapper>
    </>
  );
}
const NavbarButton = styled.div`
  //background-color: ;
  padding: 11px 30px;
  border: unset;
  border-radius: 20px;
  color: #fff;
  z-index: 1;
  background: #0080ff;
  position: relative;
  font-weight: 600;
  font-size: 17px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  overflow: hidden;
  transition: all 450ms;
  letter-spacing: .5px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: rgb(0, 89, 255);
    //background-color: #222222;
    background-color: #0dc569;

    width: 0;
    border-radius: 15px;
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 450ms;

  }

  &:hover {
    cursor: pointer;

  }

  &:hover::before {
    width: 100%;
  }
  a{
    color: #fff ;
  }
  &:hover {
    background-color: #49CB86;
  }
  @media screen and (max-width: 800px){
    
  }
  @media screen and (max-width: 800px){
    display: none;
  }
`;

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
 
  @media screen and (min-width: 1600px){
    height: 100px !important;
  }
  @media screen and (max-width: 500px){
    height: 70px !important;
  }
  
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
   @media screen and (min-width: 1600px){
    width: 73%;
    margin: auto;
    }
  .nav-logo{
    height: 65px;
    width: fit-content;
    @media screen and (max-width: 800px){
      height: 50px;
      margin-left: 10px;
      margin-right: 50vw ! important;
    }
    svg{
      height: 100%;
      width: 100%;
    }
  }
  @media screen and (max-width: 600px){
    width: 100%;
    justify-content: space-between ;
    }
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  li{
    font-size: 16px;
  }
  
  @media (max-width: 760px) {
    display: none;
  }
`;



