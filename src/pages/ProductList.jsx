import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const Container = styled.div`
    background-color: #111111;
    color: white;
`
const Title = styled.h1`
    font-weight: 800;
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 5px;
    margin-right: 20px;
    color: white;
    background-color: black;
`
const Option = styled.option`
    background-color: black;
    color: white;
`

const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Songs</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Type</Option>
                        <Option>CD</Option>
                        <Option>CD+DVD</Option>
                        <Option>DVD</Option>
                        <Option>Analog</Option>
                        <Option>Casett</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option disabled selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList