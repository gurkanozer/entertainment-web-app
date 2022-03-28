import React from "react";
import { Title } from "./style";
import { Cards } from "../../components";

const Bookmarked = () => {
  return (
    <>
      <Title>Bookmarked Movies</Title>
      <Cards />
      <Title>Bookmarked Tv Series</Title>
      <Cards />
    </>
  );
};

export default Bookmarked;
