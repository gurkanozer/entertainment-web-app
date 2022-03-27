import React from 'react';
import { CardsContainer, CardWrapper } from './style';
import Card from '../Card';
const Cards = ({cards}) => {
  return (
      <CardsContainer>
          <CardWrapper>
            <Card/>
          </CardWrapper>
          <CardWrapper>
            <Card/>
          </CardWrapper>
          <CardWrapper>
            <Card/>
          </CardWrapper>
          <CardWrapper>
            <Card/>
          </CardWrapper>
          <CardWrapper>
            <Card/>
          </CardWrapper>
      </CardsContainer>
  )
}

export default Cards