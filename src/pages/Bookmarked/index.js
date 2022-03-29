import React, { useEffect, useState } from "react";
import { Title } from "./style";
import { Cards } from "../../components";
import { useSelector } from "react-redux";

const Bookmarked = () => {
  const bookmarked = useSelector((state) => state.auth.bookmarked);
  const [movies, setMovies] = useState(
    bookmarked.filter((p) => p.category === "Movie")
  );
  const [tvSeries, setTvSeries] = useState(
    bookmarked.filter((p) => p.category === "TV Series")
  );
  useEffect(() => {
    let m = [],
      tv = [];
    bookmarked.map((b) => {
      if (b.category === "Movie") {
        m = [...m, b];
      } else {
        tv = [...tv, b];
      }
      return true;
    });
    setMovies(m);
    setTvSeries(tv);
  }, [bookmarked]);
  return (
    <>
      {movies.length > 0 && (
        <>
          <Title>Bookmarked Movies</Title>
          <Cards cards={movies} />
        </>
      )}
      {tvSeries.length > 0 && (
        <>
          <Title>Bookmarked Tv Series</Title>
          <Cards cards={tvSeries} />
        </>
      )}
    </>
  );
};

export default Bookmarked;
