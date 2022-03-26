import styled from 'styled-components';

export const HomeContainer = styled.div`
    margin-top:5rem;
    width:100%;
    height:100%;
    min-height: 100vh;
    @media (min-width:${({theme})=>theme.screenSize.sm}){
        margin-top: 8rem;
    }
`