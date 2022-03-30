import React from "react";
import { SearchbarContainer, SearchInput, SearchIcon } from "./style";

const Searchbox = ({ onChange }) => {
  return (
    <SearchbarContainer>
      <SearchIcon />
      <SearchInput
        placeholder="Search for movies or TV series"
        onChange={onChange}
      />
    </SearchbarContainer>
  );
};

export default Searchbox;
