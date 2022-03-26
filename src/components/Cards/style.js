import styled from 'styled-components';

export const CardsContainer = styled.div`
    width:100%;
    padding:0 1rem;
    @media (min-width:${({theme})=>theme.screenSize.sm}){
        padding:0 1.5rem;
    }
`