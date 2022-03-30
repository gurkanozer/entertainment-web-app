import styled from "styled-components";

export const AlertContainer = styled.div`
  width: 100%;
  max-width: 420px;
  background: ${({ theme }) => theme.color.darkBlue};
  padding: 1rem;
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fw.light};
  color: ${({ theme }) => theme.color.red};
  margin-bottom: 1rem;
`;
