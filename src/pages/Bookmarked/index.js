import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredMovies } from "../../redux/actions/filteredMoviesActions";
import { Title } from "./style";
import { Cards, Loading } from "../../components";

const Bookmarked = () => {
  const dispatch = useDispatch();
  const bookmarked = useSelector((state) => state.auth.bookmarked);
  const filteredMovies = useSelector((state) => state.filteredMovies);

  const [keyWord] = useOutletContext();
  const [movies, setMovies] = useState(
    bookmarked.filter((p) => p.category === "Movie")
  );
  const [tvSeries, setTvSeries] = useState(
    bookmarked.filter((p) => p.category === "TV Series")
  );

  useEffect(() => {
    dispatch(setFilteredMovies("all", keyWord, bookmarked));
  }, [dispatch, keyWord, bookmarked]);
  useEffect(() => {
    let m = [],
      tv = [];
    filteredMovies.map((b) => {
      if (b.category === "Movie") {
        m = [...m, b];
      } else {
        tv = [...tv, b];
      }
      return true;
    });
    setMovies(m);
    setTvSeries(tv);
  }, [filteredMovies]);
  return (
    <>
      {movies.length > 0 && (
        <>
          <Title>Bookmarked Movies</Title>
          {movies.length === 0 ? <Loading /> : <Cards cards={movies} />}
        </>
      )}
      {tvSeries.length > 0 && (
        <>
          <Title>Bookmarked Tv Series</Title>
          {tvSeries.length === 0 ? <Loading /> : <Cards cards={tvSeries} />}
        </>
      )}
    </>
  );
};

export default Bookmarked;
