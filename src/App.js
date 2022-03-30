import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "./redux/actions/moviesActions";

import { isAuth } from "./redux/actions/userActions";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyle";

import { Main, Auth } from "./components";
import { Home, Movies, TvSeries, Bookmarked, Login, Register } from "./pages";

const theme = {
  fw: {
    light: 300,
    medium: 500,
  },
  color: {
    red: "#FC4747",
    darkBlue: "#10141E",
    grayishBlue: "#5A698F",
    semiDarkBlue: "#161D2F",
    white: "#FFFFFF",
  },
  screenSize: {
    xs: "320px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
    xl: "1400px",
  },
};

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(isAuth());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Auth auth={auth} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Route>
        <Route path="/" element={<Main auth={auth} />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvseries" element={<TvSeries />} />
          <Route path="/bookmarked" element={<Bookmarked />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
