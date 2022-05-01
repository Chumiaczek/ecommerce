import { Add, Remove } from '@material-ui/icons'
import React, { useState } from "react";
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Container = styled.div`
    background-color: black;
`
const Wrapper = styled.div`
    padding: 20px;
    background-color: #111111;
    color: white;
    min-height: 63.5vh;
`
const Title = styled.h1`
    font-weight: 400;
    text-align: center;
    padding-top: 20px;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 20px 0;
    }
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    background-color: ${props => props.type === "outline" ? "black" : "teal"};
    border: 1px solid teal;
    color: white;
    transition: all 0.2s ease;
    margin: 0 10px;
    &:hover{
        background-color: ${props => props.type === "outline" ? "teal" : "black"};
    }
    @media screen and (max-width: 768px){
        margin-bottom: 20px;
    }
`
const TopTexts = styled.div`
    @media screen and (max-width: 768px){
        margin-bottom: 20px;
    }
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
    transition: all 0.2s ease;
    &:hover{
        color: teal;
    }
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: black;
    border-radius: 5px;
    margin: 20px 5px 20px 0;
    padding: 20px;
    border: 1px solid teal;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductID = styled.span`

`
const ProductType = styled.span`

`
const Bold = styled.span`
    font-weight: 500;
`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    background-color: #111111;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid teal;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Summary = styled.div`
    flex: 1;
    border: 1px solid teal;
    border-radius: 5px;
    padding: 20px;
    background-color: black;
    margin: 20px 0px 20px 10px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    font-weight: 600;
    cursor: pointer;
    background-color: teal;
    border: 1px solid teal;
    color: white;
    transition: all 0.2s ease;
    &:hover{
        background-color: black;
    }
`

const Cart = () => {
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
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton type="outline">CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (4)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://glamrap.pl/wp-content/uploads/2022/03/sentino-megalomania.jpg" />
                                <Details>
                                    <ProductName><Bold>Product: </Bold>Megalomania - Sentino</ProductName>
                                    <ProductID><Bold>ID: </Bold>237865928</ProductID>
                                    <ProductType><Bold>Type: </Bold>CD</ProductType>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$40</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Product>
                            <ProductDetail>
                                <Image src="https://glamrap.pl/wp-content/uploads/2022/03/sentino-megalomania.jpg" />
                                <Details>
                                    <ProductName><Bold>Product: </Bold>Megalomania - Sentino</ProductName>
                                    <ProductID><Bold>ID: </Bold>237865928</ProductID>
                                    <ProductType><Bold>Type: </Bold>CD</ProductType>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$40</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Product>
                            <ProductDetail>
                                <Image src="https://glamrap.pl/wp-content/uploads/2022/03/sentino-megalomania.jpg" />
                                <Details>
                                    <ProductName><Bold>Product: </Bold>Megalomania - Sentino</ProductName>
                                    <ProductID><Bold>ID: </Bold>237865928</ProductID>
                                    <ProductType><Bold>Type: </Bold>CD</ProductType>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$40</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$160</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$-5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$160</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart