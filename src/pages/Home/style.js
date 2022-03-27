import styled from 'styled-components';

export const HomeContainer = styled.div`
    margin-top:5rem;
    width:100%;
    height:100%;
    max-width:90rem;
    min-height: 100vh;
    @media (min-width:${({theme})=>theme.screenSize.sm}){
        margin-top: 8rem;
    }
    @media (min-width:${({theme})=>theme.screenSize.lg}){
        margin-top:3rem;
        width:calc(100% - 8.75rem);
        position:absolute;
        top:0;
        right:0;
    }
    @media (min-width:1680px){
        right:50%;
        transform: translateX(50%);
        margin:4rem auto;
    }
`

export const Title = styled.h2`
    font-size:1.25rem;
    font-weight: ${({theme})=>theme.fw.light};
    color:${({theme})=>theme.color.white};
    padding:0 1rem;
    margin-bottom: 1.5rem;
    @media (min-width:${({theme})=>theme.screenSize.sm}){
    font-size:2rem;
        padding:0 1.5rem;
    }
    @media (min-width:${({theme})=>theme.screenSize.lg}){
        padding:0 2rem;
    }
`