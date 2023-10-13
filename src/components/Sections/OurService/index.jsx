import React from "react";
import {Button, Container, ServiceBox, ServiceWrapper, Title, Wrapper} from "./style";
import {ReactComponent as ScreenSvg} from "../../../assets/svg/idea.svg";
import {ReactComponent as TopSvg} from "../../../assets/svg/to top.svg";
import {ReactComponent as ShopSvg} from "../../../assets/svg/online shopping.svg";

const OurService = () => {

    return(
        <Wrapper>
            <Container>
                <h1 className="font40 extraBold">Создание сайтов <span>от Adigmo!</span></h1>
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
                        <Button>Заказать</Button>
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
                        <Button>Заказать</Button>
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
                        <Button>Заказать</Button>
                    </ServiceBox>
                </ServiceWrapper>
            </Container>
        </Wrapper>
    )
}
export default OurService