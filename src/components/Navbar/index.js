import React, { Children } from "react";
import {
  NavbarContainer,
  Brand,
  Nav,
  HomeLink,
  BookmarkLink,
  MoviesLink,
  TvSeriesLink,
  ProfileLink,
  ProfileIcon,
} from "./style";
import { useMatch, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <NavbarContainer>
      <Brand />
      <Nav>
        <HomeLink
          to="/"
          isactive={pathname.split("/")[1] === "" ? "true" : "false"}
        />
        <MoviesLink
          to="/movies"
          isactive={pathname.split("/")[1] === "movies" ? "true" : "false"}
        />
        <TvSeriesLink
          to="/tvseries"
          isactive={pathname.split("/")[1] === "tvseries" ? "true" : "false"}
        />
        <BookmarkLink
          to="/bookmarked"
          isactive={pathname.split("/")[1] === "bookmarked" ? "true" : "false"}
        />
      </Nav>
      <ProfileLink to="/">
        <ProfileIcon />
      </ProfileLink>
    </NavbarContainer>
  );
};

export default Navbar;
