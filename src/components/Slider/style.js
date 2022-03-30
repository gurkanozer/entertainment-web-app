import styled from "styled-components";
import { motion } from "framer-motion";

export const SliderContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0 0 0 1rem;
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    margin-bottom: 2.5rem;
    padding: 0 0 0 1.5rem;
  }
`;
// Button
export const PlayButtonInner = styled.div`
  background: rgba(255, 255, 255, 0.216);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 1.875rem;
  border-radius: 3rem;
  color: ${({ theme }) => theme.color.white};
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    height: 3rem;
    width: 7.375rem;
    margin-right: 1.125rem;
  }
`;
export const PlayIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    width: 1.875rem;
    height: 1.875rem;
    margin-right: 1.125rem;
  }
`;
export const PlayButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.418);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  z-index: 1;
`;

export const SliderCard = styled(motion.div)`
  width: 15rem;
  height: 8.75rem;
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    width: 29.375rem;
    height: 14.375rem;
  }
`;
export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const SlideImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  &:hover {
    cursor: pointer;
    ${PlayButton} {
      opacity: 1;
    }
    ${SliderImage} {
      transform: scale(1.05);
    }
  }
`;

//Detail
export const Detail = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;
export const List = styled.ul`
  display: flex;
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    margin-bottom: 5px;
  }
`;
export const ListItem = styled.li`
  font-weight: ${({ theme }) => theme.fw.light};
  font-size: 0.688rem;
  opacity: 0.8;
  color: ${({ theme }) => theme.color.white};
  position: relative;
  margin-right: 14px;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    &::after {
      position: absolute;
      top: 7px;
      right: -8px;
      content: "";
      border: 1px solid ${({ theme }) => theme.color.white};
      border-radius: 100%;
    }
  }
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    font-size: 0.813rem;
    &::after {
      border: 2px solid ${({ theme }) => theme.color.white};
    }
  }
`;
export const IconImage = styled.img`
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 4px;
`;

export const Title = styled.label`
  font-size: 0.938rem;
  font-weight: ${({ theme }) => theme.fw.medium};
  color: ${({ theme }) => theme.color.white};
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    font-size: 1.5rem;
  }
`;
export const BookmarkButton = styled.button`
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.5);
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 10;
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    top: 1rem;
    right: 1rem;
  }
`;

export const BookmarkIcon = styled.img`
  width: 0.8rem;
  height: 0.8rem;
  object-fit: cover;
`;
