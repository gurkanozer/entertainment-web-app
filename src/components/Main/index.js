import React from "react";
import { Outlet } from "react-router-dom";
import { MainContainer } from "./style";
import { Searchbox, Navbar } from "../";
const Main = () => {
  return (
    <MainContainer>
      <Navbar />
      <Searchbox />
      <Outlet />
    </MainContainer>
  );
};

export default Main;
