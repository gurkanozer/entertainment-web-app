import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import HomeIcon from "../../assets/icon-nav-home.svg";
import BookmarkIcon from "../../assets/icon-nav-bookmark.svg";
import MoviesIcon from "../../assets/icon-nav-movies.svg";
import TvSeriesIcon from "../../assets/icon-nav-tv-series.svg";
import { RiUser4Line } from "react-icons/ri";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.color.semiDarkBlue};
  padding: 1rem 1.125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    top: 1.438rem;
    width: calc(100% - 3rem);
    height: 4.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: ${({ theme }) => theme.screenSize.lg}) {
    top: 2rem;
    width: 6rem;
    height: calc(100vh - 4rem);
    left: 2rem;
    transform: translate(0);
    border-radius: 1.25rem;
    flex-direction: column;
    padding: 2rem 0;
  }
`;
export const Brand = styled.div`
  width: 1.563rem;
  height: 1.25rem;
  background: url(${Logo}) no-repeat center center;
  background-size: cover;
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    width: 2rem;
    height: 1.563rem;
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    gap: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.screenSize.lg}) {
    flex-direction: column;
    position: absolute;
    top: 8.5rem;
  }
`;
const NavLink = styled(Link)`
  width: 1rem;
  height: 1rem;
  background-color: ${({ theme, isactive }) =>
    isactive === "true" ? theme.color.white : theme.color.grayishBlue};
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    width: 1.25rem;
    height: 1.25rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.red};
  }
`;
export const HomeLink = styled(NavLink)`
  mask: url(${HomeIcon}) no-repeat center center;
  mask-size: contain;
`;
export const BookmarkLink = styled(NavLink)`
  mask: url(${BookmarkIcon}) no-repeat center center;
  mask-size: contain;
`;
export const MoviesLink = styled(NavLink)`
  mask: url(${MoviesIcon}) no-repeat center center;
  mask-size: contain;
`;
export const TvSeriesLink = styled(NavLink)`
  mask: url(${TvSeriesIcon}) no-repeat center center;
  mask-size: contain;
`;
export const UserActions = styled.div`
  position: relative;
  width: auto;
`;
export const ProfileButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.darkBlue};
  background: ${({ theme }) => theme.color.grayishBlue};
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    width: 2rem;
    height: 2rem;
  }
`;
export const ProfileIcon = styled(RiUser4Line)`
  color: inherit;
`;
export const UserLinkItem = styled.li`
  padding: 0 0 0.5rem;
`;
export const UserLink = styled(Link)`
  color: ${({ theme }) => theme.color.semiDarkBlue};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fw.medium};
`;
export const LogoutButton = styled.button`
  padding: 1rem;
  color: ${({ theme }) => theme.color.white};
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.fw.medium};
`;

export const UserLinks = styled.ul`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  bottom: -16px;
  right: 0;
  left: auto;
  transform: translateX(0) translateY(100%);
  background-color: ${({ theme }) => theme.color.grayishBlue};
  border-radius: 6px;
  padding: ${({ isvisible }) => (isvisible ? "0.5rem" : 0)};
  opacity: ${({ isvisible }) => (isvisible ? 1 : 0)};
  ${LogoutButton} {
    display: ${({ isvisible }) => (isvisible ? "block" : "none")};
  }
  @media (min-width: ${({ theme }) => theme.screenSize.lg}) {
    transform: translateX(-50%) translateY(-100%);
    top: -16px;
    left: 50%;
    bottom: auto;
    right: auto;
  }
`;
