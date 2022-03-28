import React from "react";
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
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <NavbarContainer>
      <Brand />
      <Nav>
        <HomeLink
          to="/"
          aria-label="Home"
          isactive={pathname.split("/")[1] === "" ? "true" : "false"}
        />
        <MoviesLink
          to="/movies"
          aria-label="Movies"
          isactive={pathname.split("/")[1] === "movies" ? "true" : "false"}
        />
        <TvSeriesLink
          to="/tvseries"
          aria-label="Tv Series"
          isactive={pathname.split("/")[1] === "tvseries" ? "true" : "false"}
        />
        <BookmarkLink
          to="/bookmarked"
          aria-label="Bookmarked"
          isactive={pathname.split("/")[1] === "bookmarked" ? "true" : "false"}
        />
      </Nav>
      <ProfileLink to="/login">
        <ProfileIcon />
      </ProfileLink>
    </NavbarContainer>
  );
};

export default Navbar;
