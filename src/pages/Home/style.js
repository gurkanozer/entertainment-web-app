import styled from 'styled-components';

export const HomeContainer = styled.div`
    margin-top:5rem;
    width:100%;
    height:100%;
    max-width: 79.75rem;
    min-height: 100vh;
    @media (min-width:${({theme})=>theme.screenSize.sm}){
        margin-top: 8rem;
    }
    @media (min-width:${({theme})=>theme.screenSize.lg}){
        margin-top:4rem;
        width:calc(100% - 10.25rem);
        position:absolute;
        top:0;
        right:0;
    }
    @media (min-width:1576px){
        right:50%;
        transform: translateX(50%);
        margin:4rem auto;
    }
`