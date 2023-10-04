import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../../Elements/PricingTable";
import {HeaderInfo, TableBox, TablesWrapper, Wrapper} from "./styles";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Ознакомьтесь с нашими ценами</h1>
            <p className="font13 subtitle">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="$29,99/mo"
                title="Starter"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                  { name: "Анализ рынка и конкурентов", cheked: true },
                  { name: "Профессиональный дизайн", cheked: true },
                  { name: "Уникальное наполнение контентом", cheked: true },
                  { name: "", cheked: false },
                  { name: "", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="$49,99/mo"
                title="Basic"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                  { name: "Product Offer", cheked: true },
                  { name: "Offer", cheked: true },
                  { name: "Product Offer #2", cheked: true },
                  { name: "Product", cheked: true },
                  { name: "Product Offer", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="$59,99/mo"
                title="Golden"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                  { name: "Product Offer", cheked: true },
                  { name: "Offer", cheked: true },
                  { name: "Product Offer #2", cheked: true },
                  { name: "Product", cheked: true },
                  { name: "Product Offer", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}






