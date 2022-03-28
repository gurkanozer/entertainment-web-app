import styled from "styled-components";

export const Input = styled.button`
  width: 100%;
  height: 3rem;
  background: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.white};
  border-radius: 6px;
  font-size: 15px;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
  &:not(:disabled):hover {
    color: ${({ theme }) => theme.color.red};
    background: ${({ theme }) => theme.color.white};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
