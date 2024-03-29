import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
    background: #000000db;
    transition: all 0.2s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    @media screen and (max-width: 768px){
        background: #00000083;
        opacity: 1;
    }
`
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;

    &:hover ${Overlay}{
        opacity: 1;
    }
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px){
        height: 33vh;
        background: #0000001f;
    }
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    font-weight: 700;
    text-align: center;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;

    &:hover{
        background-color: teal;
        color: white;
    }
`

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Overlay></Overlay>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;
