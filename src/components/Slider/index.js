import React from "react";
import {
  SliderContainer,
  SliderCard,
  SliderImage,
  PlayButton,
  PlayButtonInner,
  PlayIcon,
  Detail,
  List,
  ListItem,
  Title,
  IconImage,
  BookmarkButton,
  SlideImageContainer,
  BookmarkIcon,
} from "./style";
import MovieImg from "../../assets/icon-category-movie.svg";
import TvSeriesImg from "../../assets/icon-category-tv.svg";
import BookmarkedEmpty from "../../assets/icon-bookmark-empty.svg";
// import BookmarkedFull from "../../assets/icon-bookmark-full.svg";
import PlayImg from "../../assets/icon-play.svg";

//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const Slider = ({ items }) => {
  return (
    <SliderContainer>
      <Swiper slidesPerView={"auto"} spaceBetween={16} className="mySwiper">
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderCard>
              <SlideImageContainer>
                <SliderImage src={item?.thumbnail.trending.large} />
                <PlayButton aria-label={item?.title} id={index}>
                  <PlayButtonInner>
                    <PlayIcon src={PlayImg} /> Play
                  </PlayButtonInner>
                </PlayButton>
              </SlideImageContainer>
              <BookmarkButton>
                <BookmarkIcon src={BookmarkedEmpty} />
              </BookmarkButton>
              <Detail>
                <List>
                  <ListItem>{item?.year}</ListItem>
                  <ListItem>
                    <IconImage
                      src={item?.category === "Movie" ? MovieImg : TvSeriesImg}
                    />
                    {item?.category}
                  </ListItem>
                  <ListItem>{item?.rating}</ListItem>
                </List>
                <Title htmlFor={item?._id}>{item?.title}</Title>
              </Detail>
            </SliderCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default Slider;
