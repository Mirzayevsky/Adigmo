import React, { useState } from "react";
// Components
import ProjectBox from "../../Elements/ProjectBox";
// Assets
import img1 from "../../../assets/main/portfolio/photo_2023-10-15_13-35-44.jpg";
import img2 from "../../../assets/main/portfolio/photo_2023-10-15_13-35-49.jpg";
import img3 from "../../../assets/main/portfolio/photo_2023-10-15_13-35-53.jpg";
import img4 from "../../../assets/main/portfolio/photo_2023-10-15_13-36-01.jpg";
import img5 from "../../../assets/main/portfolio/photo_2023-10-15_13-36-05.jpg";
import img6 from "../../../assets/main/portfolio/612.png";
import { HeaderInfo, Wrapper, Button } from "./styles";

const Projects = () => {
  const [visible, setVisible] = useState(6);
  const [showSeeMore, setShowSeeMore] = useState(true);
  const [posts, setPosts] = useState([
    {
      id: 0,
      img: img1,
      title: "UNHCR",
      description:
        "Используем передовые решения для быстрой и безопасной работы ваших",
      link: "https://www.unhcr.org/",
    },
    {
      id: 1,
      img: img6,
      title: "TRUSTPILOT",
      description:
        "Используем передовые решения для быстрой и безопасной работы ваших",
      link: "https://www.trustpilot.com/",
    },
    {
      id: 2,
      img: img3,
      title: "EXANTE",
      description:
        "Используем передовые решения для быстрой и безопасной работы ваших",
      link: "https://exante.eu/",
    },
    {
      id: 3,
      img: img4,
      title: "AllHDD",
      description:
        "Используем передовые решения для быстрой и безопасной работы ваших",
      link: "https://www.allhdd.com/",
    },
    {
      id: 4,
      img: img5,
      title: "AVATRADE",
      description:
        "Получите возможность торговать CFD на FX, индивидуальную поддержку, бескомпромиссную безопасность",
      link: "https://www.avatrade.com/",
    },
    {
      id: 6,
      img: img2,
      title: "LEGEND",
      description:
        "Используем передовые решения для быстрой и безопасной работы ваших",
      link: "https://www.legendlondon.co/",
    },
    {
      id: 7,
      img: img4,
      title: "AllHDD",
      description:
        "Используем передовые решения для быстрой и безопасной работы ваших",
      link: "https://www.allhdd.com/",
    },
    {
      id: 8,
      img: img5,
      title: "AVATRADE",
      description:
        "Получите возможность торговать CFD на FX, индивидуальную поддержку, бескомпромиссную безопасность",
      link: "https://www.avatrade.com/",
    },
    {
      id: 9,
      img: img2,
      title: "LEGEND",
      description:
        "Используем передовые решения для быстрой и безопасной работы ваших",
      link: "https://www.legendlondon.co/",
    },
  ]);

  const handleLoadMore = () => {
    setVisible(visible + 3);
    const postsLength = posts.length;
    const nowShowing = visible + 3;
    if (postsLength <= nowShowing) {
      setShowSeeMore(false);
    }
  };


  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Наши замечательные проекты</h1>
            <p className={"subtitle"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">

            {posts &&
              posts.slice(0, visible).map(({id,img,title,description,link}) => {
                return(
                  <div key={id} className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <ProjectBox
                      img={img}
                      title={title}
                      text={description}
                      link={link}
                      action={() => alert("clicked")}
                  />
                </div>
                )
              })}
          </div>
          <div className="row flexCenter">
            {
             posts.length === 0 ? "" : <Button onClick={handleLoadMore}>Загрузить Еще</Button>
            }
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Projects;
