import styled from "styled-components";
import IconSearch from "../../assets/icon-search.svg";

export const SearchbarContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    padding: 0 1.5rem;
    margin-bottom: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    margin-bottom: 2.125rem;
  }
`;
export const SearchIcon = styled.span`
  background: url(${IconSearch}) no-repeat center center;
  background-size: cover;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    width: 2rem;
    height: 2rem;
  }
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 1.5rem;
  line-height: 2rem;
  margin: 0 auto;
  font-family: "Outfit", sans-serif;
  font-weight: ${({ theme }) => theme.fw.light};
  font-size: 1rem;
  background: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid transparent;
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    font-size: 1.5rem;
    padding: 1.5rem 0;
  }

  &:focus {
    caret-color: ${({ theme }) => theme.color.red};
    border-bottom: 1px solid ${({ theme }) => theme.color.grayishBlue};
  }
`;
