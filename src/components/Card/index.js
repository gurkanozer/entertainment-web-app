import React from "react";
import {
  CardContainer,
  ImageContainer,
  Image,
  Detail,
  List,
  ListItem,
  Title,
  IconImage,
  BookmarkButton,
  PlayButton,
  PlayIcon,
  PlayButtonInner,
} from "./style";
import TestImage from "../../assets/thumbnails/112/regular/small.jpg";
import MovieImg from "../../assets/icon-category-movie.svg";
import PlayImg from "../../assets/icon-play.svg";
// import TvSeriesImg from '../../assets/icon-category-tv.svg';

const index = () => {
  const id = 1;
  const handleOnClick = () => {
    console.log("Wow");
  };
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={TestImage} />
        <PlayButton id={id} onClick={handleOnClick}>
          <PlayButtonInner>
            <PlayIcon src={PlayImg} /> Play
          </PlayButtonInner>
        </PlayButton>
      </ImageContainer>
      <BookmarkButton />
      <Detail>
        <List>
          <ListItem>2019</ListItem>
          <ListItem>
            <IconImage src={MovieImg} />
            Movie
          </ListItem>
          <ListItem>E</ListItem>
        </List>
        <Title htmlFor={id}>The Great Lands</Title>
      </Detail>
    </CardContainer>
  );
};

export default index;
