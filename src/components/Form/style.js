import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.semiDarkBlue};
  padding: 1.5rem;
  padding-bottom: 2rem;
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    padding: 2rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 2rem;
`;
