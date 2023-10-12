import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../../Elements/PricingTable";
import {Container, HeaderInfo, TableBox, TablesWrapper, Wrapper} from "./styles";
import Card from "../../Card";

const Pricing = () => {













    const data = [
        {
            id:0,
            title:"Лендинг",
            price:99,
            subtitle:"Etiam ac convallis enim, eget euismod dolor.",
            ruleTextOne:"Анализ рынка и конкурентов",
            ruleTextTwo:"Профессиональный дизайн",
            ruleTextThree:"Уникальное наполнение контентом"
        },
        {
            id:1,
            title:"Бизнес сайт",
            price:299,
            subtitle:"Etiam ac convallis enim, eget euismod dolor.",
            ruleTextOne:"Адаптация под бизнес-цели",
            ruleTextTwo:"Оптимизированная структура сайта",
            ruleTextThree:"Продвинутые инструменты для конверсии"
        },
        {
            id:2,
            title:"Интернет магазин",
            price:499,
            subtitle:"Etiam ac convallis enim, eget euismod dolor.",
            ruleTextOne:"Гибкая система управления товарами",
            ruleTextTwo:"Оптимизированная структура сайта",
            ruleTextThree:"Интеграция с платежными системами"
        },
    ]
  return (
    <Wrapper id="pricing">
        <HeaderInfo>
            <h1 className="font40 extraBold">Ознакомьтесь с нашими ценами</h1>
            <p className={"subtitle"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
        </HeaderInfo>


        <Container>
            {
                data.map(({title,subtitle,price,ruleTextOne,ruleTextThree,ruleTextTwo})=>{
                    return(
                        <Card
                            title={title}
                            price={price}
                            subtitle={subtitle}
                            ruleTextOne={ruleTextOne}
                            ruleTextThree={ruleTextThree}
                            ruleTexTwo={ruleTextTwo}
                        />
                    )
                })
            }
        </Container>

    </Wrapper>
  );
}
export default Pricing






