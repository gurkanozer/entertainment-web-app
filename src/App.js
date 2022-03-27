import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyle";
import { Navbar } from "./components";

import { Home, Movies, TvSeries, Bookmarked } from "./pages";

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TvSeries />} />
        <Route path="/bookmarked" element={<Bookmarked />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
