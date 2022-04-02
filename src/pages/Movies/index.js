import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredMovies } from "../../redux/actions/filteredMoviesActions";
import { useOutletContext } from "react-router-dom";
import { Title } from "./style";
import { Cards, Loading } from "../../components";

const Movies = () => {
  const dispatch = useDispatch();
  const filteredMovies = useSelector((state) => state.filteredMovies);
  const movies = useSelector((state) => state.movies);
  const [keyWord] = useOutletContext();
  useEffect(() => {
    dispatch(setFilteredMovies("Movie", keyWord, movies));
  }, [dispatch, movies, keyWord]);

  return (
    <>
      <Title>Movies</Title>
      {filteredMovies.length === 0 ? (
        <Loading />
      ) : (
        <Cards cards={filteredMovies}></Cards>
      )}
    </>
  );
};

export default Movies;
