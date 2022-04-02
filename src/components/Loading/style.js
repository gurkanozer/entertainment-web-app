import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.white};
`;

export const Loader = styled.div`
  border: 10px solid ${({ theme }) => theme.color.semiDarkBlue};
  border-top: 10px solid ${({ theme }) => theme.color.red};
  border-radius: 100%;
  width: 44px;
  height: 44px;
  animation: ${rotate} 2s linear infinite;
`;
