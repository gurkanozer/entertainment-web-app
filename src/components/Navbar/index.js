import React from 'react';
import { Home } from '../../pages';
import {NavbarContainer, Brand, Nav, HomeLink, BookmarkLink, MoviesLink, TvSeriesLink, ProfileLink, ProfileIcon} from './style';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Brand/>
      <Nav>
        <HomeLink href='#'/>
        <MoviesLink href='$'/>
        <TvSeriesLink href='$'/>
        <BookmarkLink href='$'/>
      </Nav>  
      <ProfileLink href='#'>
        <ProfileIcon/>
      </ProfileLink>
    </NavbarContainer>
  )
}

export default Navbar