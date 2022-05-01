import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'

const Container = styled.aside`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    background-color: black;
    display: none;
    left: 0;
    transition: all 0.2s ease;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    color: white;
    padding: ${({ isOpen }) => (isOpen ? "200px 0 0 0" : "0")};
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 768px){
        display: flex;
    }
`
const CloseIcon = styled(FaTimes)`
    color: white;
`
const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
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
height: 20px;
padding: 5px;
margin-bottom: 40px;
`;
const MenuItems = styled.div`
display: flex;
flex-direction: column;
width: 50%;
align-items: center;
`
const MenuItem = styled.span`
margin-bottom: 40px;
font-size: 24px;

    &:hover{
    color: teal;
}
`
const MenuWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <Container isOpen={isOpen}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <SearchContainer>
                <Input />
                <Search style={{ color: "gray", fontSize: 16 }} onClick={toggle} />
            </SearchContainer>
            <MenuItems>
                <MenuItem onClick={toggle}>REGISTER</MenuItem>
                <MenuItem onClick={toggle}>SIGN IN</MenuItem>
                <MenuWrapper>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                    <MenuItem onClick={toggle}>EN</MenuItem>
                </MenuWrapper>
            </MenuItems>
        </Container>
    )
}

export default Sidebar