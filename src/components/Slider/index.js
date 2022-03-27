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
} from "./style";
import MovieImg from "../../assets/icon-category-movie.svg";
import PlayImg from "../../assets/icon-play.svg";
import TestImage from "../../assets/thumbnails/112/regular/small.jpg";
//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const Slider = (id = 1) => {
  return (
    <SliderContainer>
      <Swiper slidesPerView={"auto"} spaceBetween={16} className="mySwiper">
        <SwiperSlide>
          <SliderCard>
            <SlideImageContainer>
              <SliderImage src={TestImage} />
              <PlayButton id={id}>
                <PlayButtonInner>
                  <PlayIcon src={PlayImg} /> Play
                </PlayButtonInner>
              </PlayButton>
            </SlideImageContainer>
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
          </SliderCard>
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard>
            <SlideImageContainer>
              <SliderImage src={TestImage} />
              <PlayButton id={id}>
                <PlayButtonInner>
                  <PlayIcon src={PlayImg} /> Play
                </PlayButtonInner>
              </PlayButton>
            </SlideImageContainer>
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
          </SliderCard>
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard>
            <SlideImageContainer>
              <SliderImage src={TestImage} />
              <PlayButton id={id}>
                <PlayButtonInner>
                  <PlayIcon src={PlayImg} /> Play
                </PlayButtonInner>
              </PlayButton>
            </SlideImageContainer>
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
          </SliderCard>
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard>
            <SlideImageContainer>
              <SliderImage src={TestImage} />
              <PlayButton id={id}>
                <PlayButtonInner>
                  <PlayIcon src={PlayImg} /> Play
                </PlayButtonInner>
              </PlayButton>
            </SlideImageContainer>
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
          </SliderCard>
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard>
            <SlideImageContainer>
              <SliderImage src={TestImage} />
              <PlayButton id={id}>
                <PlayButtonInner>
                  <PlayIcon src={PlayImg} /> Play
                </PlayButtonInner>
              </PlayButton>
            </SlideImageContainer>
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
          </SliderCard>
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard>
            <SlideImageContainer>
              <SliderImage src={TestImage} />
              <PlayButton id={id}>
                <PlayButtonInner>
                  <PlayIcon src={PlayImg} /> Play
                </PlayButtonInner>
              </PlayButton>
            </SlideImageContainer>
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
          </SliderCard>
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
};

export default Slider;
