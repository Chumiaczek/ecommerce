import { Add, Remove } from '@material-ui/icons'
import React, { useState } from "react";
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Sidebar from '../components/Sidebar'

const Container = styled.div`
    background-color: black;
    color: white;
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    border-top: solid teal 1px;
    border-bottom: solid teal 1px;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Image = styled.img`
    width: 50%;
    @media screen and (max-width: 768px){
        width: 80%;
    }
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    @media screen and (max-width: 768px){
        padding: 0;
    }
`
const Title = styled.h1`
    font-weight: 800;
    background-color: #111111;
    border-radius: 5px;
    padding: 5px 20px;
    @media screen and (max-width: 768px){
        margin-top: 20px;
        text-align: center;
    }
`
const Desc = styled.p`
    margin: 30px 0;
    background-color: #111111;
    border-radius: 5px;
    padding: 10px 20px;
    @media screen and (max-width: 768px){
        text-align: center;
    }
`
const Price = styled.span`
    font-weight: 200;
    font-size: 40px;
    background-color: teal;
    border-radius: 5px;
    padding: 10px 20px;
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
        text-align: center;
    }
`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin-top: 30px;
    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    @media screen and (max-width: 768px){
        margin-bottom: 20px;
    }
`
const Amount = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    @media screen and (max-width: 768px){
        width: 60px;
        height: 60px;
        font-size: 20px;
    }
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: #111111;
    cursor: pointer;
    color: white;
    transition: all 0.2s ease;
    font-weight: 500;
    &:hover{
        background-color: teal;
        border: 2px solid #111111;
    }
    @media screen and (max-width: 768px){
        padding: 15px 50px;
    }
`

const Product = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Container>
            <Announcement />
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://glamrap.pl/wp-content/uploads/2022/03/sentino-megalomania.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Megalomania</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laborum, optio architecto recusandae exercitationem eveniet ipsa! Nemo natus officia accusamus laborum voluptatum quo illo voluptatibus atque optio. Asperiores, corrupti non.</Desc>
                    <Price>$20</Price>
                    <AddContainer>
                        <AmountContainer>
                            <Remove cursor="pointer" />
                            <Amount>1</Amount>
                            <Add cursor="pointer" />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product