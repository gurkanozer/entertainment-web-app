import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/actions/moviesActions";

import { Title } from "./style";
import { Cards, Slider } from "../../components";

const Home = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <>
      <Title>Trending</Title>
      <Slider items={movies.filter((m) => m.isTrending)} />
      <Title>Recommended for you</Title>
      <Cards cards={movies}></Cards>
    </>
  );
};

export default Home;
