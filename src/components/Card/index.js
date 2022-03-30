import React from "react";
import { useDispatch } from "react-redux";
import { useBookmarked } from "../../hooks";
import { toggleBookmark } from "../../redux/actions/userActions";
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
import BookmarkedFull from "../../assets/icon-bookmark-full.svg";
const Card = ({ item }) => {
  const dispatch = useDispatch();
  const { isBooked, updateBookmark } = useBookmarked();

  const handlePlayVideo = () => {
    console.log("Maybe later...");
  };
  const handleBookmark = () => {
    dispatch(toggleBookmark(updateBookmark(item)));
  };
  return (
    <CardContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ImageContainer>
        <Image src={item.thumbnail.regular.medium} />
        <PlayButton
          aria-label={item.title}
          id={item._id}
          onClick={handlePlayVideo}
        >
          <PlayButtonInner>
            <PlayIcon src={PlayImg} /> Play
          </PlayButtonInner>
        </PlayButton>
      </ImageContainer>
      <BookmarkButton onClick={handleBookmark}>
        <BookmarkIcon
          src={isBooked(item._id) ? BookmarkedFull : BookmarkedEmpty}
        />
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

export default Card;
