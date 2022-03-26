import React from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyle";
import {Home} from './pages';
import {Navbar} from './components';

const theme = {
  fw:{
    light:300,
    medium:500
  },
  color:{
    red:"#FC4747",
    darkBlue:"#10141E",
    grayishBlue:"#5A698F",
    semiDarkBlue:"#161D2F",
    white:"#FFFFFF"
  },
  screenSize:{
    sm:"768px",
    md:"992px",
    lg:"1200px"
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <Navbar/> */}
        <Home/>
    </ThemeProvider>
  )
}

export default App;