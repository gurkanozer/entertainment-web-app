import React from 'react';
import {HomeContainer, Title} from './style';
import { Searchbox, Cards } from '../../components';
const Home = () => {
  return (
      <HomeContainer>
        <Searchbox/>
        <Title>Recommended for you</Title>
        <Cards>
        </Cards>
      </HomeContainer>
  )
}

export default Home