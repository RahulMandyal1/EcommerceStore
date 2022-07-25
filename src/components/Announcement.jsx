import styled from "styled-components";
import { center } from "../stylesheets/generalStyle";

const Container = styled.div`
  width: 100%;
  ${center}
  height  : 3.5rem;
  color: #fff;
  background: teal;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
