import React, {useState} from "react";
// Components
import {Container, HeaderInfo, Wrapper} from "./styles";
import Card from "../../Card";
import PopUp from "../../popUp";
import {data} from "../../../data"

const Pricing = () => {
    const [popUp, setPopUp] = useState(false);

  return (
    <Wrapper id="pricing">
        {popUp ? <PopUp popUp={popUp} setPopUp={setPopUp}/> : ""}

        <HeaderInfo>
            <h1 className="font40 extraBold">Ознакомьтесь с нашими ценами</h1>
            <p className={"subtitle"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
        </HeaderInfo>
        <Container>
            {
                data.price.map(({title,subtitle,price,ruleTextOne,ruleTextThree,ruleTextTwo})=>{
                    return(
                        <Card
                            title={title}
                            price={price}
                            subtitle={subtitle}
                            ruleTextOne={ruleTextOne}
                            ruleTextThree={ruleTextThree}
                            ruleTexTwo={ruleTextTwo}
                            click={()=> setPopUp(true)}
                        />
                    )
                })
            }
        </Container>

    </Wrapper>
  );
}
export default Pricing






