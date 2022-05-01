import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color: #111111;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
`
const Title = styled.h1`
    font-size: 70px;
    font-weight: 800;
    margin-bottom: 20px;

    @media screen and (max-width: 768px){
        font-size: 50px;
    }
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;

    @media screen and (max-width: 768px){
        font-size: 18px;
        text-align: center;
    }
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #111111;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px){
        width: 80%;
    }
`
const Input = styled.input`
    flex: 8;
    padding-left: 20px;
    background-color: #111111;
    outline: none;
    color: white;
    border: 1px solid lightgray;
`
const Button = styled.button`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: teal;
    cursor: pointer;
    color: white;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products.</Description>
            <InputContainer>
                <Input placeholder='Your Email' />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter