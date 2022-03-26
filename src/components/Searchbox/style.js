import styled from 'styled-components';
import IconSearch from '../../assets/icon-search.svg';

export const SearchbarContainer = styled.div`
    width:100%;
    padding:0 1rem; 
    display:flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    @media (min-width:${({theme})=>theme.screenSize.sm}){
        padding:0 1.5rem;
        margin-bottom:2rem;
    }
    @media (min-width:${({theme})=>theme.screenSize.md}){
        margin-bottom: 2.125rem;
    }
`
export const SearchIcon = styled.span`
    background: url(${IconSearch}) no-repeat center center;
    background-size: cover;
    width:1.5rem;
    height:1.5rem;
    margin-right:1rem;
`
export const SearchInput = styled.input`
    width:100%;
    height: 1.5rem;
    line-height: 1.5rem;
    margin: 0 auto;
    font-size:1rem;
    background: none;
    border:none;
    outline: none;
    color:${({theme})=>theme.color.white};
    border-bottom: 1px solid transparent;
    @media (min-width:${({theme})=>theme.screenSize.sm}){
        height:2rem;
        font-size:1.5rem;
    }
    &:focus{
        caret-color:${({theme})=>theme.color.red};
        border-bottom: 1px solid ${({theme})=>theme.color.grayishBlue};
    }
    
`
