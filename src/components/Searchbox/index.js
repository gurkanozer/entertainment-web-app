import React from "react";
import { SearchbarContainer, SearchInput, SearchIcon } from "./style";

const Searchbox = () => {
  return (
    <SearchbarContainer>
      <SearchIcon />
      <SearchInput placeholder="Search for movies or TV series" />
    </SearchbarContainer>
  );
};

export default Searchbox;
