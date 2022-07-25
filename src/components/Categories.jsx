import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../../data";

const Container = styled.section`
  padding: 4rem 6%;
  height: 70vh;
  display: flex;
`;

export const Categories = () => {
  return (
    <Container>
      {categories.map((item) => {
        return <CategoryItem data={item} key={item.id} />;
      })}
    </Container>
  );
};
