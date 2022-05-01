import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div`
    background-color: black;
    color: white;
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    border-top: solid teal 1px;
    border-bottom: solid teal 1px;
`
const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Image = styled.img`
    width: 50%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`
const Title = styled.h1`
    font-weight: 800;
    background-color: #111111;
    border-radius: 5px;
    padding: 5px 20px;
`
const Desc = styled.p`
    margin: 30px 0;
    background-color: #111111;
    border-radius: 5px;
    padding: 10px 20px;
`
const Price = styled.span`
    font-weight: 200;
    font-size: 40px;
    background-color: teal;
    border-radius: 5px;
    padding: 10px 20px;
`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin-top: 30px;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
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
`

const Product = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://glamrap.pl/wp-content/uploads/2022/03/sentino-megalomania.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Megalomania</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus corporis ut asperiores repudiandae culpa voluptas, soluta vero iusto at reprehenderit nobis quaerat perferendis ex ipsum tenetur quia perspiciatis maxime!</Desc>
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