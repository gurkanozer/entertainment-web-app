import React, { useState } from "react";
import {
  NavbarContainer,
  Brand,
  Nav,
  HomeLink,
  BookmarkLink,
  MoviesLink,
  TvSeriesLink,
  UserActions,
  ProfileButton,
  ProfileIcon,
  UserLinks,
  UserLinkItem,
  UserLink,
  LogoutButton,
} from "./style";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";
const Navbar = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    // navigate("/", { replace: true });
  };
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
      <UserActions>
        <UserLinks isvisible={isVisible}>
          {user ? (
            <LogoutButton isvisible={isVisible} onClick={handleLogout}>
              Log out
            </LogoutButton>
          ) : (
            <>
              <UserLinkItem>
                <UserLink to="/login">Login</UserLink>
              </UserLinkItem>
              <UserLinkItem>
                <UserLink to="/signup">Sign Up</UserLink>
              </UserLinkItem>
            </>
          )}
        </UserLinks>
        <ProfileButton onClick={() => setIsVisible((prev) => !prev)}>
          <ProfileIcon />
        </ProfileButton>
      </UserActions>
    </NavbarContainer>
  );
};

export default Navbar;
