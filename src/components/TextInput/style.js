import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.grayishBlue};
  height: 37px;
  font-size: 15px;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  outline: none;
  caret-color: ${({ theme }) => theme.color.red};
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
  }
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    height: 48px;
  }
`;

export const Label = styled.label``;

export const InputContainer = styled.div`
  width: 100%;
`;
