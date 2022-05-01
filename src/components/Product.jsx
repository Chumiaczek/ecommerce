import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000000db;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.2s ease;
    cursor: pointer;
`
const Container = styled.div`
    color: white;
    flex: 1 1 20%;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #111111;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
        transition: all 0.2s ease;
    }
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.2s ease;
    color: black;
    &:hover{
        background-color: teal;
        color: white;
        transform: scale(1.1);
    }
`
const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    font-size: 24px;
    text-align: center;
`
const ButtonWrapper = styled.div`
    display: flex;
`

const Product = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <TitleWrapper>
                    <Title>{item.title} - {item.author}</Title>
                </TitleWrapper>
                <ButtonWrapper>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>
                    <Icon>
                        <SearchOutlined />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </ButtonWrapper>
            </Info>
        </Container>
    )
}

export default Product