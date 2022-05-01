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
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
`
const Title = styled.h1`
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
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
    margin-bottom: 20px;
    &:hover{
        background-color: black;
    }
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

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Desc>Username</Desc>
                    <Input placeholder="Username" />
                    <Desc>Password</Desc>
                    <Input placeholder="Password" />
                    <ButtonWrapper>
                        <Button>Login</Button>
                    </ButtonWrapper>
                    <Link>FORGOT YOUR PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login