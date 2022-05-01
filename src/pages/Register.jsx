import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://browsecat.net/sites/default/files/eminem-2016-concert-wallpapers-105847-265195-6595948.png") center;
    background-size: cover;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        width: 100%;
        max-height: 100vh;
        background-size: cover;
    }
    @media screen and (max-width: 670px){
        max-height: none;
        height: 130vh;
    }
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    @media screen and (max-width: 768px){
        width: 100%;
        height: 100%;
        padding: 0px 20px;
    }
`
const Title = styled.h1`
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 5px;
    text-align: center;
    @media screen and (max-width: 768px){
        margin-top: 20px;
    }
`
const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
`
const Link = styled.a`
    cursor: pointer;
    text-align: center;
    margin-bottom: 5px;
    transition: all 0.2s ease;
    text-decoration: underline;
    &:hover{
        color: teal;
    }
`
const Text = styled.span`
    margin-right: 5px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const Desc = styled.h3`
    margin-left: 10px;
`
const Input = styled.input`
    flex: 1;
    width: 90%;
    background-color: black;
    color: white;
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    transition: all 0.2s ease;
    border: 1px solid black;
    &:focus{
        border: 1px solid teal;
    }
`
const Agreement = styled.span`
    margin-bottom: 20px;
    text-align: center;
`
const Bold = styled.span`
    font-weight: 600;
`
const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    background-color: teal;
    border-radius: 5px;
    color: white;
    padding: 10px;
    width: 50%;
    cursor: pointer;
    border: 2px solid teal;
    font-weight: 500;
    font-size: 18px;
    transition: all 0.2s ease;
    &:hover{
        background-color: black;
    }
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <TextWrapper>
                    <Text>Already a member? </Text><Link>Sign In</Link>
                </TextWrapper>
                <Form>
                    <Desc>Name</Desc>
                    <Input placeholder="Name" />
                    <Desc>Lastname</Desc>
                    <Input placeholder="Lastname" />
                    <Desc>Username</Desc>
                    <Input placeholder="Username" />
                    <Desc>E-Mail</Desc>
                    <Input placeholder="E-Mail" />
                    <Desc>Password</Desc>
                    <Input placeholder="Password" />
                    <Desc>Confirm Password</Desc>
                    <Input placeholder="Confirm Password" />
                    <Agreement>By creating an account, I consent to the processing of my personal data in accordace with the <Bold>PRIVACY POLICY</Bold>.</Agreement>
                    <ButtonWrapper>
                        <Button>CREATE</Button>
                    </ButtonWrapper>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register