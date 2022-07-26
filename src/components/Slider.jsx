import styled from "styled-components";
import { sliderItems } from "../../data";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { center} from "../stylesheets/generalStyle";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "3rem"};
  right: ${(props) => props.direction === "right" && "3rem"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100% !important;
  width: 100vw;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.currentSlideItem * -100}vw);
`;

const Slide = styled.div`
  flex: 1 0 100%;
  width: 100vw;
  height: 100vh;
  ${center}
  background-color: #${(props) => props.bg};
  padding: 4% 6%;
`;

const ImgContainer = styled.figure`
  flex: 0 1 48%;
  height: 70%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h2`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper currentSlideItem={slideIndex}>
        {sliderItems.map((item) => {
          return (
            <Slide bg={item.bg} key ={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}
