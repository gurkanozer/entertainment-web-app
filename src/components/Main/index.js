import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { MainContainer } from "./style";
import { Searchbox, Navbar } from "../";

const Main = ({ auth }) => {
  const [keyWord, setKeyWord] = useState("");
  const handleOnChange = (e) => {
    setKeyWord(e.target.value);
  };
  if (auth?.user?.isLoading) return <div></div>;
  return (
    <>
      <Navbar />
      <MainContainer layout>
        <Searchbox onChange={handleOnChange} />
        <Outlet context={[keyWord, setKeyWord]} />
      </MainContainer>
    </>
  );
};

export default Main;
