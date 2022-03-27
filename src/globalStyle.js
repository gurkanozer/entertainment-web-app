import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    font-size:16px;
    font-family:'Outfit', sans-serif;
}
body{
    width:100%;
    height:100%;
    min-height:100vh;
    background:${({ theme }) => theme.color.darkBlue};
}
*,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
button{
    border:none;
    outline:none;
    cursor:pointer;
    background:none;
}

img {
    width: 100%;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color:inherit;
    font-size:1rem;
}
h1{
    font-size:clamp(1.125rem, -0.677rem + 1.3vw,2rem);
    font-weight: ${({ theme }) => theme.fw.medium};
    color:${({ theme }) => theme.color.white};
    font-family:'Outfit', sans-serif;
    @media (min-width:${({ theme }) => theme.screenSize.md}){
        font-weight: ${({ theme }) => theme.fw.light};
    }
}
p{
    font-size: 0.813rem;
    font-weight: ${({ theme }) => theme.fw.light};
    font-family:'Outfit', sans-serif;
    @media (min-width:${({ theme }) => theme.screenSize.md}){
        font-size:0.938rem;
    }
}
.swiper-slide{
    width:auto;
}
`;
export default GlobalStyle;
