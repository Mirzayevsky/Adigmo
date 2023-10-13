import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../../Elements/ProjectBox";
import FullButton from "../../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../../assets/img/projects/1.png";
import imgOne from "../../../assets/main/mock.jpg"
import {HeaderInfo,AddLeft,Advertising,ButtonsRow,AddRight,AddLeftInner,ImgWrapper,Wrapper} from "./styles";

export default function Projects() {
  return (
      <Wrapper id="projects">
        <div className="whiteBg">
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Наши замечательные проекты</h1>
              <p className={"subtitle"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </HeaderInfo>
            <div className="row textCenter">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                    img={imgOne}
                    title="Замечательный проект"
                    text="Используем передовые решения для быстрой и безопасной работы ваших"
                    action={() => alert("clicked")}
                />
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                    img={imgOne}
                    title="Замечательный проект"
                    text="Используем передовые решения для быстрой и безопасной работы ваших"
                    action={() => alert("clicked")}
                />
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                    img={imgOne}
                    title="Замечательный проект"
                    text="Используем передовые решения для быстрой и безопасной работы ваших"
                    action={() => alert("clicked")}
                />
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                    img={imgOne}
                    title="Замечательный проект"
                    text="Используем передовые решения для быстрой и безопасной работы ваших"
                    action={() => alert("clicked")}
                />
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                    img={imgOne}
                    title="Замечательный проект"
                    text="Используем передовые решения для быстрой и безопасной работы ваших"
                    action={() => alert("clicked")}
                />
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                    img={imgOne}
                    title="Замечательный проект"
                    text="Используем передовые решения для быстрой и безопасной работы ваших"
                    action={() => alert("clicked")}
                />
              </div>
            </div>
            <div className="row flexCenter">
              <div style={{ margin: "50px 0", width: "200px" }}>
                <FullButton title="Загрузить Подробнее" action={() => alert("clicked")} />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
  );
}

