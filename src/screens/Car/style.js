import styled from "styled-components";

export const DivCard=styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-items: center;
align-items: center;
height: 100vh;
`
export const Container=styled.div`
align-self: center;
color: red;
grid-column:3;
`

export const Titulo=styled.h2`
font-style:italic;
`
export const Preco=styled.h2`
color: #fdca40;
`
export const Motor = styled.p`
text-decoration: underline;
font-style: italic;
font-weight: 100;
`
export const DivContainer=styled.div`
display: grid;
background: #080708;
width: 100vw;
`
export const ImgCar=styled.img`
grid-column: 2;
width: 600px;
`