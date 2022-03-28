import styled from "styled-components";

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fw.light};
  color: ${({ theme }) => theme.color.white};
  padding: 0 1rem;
  margin-bottom: 1.5rem;
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    font-size: 2rem;
    padding: 0 1.5rem;
  }
  @media (min-width: ${({ theme }) => theme.screenSize.lg}) {
    padding: 0 2rem;
  }
`;
