import styled from "styled-components";
import { motion } from "framer-motion";
export const MainContainer = styled(motion.main)`
  margin-top: 5rem;
  width: 100%;
  height: 100%;
  max-width: 90rem;
  min-height: 100vh;
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    margin-top: 8rem;
  }
  @media (min-width: ${({ theme }) => theme.screenSize.lg}) {
    margin-top: 3rem;
    width: calc(100% - 8.75rem);
    position: absolute;
    top: 0;
    right: 0;
  }
  @media (min-width: 1680px) {
    right: 50%;
    transform: translateX(50%);
    margin: 4rem auto;
  }
`;
