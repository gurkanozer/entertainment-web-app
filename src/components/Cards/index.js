import React from "react";
import { CardsContainer, CardWrapper } from "./style";
import Card from "../Card";
const Cards = ({ cards }) => {
  return (
    <CardsContainer>
      {cards?.map((card, index) => (
        <CardWrapper key={index}>
          <Card item={card} />
        </CardWrapper>
      ))}
    </CardsContainer>
  );
};

export default Cards;
