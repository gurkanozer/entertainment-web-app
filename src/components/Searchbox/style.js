import styled from 'styled-components';
import SearchIcon from '../../assets/icon-search.svg';
export const SearchInput = styled.input`
    width:calc(100% - 2rem);
    height: 1.5rem;
    margin: 0 auto;
    font-size:1rem;
    background: none;
    border:none;
    padding-left:2.5rem;
    position: relative;
    @media (min-width:${({theme})=>theme.screenSize.sm}){
        height:2rem;
        font-size:1.5rem;
        padding-left: 3.5rem;
    }
    &::before{
        content:'';
        position: absolute;
        top:0;
        left:0;
        width:1.125rem;
        height:1.125rem;
        background: url(${SearchIcon}) no-repeat center center;
        background-size:cover;
    }
`
