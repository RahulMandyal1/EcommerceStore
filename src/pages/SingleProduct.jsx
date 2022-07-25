import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { flexRow } from "../stylesheets/generalStyle";


const Container = styled.div``;

const ProductWrapper = styled.section`
  padding: 4rem 6%;
  ${flexRow};
  align-items: flex-start;
`;
const ImageContainer = styled.figure`
  flex: 0 1 48%;
`;
const Image = styled.img`
  width: 100% !important;
  max-height: 50rem;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 0 1 48%;
`;
const ProductTitle = styled.h2`
  font-size: 5rem;
  margin-bottom: 2rem;
  font-weight: 400;
`;
const Description = styled.p`
  margin-bottom: 2rem;
`;
const Price = styled.h3`
  margin-bottom: 2rem;
  font-size: 4rem;
  font-weight: 400;
`;

const FilterContainer = styled.div`
  ${flexRow};
  width: 70%;
`;

const FilterTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  margin-right: 2rem;
`;

const Filter = styled.div`
  ${flexRow};
`;

const FilterColor = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: ${(props) => props.color};
  border-radius: 50%;
  margin: 0 0.2rem;
`;

const SizeFilter = styled.select`
  padding: 0.5rem;
`;

const Option = styled.option``;

const AddContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem 0;
  ${flexRow};
  width: 70%;
`;
const AmountContainer = styled.div`
  ${flexRow}
`;
const Button = styled.button`
  padding: 1rem;
  border: 0.2rem solid teal;
  background: transparent;
  &:hover {
    background: teal;
    color: #fff;
    transition: 0.1s all ease-in-out;
  }
`;
const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <ProductWrapper>
        <ImageContainer>
          <Image src="https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        </ImageContainer>
        <InfoContainer>
          <ProductTitle>This is the product title</ProductTitle>
          <Description>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </Description>
          <Price>$43</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <SizeFilter>
                <Option>S</Option>
                <Option selected>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </SizeFilter>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </ProductWrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
