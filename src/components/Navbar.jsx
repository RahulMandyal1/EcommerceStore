import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { center, flexRow } from "../stylesheets/generalStyle";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

const Container = styled.header`
  padding: 0 4%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Wrapper = styled.div`
  padding: 2rem;
  ${flexRow}
`;

const Left = styled.div`
  flex: 1;
  margin: 0 1rem;
  ${flexRow};
  justify-content: flex-start;
`;

const Language = styled.span`
  font-size: 1.4rem;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  margin-left: 2.5rem;
  padding: 0.5rem 1rem;
  ${flexRow}
`;

const Input = styled.input`
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
  margin: 0 1rem;
  ${center}
`;

const Right = styled.div`
  flex: 1;
  margin: 0 1rem;
  ${flexRow};
  justify-content: flex-end;
`;

const MenusContainer = styled.nav`
  ${flexRow}
`;

const MenuItem = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  margin-left: 2.5rem;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search here" />
            <Search style={{ fontSize: 16, color: "gray" }}></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>RAHULMANDYAL</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/">HOME</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/products">PRODUCTS</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/single-product">SINGLE-PRODUCT</Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to="/user-cart">
                <ShoppingCartOutlined style={{ fontSize: 20 }} />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
