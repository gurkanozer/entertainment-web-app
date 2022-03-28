import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/actions/moviesActions";

import { Title } from "./style";
import { Cards, Slider } from "../../components";

const Home = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [trendings, setTrendings] = useState([]);
  useEffect(() => {
    dispatch(getMovies());
    setTrendings(movies.filter((m) => m.isTrending));
  }, [dispatch, movies]);
  return (
    <>
      <Title>Trending</Title>
      <Slider items={trendings} />
      <Title>Recommended for you</Title>
      <Cards cards={movies}></Cards>
    </>
  );
};

export default Home;
