import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { flexRow } from "../stylesheets/generalStyle";

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 3.2rem;
  margin: 2rem 0;
`;

const FilterContainer = styled.section`
  padding: 4rem 6%;
`;

const FilterWrapper = styled.div`
  ${flexRow}
`;
const Filter = styled.div`
  ${flexRow}
`;

const FilterText = styled.h3`
  font-size: 2rem;
`;

const Select = styled.select`
  padding: 1rem;
  border: 0.1rem solid gray;
  margin: 0 2rem;
`;

const Option = styled.option`
  margin: 0.5rem 0;
  display: inline-block;
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <FilterContainer>
        <Title> DRESSES</Title>
        <FilterWrapper>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
              <Option>red</Option>
              <Option selected>white</Option>
              <Option>blue</Option>
              <Option>gray</Option>
              <Option>light dark</Option>
            </Select>
            <Select>
              <Option>S</Option>
              <Option>XS</Option>
              <Option selected>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
              <Option>XXXL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Popular Products</Option>
              <Option>High Rated</Option>
            </Select>
          </Filter>
        </FilterWrapper>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
