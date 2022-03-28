import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  padding-bottom: 3rem;
  padding: 0 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  @media (min-width: ${({ theme }) => theme.screenSize.xs}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 1.5rem;
    gap: 2rem;
    padding-bottom: 5rem;
  }
  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const CardWrapper = styled.div``;
