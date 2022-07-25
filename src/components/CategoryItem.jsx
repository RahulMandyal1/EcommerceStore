import styled from "styled-components";
import { flexCol, center } from "../stylesheets/generalStyle";

const Container = styled.div`
  height: 100%;
  flex: 1;
  margin: 0.5rem;
  position: relative;
  ${center}
`;

const ImageContainer = styled.figure`
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const InfoContainer = styled.div`
  background: transparent;
  position: absolute;
  ${flexCol};
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 3.5rem;
  color: #fff;
`;

const Button = styled.button`
  padding: 1rem;
  cursor: pointer;
  display: inline-block;
  color: gray;
  background: #fff;
  border: none;
  margin: 1rem 0;
`;

export default function CategoryItem(props) {
  return (
    <Container>
      <ImageContainer>
        <Image src={props.data.img} />
      </ImageContainer>
      <InfoContainer>
        <Title>{props.data.title}</Title>
        <Button>SHOP NOW</Button>
      </InfoContainer>
    </Container>
  );
}
