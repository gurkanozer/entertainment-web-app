import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyle";
import { Main } from "./components";

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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvseries" element={<TvSeries />} />
          <Route path="/bookmarked" element={<Bookmarked />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
