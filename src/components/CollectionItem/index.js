import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import CustomButton from '../CustomButton'
import {addItemToCart} from '../../redux/actions/cart'

const CardContainer = styled.div`
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-bottom: 10px;
  min-width: 15rem;
  :hover {
    button {
      opacity: 0.8;
      display: flex;
    }
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 540px) {
    margin: 0;
    margin-top: 20px;
    padding: 0;
  }
`
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  min-width: 15rem;
  background-size: cover;
  background-position: center;
`
const Footer = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
  width: 100%;
  flex-direction: column;
  display: flex;
  font-size: 18px;
`

const NamePriceContainer = styled.h4`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-between;
`
const Name = styled.div`
  margin-left: 20px;
`
const Price = styled.div`
  margin-right: 10px;
`
const AddItemButton = styled(CustomButton)`
  align-self: flex-end;
  margin-bottom: 5px;
  width: 30%;
  opacity: 0;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  border: none;
  display: none;
`

const CollectionItem = ({item, addItemToCart}) => {
  const {name, price, imageUrl} = item
  return (
    <CardContainer>
      <ImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        <AddItemButton
          invertedOrange
          onClick={() => {
            addItemToCart(item)
          }}
        >
          <strong>ADD TO CART</strong>
        </AddItemButton>
      </ImageContainer>

      <Footer>
        <NamePriceContainer>
          <Name>{name}</Name> <Price>${price}</Price>
        </NamePriceContainer>
      </Footer>
    </CardContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
