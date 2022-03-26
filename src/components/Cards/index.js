import React from 'react';
import { CardsContainer } from './style';

const Cards = ({children}) => {
  return (
      <CardsContainer>
          {children}
      </CardsContainer>
  )
}

export default Cards