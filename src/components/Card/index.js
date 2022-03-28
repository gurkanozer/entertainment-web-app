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
  BookmarkIcon,
} from "./style";
import MovieImg from "../../assets/icon-category-movie.svg";
import PlayImg from "../../assets/icon-play.svg";
import TvSeriesImg from "../../assets/icon-category-tv.svg";
import BookmarkedEmpty from "../../assets/icon-bookmark-empty.svg";
// import BookmarkedFull from "../../assets/icon-bookmark-full.svg";
const index = ({ item }) => {
  const handleOnClick = () => {
    console.log("Wow");
  };
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={item.thumbnail.regular.medium} />
        <PlayButton
          aria-label={item.title}
          id={item._id}
          onClick={handleOnClick}
        >
          <PlayButtonInner>
            <PlayIcon src={PlayImg} /> Play
          </PlayButtonInner>
        </PlayButton>
      </ImageContainer>
      <BookmarkButton>
        <BookmarkIcon src={BookmarkedEmpty} />
      </BookmarkButton>
      <Detail>
        <List>
          <ListItem>{item.year}</ListItem>
          <ListItem>
            <IconImage
              src={item.category === "Movie" ? MovieImg : TvSeriesImg}
            />
            {item.category}
          </ListItem>
          <ListItem>{item.rating}</ListItem>
        </List>
        <Title htmlFor={item._id}>{item.title}</Title>
      </Detail>
    </CardContainer>
  );
};

export default index;
