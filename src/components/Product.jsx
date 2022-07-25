import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { center } from "../stylesheets/generalStyle";

const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  transition: all 0.5s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding: 2rem;
  height  : 30rem;
  margin-bottom: 2rem;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
    display: inline-flex;
  }
`;

const ImageContainer = styled.figure`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100% !important;
  height: 100%;
`;

const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  background: #fff;
  border-radius: 50%;
  ${center};
  margin: 0 1rem;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
  }
`;

const IconsContainer = styled.div`
  display: flex;
`;

export default function Product(props) {
  return (
    <Container className="flex-24">
      <ImageContainer>
        <Image src={props.data.img} />
      </ImageContainer>
      <Info>
        <IconsContainer>
          <Icon>
            <ShoppingCartOutlined style={{ fontSize: "20" }} />
          </Icon>
          <Icon>
            <SearchOutlined style={{ fontSize: "20" }} />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined style={{ fontSize: "20" }} />
          </Icon>
        </IconsContainer>
      </Info>
    </Container>
  );
}
