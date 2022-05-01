import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { FaBars } from "react-icons/fa";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: black;
  color: white;
  z-index: ${({ isOpen }) => (isOpen ? "0" : "100")};
`;
const Wrapper = styled.div`
  padding: 6px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`;
const Language = styled.span`
  font-size: 14;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  border: none;
  background-color: black;
  color: white;
  width: 100%;
  outline: none;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  @media screen and (max-width: 768px){
    text-align: left;
  }
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px){
    display: none;
  }
`;
const Mobile = styled.div`
  flex: 1;
  display: none;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px){
    display: flex;
  }
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = ({ isOpen, toggle }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>CHUMI</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
        <Mobile>
          <FaBars fontSize="24px" cursor="pointer" z-index="999" onClick={toggle} />
        </Mobile>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
