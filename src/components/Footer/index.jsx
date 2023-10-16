import React from "react";
import {Wrapper} from "./style";
import {ReactComponent as InstagramSvg} from "../../assets/main/social-icons/instagram-svgrepo-com.svg";
import {ReactComponent as FaceBookSvg} from "../../assets/main/social-icons/facebook-svgrepo-com.svg";
import {ReactComponent as LinkedinSvg} from "../../assets/main/social-icons/linkedin-svgrepo-com.svg";
import {ReactComponent as TelegramSvg} from "../../assets/main/social-icons/telegram-svgrepo-com.svg";


const Footer = () => {
    return(
        <Wrapper>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Компания</h4>
                            <ul>
                                <li><a href="#">о нас</a></li>
                                <li><a href="#">наши услуги</a></li>
                                <li><a href="#">политика конфиденциальности</a></li>
                                <li><a href="#">Все проекты </a></li>
                            </ul>
                        </div>
                        {/* <div className="footer-col">
                            <h4>Разработка</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Выполнить разработку</a></li>
                                <li><a href="#">Платежная система</a></li>
                                <li><a href="#">статус заказа</a></li>
                                <li><a href="#">варианты оплаты</a></li>
                            </ul>
                        </div> */}
                        <div className="footer-col">
                            <h4>Интернет-магазин</h4>
                            <ul>
                                <li><a href="#">смотреть</a></li>
                                <li><a href="#">Лендинг</a></li>
                                <li><a href="#">Бизнес сайт</a></li>
                                <li><a href="#">Интернет магазин</a></li>
                            </ul>
                        </div>
                        {/* <div class="footer-col">
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
                        </div> */}
                    </div>
                </div>
            </footer>
        </Wrapper>
    )
}
export default Footer