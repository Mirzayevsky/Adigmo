import React, {useState} from "react";
import {Button, Container, ServiceBox, ServiceWrapper, Title, Wrapper} from "./style";
import {ReactComponent as ScreenSvg} from "../../../assets/svg/idea.svg";
import {ReactComponent as TopSvg} from "../../../assets/svg/to top.svg";
import {ReactComponent as ShopSvg} from "../../../assets/svg/online shopping.svg";
import PopUp from "../../popUp";

const OurService = () => {
    const [popUp, setPopUp] = useState({toggle:false,data:""});


    return(
        <Wrapper id={"our-service"}>
            {popUp.toggle ? <PopUp popUp={popUp} setPopUp={setPopUp}/> : ""}

            <Container>
                <h1 className="font40 extraBold">Создание сайтов <span>от Adigmo!</span></h1>
                <p className={"subtitle"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <ServiceWrapper>
                    <ServiceBox>
                        <div className={"svg-wrapper"}>
                            <ScreenSvg/>
                        </div>
                        <p className={"title"}>
                            Лендинг
                        </p>
                        <p className={"text"}>
                            Преобразуем идею в лендинг с высокой конверсией
                        </p>
                        <Button onClick={()=> setPopUp(true)}>Заказать</Button>
                    </ServiceBox>
                    <ServiceBox>
                        <div className={"svg-wrapper"}>
                            <TopSvg/>
                        </div>
                        <p className={"title"}>
                            Бизнес сайт
                        </p>
                        <p className={"text"}>
                            Корпоративные сайты, усиливающие ваш бренд онлайн
                        </p>
                        <Button onClick={()=> setPopUp(true)}>Заказать</Button>
                    </ServiceBox>
                    <ServiceBox>
                        <div className={"svg-wrapper"}>
                            <ShopSvg/>
                        </div>
                        <p className={"title"}>
                            Интернет магазин
                        </p>
                        <p className={"text"}>
                            Интернет-магазины, созданные для максимальных продаж
                        </p>
                        <Button onClick={()=> setPopUp(false)}>Заказать</Button>
                    </ServiceBox>
                </ServiceWrapper>
            </Container>
        </Wrapper>
    )
}
export default OurService