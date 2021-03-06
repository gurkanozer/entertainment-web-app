import React, { useEffect } from "react";
import { setFilteredMovies } from "../../redux/actions/filteredMoviesActions";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { Title } from "./style";
import { Cards, Slider, Loading } from "../../components";

const Home = () => {
  const dispatch = useDispatch();
  const filteredMovies = useSelector((state) => state.filteredMovies);
  const movies = useSelector((state) => state.movies);
  const [keyWord] = useOutletContext();

  useEffect(() => {
    dispatch(setFilteredMovies("all", keyWord, movies));
  }, [dispatch, movies, keyWord]);
  return (
    <>
      {keyWord.trim() === "" && (
        <>
          <Title>Trending</Title>
          {filteredMovies.length === 0 ? (
            <Loading />
          ) : (
            <Slider items={filteredMovies.filter((m) => m.isTrending)} />
          )}
        </>
      )}
      <Title>Recommended for you</Title>
      {filteredMovies.length === 0 ? (
        <Loading />
      ) : (
        <Cards cards={filteredMovies}></Cards>
      )}
    </>
  );
};

export default Home;
