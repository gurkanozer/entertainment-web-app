import styled from 'styled-components';

export const CardContainer = styled.div`
    overflow: hidden;
    display:flex;
    flex-direction: column;
    width:100%;
    position:relative;
    
`
export const PlayButtonInner = styled.div`
    background:rgba(255,255,255,0.216);
    display:flex;
    align-items: center;
    justify-content: center;
    width:4.5rem;
    height:1.875rem;
    border-radius:3rem;
    color:${({theme})=>theme.color.white};
    @media (min-width:${({theme})=>theme.screenSize.sm}){
        height:3rem;
        width:7.375rem;
        margin-right:1.125rem;
    }
`
export const PlayIcon = styled.img`
    width:1rem;
    height:1rem;
    margin-right:0.5rem;
    display:flex;
    align-items: center;
    justify-content: center;
    @media (min-width:${({theme})=>theme.screenSize.sm}){
        width:1.875rem;
        height:1.875rem;
        margin-right:1.125rem;
    }
`
export const PlayButton = styled.button`
    position: absolute;
    top:0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.418);
    opacity: 0;
    transition: opacity .3s ease;
    display:grid;
    align-items: center;
    justify-content: center;
    &:focus{
        opacity:1;
        ${PlayButtonInner}{
            transform: scale(0.9);
        }
    }
`

export const ImageContainer = styled.div`
    width:100%;
    height:6.875rem;
    border-radius: 8px;
    position: relative;
    margin-bottom:8px;
    overflow: hidden;
    &:hover{
        cursor: pointer;
        ${PlayButton}{
            opacity:1;
        }
    }
    @media (min-width:${({theme})=>theme.screenSize.sm}){
        height:8.75rem;
    }
    @media (min-width:${({theme})=>theme.screenSize.md}){
        height:10.875rem;
    }
`

export const Image = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
`
export const Detail = styled.div`
`
export const List = styled.ul`
    display:flex;
    @media (min-width:${({theme})=>theme.screenSize.sm}){
        margin-bottom: 5px;
    }
`
export  const ListItem = styled.li`
    font-weight: ${({theme})=>theme.fw.light};
    font-size:0.688rem;
    opacity: 0.8;
    color:${({theme})=>theme.color.white};
    position:relative;
    margin-right:14px;
    display:flex;
    align-items: center;
    &:not(:last-child){
        &::after{
            position:absolute;
            top:7px;
            right:-8px;
            content:"";
            border:1px solid ${({theme})=>theme.color.white};
            border-radius: 100%;
        }
    }
    @media (min-width:${({theme})=>theme.screenSize.sm}){
        font-size:0.813rem;
        &::after{
            border:2px solid ${({theme})=>theme.color.white}; 
        }
    }
`
export const IconImage = styled.img`
    width:0.6rem;
    height:0.6rem;
    margin-right: 4px;
`

export const Title = styled.label`
    font-size:0.875rem;
    font-weight:${({theme})=>theme.fw.medium};
    color:${({theme})=>theme.color.white};
    @media (min-width:${({theme})=>theme.screenSize.sm}){
        font-size:1.125rem;
    }
`
export const BookmarkButton = styled.button`
    border-radius: 100%;
    background: rgba(0,0,0,0.5);
    width:2rem;
    height:2rem;
    position:absolute;
    top:0.5rem;
    right:0.5rem;
    z-index:10;
    @media (min-width:${({theme})=>theme.screenSize.sm}){
        top:1rem;
        right:1rem;
    }
`