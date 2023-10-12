import React from "react";
import {Wrapper} from "./style";
const Footer = () =>{
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
                        <div className="footer-col">
                            <h4>Разработка</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Выполнить разработку</a></li>
                                <li><a href="#">Платежная система</a></li>
                                <li><a href="#">статус заказа</a></li>
                                <li><a href="#">варианты оплаты</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Интернет-магазин</h4>
                            <ul>
                                <li><a href="#">смотреть</a></li>
                                <li><a href="#">Лендинг</a></li>
                                <li><a href="#">Бизнес сайт</a></li>
                                <li><a href="#">Интернет магазин</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>следуйте за нами</h4>
                            <div class="social-links">
                                <a href="#"></a>
                                <a href="#"></a>
                                <a href="#"></a>
                                <a href="#"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Wrapper>
    )
}
export default Footer