import styled from "styled-components";
import { flexRow } from "../stylesheets/generalStyle";
import { popularProducts } from "../../data";
import Product from "./Product";

const Container = styled.section`
  padding: 2rem 6%;
  ${flexRow};
  flex-wrap: wrap;
`;

export default function Products() {
  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product data={item} key={item.id} />;
      })}
    </Container>
  );
}
