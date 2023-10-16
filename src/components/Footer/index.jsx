import React from "react";
import {Wrapper} from "./style";
import {ReactComponent as InstagramSvg} from "../../assets/main/social-icons/instagram-svgrepo-com.svg";
import {ReactComponent as FaceBookSvg} from "../../assets/main/social-icons/facebook-svgrepo-com.svg";
import {ReactComponent as LinkedinSvg} from "../../assets/main/social-icons/linkedin-svgrepo-com.svg";
import {ReactComponent as TelegramSvg} from "../../assets/main/social-icons/telegram-svgrepo-com.svg";
import { Link } from "react-scroll";


const Footer = () => {
    return(
        <Wrapper>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Компания</h4>
                            <ul>
                                <li> <Link to="home" spy={true} smooth={true} >Главная</Link></li>
                                <li> <Link to="our-service" spy={true} smooth={true} >наши услуги</Link></li>
                                <li> <Link to="pricing" spy={true} smooth={true} >наши Цены</Link></li>
                                <li> <Link to="projects" spy={true} smooth={true} >Все проекты</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Разработка</h4>
                            <ul>
                                <li> <Link to="" spy={true} smooth={true} >FAQ</Link></li>
                                <li> <Link to="" spy={true} smooth={true} >Выполнить разработку</Link></li>
                                <li> <Link to="" spy={true} smooth={true} >Платежная система</Link></li>
                                <li> <Link to="" spy={true} smooth={true} >статус заказа</Link></li>
                                <li> <Link to="" spy={true} smooth={true} >варианты оплаты</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Интернет-магазин</h4>
                            <ul>
                               
                                <li> <Link to="" spy={true} smooth={true} >смотреть</Link></li>
                                <li> <Link to="" spy={true} smooth={true} >Лендинг</Link></li>
                                <li> <Link to="" spy={true} smooth={true} >Бизнес сайт</Link></li>
                                <li> <Link to="" spy={true} smooth={true} >Интернет магазин</Link></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>следуйте за нами</h4>
                            <div class="social-links">
                                <a href="#">
                                    <InstagramSvg/>

                                </a>
                                <a href="#">
                                    <TelegramSvg/>

                                </a>
                                <a href="#">
                                    <LinkedinSvg/>

                                </a>
                                <a href="#">
                                    <FaceBookSvg/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Wrapper>
    )
}
export default Footer