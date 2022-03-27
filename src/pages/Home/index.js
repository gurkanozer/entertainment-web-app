import React from "react";
import { HomeContainer, Title } from "./style";
import { Searchbox, Cards, Slider } from "../../components";
const Home = () => {
  return (
    <HomeContainer>
      <Searchbox />
      <Title>Trending</Title>
      <Slider />
      <Title>Recommended for you</Title>
      <Cards></Cards>
    </HomeContainer>
  );
};

export default Home;
