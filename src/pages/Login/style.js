import styled from "styled-components";
import BrandImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Link)`
  width: 2rem;
  height: 1.5rem;
  background: url(${BrandImg}) no-repeat center center;
  background-size: cover;
  margin-bottom: 58px;
  @media (min-width: ${({ theme }) => theme.screenSize.sm}) {
    margin-bottom: 72px;
  }
`;
export const Paragraph = styled.span`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fw.light};
`;

export const SignUp = styled(Link)`
  margin-left: 6px;
  color: ${({ theme }) => theme.color.red};
`;
