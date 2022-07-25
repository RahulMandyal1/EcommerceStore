import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { center, flexCol, flexRow } from "../stylesheets/generalStyle";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const CartContainer = styled.section`
  padding: 4rem 6%;
`;
const CartWrapper = styled.div``;
const Title = styled.h2`
  text-align: center;
  font-size: 3.2rem;
  font-weight: 400;
`;
const Top = styled.div`
  ${flexRow};
  margin: 2rem 0;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 1rem 1.5rem;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  border-color: black;
`;
const TextButton = styled.button`
  display: inline-block;
  border: none;
  background: transparent;
  text-decoration: underline;
  margin: 0 1rem;
`;
const TextButtons = styled.div``;
const Info = styled.div`
  flex: 3;
  ${flexCol};
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid #dddddd;
  padding: 2rem 0;
  margin-right: 4rem;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Detail = styled.div`
  margin: 0 2rem;
  padding: 2rem;
`;
const ImageContainer = styled.figure``;
const Image = styled.img`
  width: 20rem;
  object-fit: cover;
`;
const ProductTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: normal;
  font-size: 2rem;
`;
const ProductId = styled.div`
  margin-bottom: 1rem;
`;
const ProductColor = styled.div`
  margin-bottom: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${(props) => props.color};
  margin-bottom: 1rem;
`;

const ProductSize = styled.div`
  margin-bottom: 1rem;
`;

const BoldText = styled.span`
  font-weight: 600;
  font-size: 2rem;
`;

const PriceDetail = styled.div`
  ${flexCol};
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProductPrice = styled.h2`
  font-size: 2.4rem;
  font-weight: normal;
  text-align: center;
  margin-top: 1rem;
`;

const ProductAmount = styled.span`
  font-size: 1.8rem;
  margin: 0 1rem;
  width: 3rem;
  height: 4rem;
  ${center};
  border-radius: 1rem;
  border: 0.1rem solid teal;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 1rem;
  padding: 2rem;
  height : 55vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <CartContainer>
        <Title>YOUR BAG</Title>
        <CartWrapper>
          <Top>
            <TopButton type="ghost-btn">Continue Shopping</TopButton>
            <TextButtons>
              <TextButton>Shopping Bags(0)</TextButton>
              <TextButton>Your Wishlist(0)</TextButton>
            </TextButtons>
            <TopButton type="filled">Checkout Now</TopButton>
          </Top>
          <Bottom>
            <Info>
              <ProductContainer>
                <ProductDetail>
                  <ImageContainer>
                    <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                  </ImageContainer>
                  <Detail>
                    <ProductTitle>
                      <BoldText>Product : </BoldText>THIS IS THE PRODUCT NAME
                    </ProductTitle>
                    <ProductId>
                      <BoldText>ID : </BoldText> 2347892342973492384
                    </ProductId>
                    <ProductColor color="red" />
                    <ProductSize>
                      <BoldText>SIZE : </BoldText>XL
                    </ProductSize>
                  </Detail>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>1</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 20</ProductPrice>
                </PriceDetail>
              </ProductContainer>
              <ProductContainer>
                <ProductDetail>
                  <ImageContainer>
                    <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                  </ImageContainer>
                  <Detail>
                    <ProductTitle>
                      <BoldText>Product : </BoldText>THIS IS THE PRODUCT NAME
                    </ProductTitle>
                    <ProductId>
                      <BoldText>ID : </BoldText> 2347892342973492384
                    </ProductId>
                    <ProductColor color="blue" />
                    <ProductSize>
                      <BoldText>SIZE : </BoldText>XL
                    </ProductSize>
                  </Detail>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>1</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 20</ProductPrice>
                </PriceDetail>
              </ProductContainer>
              <ProductContainer>
                <ProductDetail>
                  <ImageContainer>
                    <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                  </ImageContainer>
                  <Detail>
                    <ProductTitle>
                      <BoldText>Product : </BoldText>THIS IS THE PRODUCT NAME
                    </ProductTitle>
                    <ProductId>
                      <BoldText>ID : </BoldText> 2347892342973492384
                    </ProductId>
                    <ProductColor color="black" />
                    <ProductSize>
                      <BoldText>SIZE : </BoldText>XL
                    </ProductSize>
                  </Detail>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>1</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 20</ProductPrice>
                </PriceDetail>
              </ProductContainer>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </CartWrapper>
      </CartContainer>
      <Footer />
    </Container>
  );
};

export default Cart;
