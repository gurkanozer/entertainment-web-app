import React from "react";
import { Outlet } from "react-router-dom";
import { MainContainer } from "./style";
import { Searchbox, Navbar } from "../";
const Main = ({ auth }) => {
  if (auth?.user?.isLoading) return <div></div>;
  return (
    <>
      <Navbar />
      <MainContainer>
        <Searchbox />
        <Outlet />
      </MainContainer>
    </>
  );
};

export default Main;
