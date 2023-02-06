import React from "react";
import { DivCard, Titulo, Preco, Container, Motor, DivContainer, ImgCar} from "./style";

export default function Car ({nome, preco, motor, zeroACem, image}){ //propriedades do objeto Car
    return(
//DIVCARD E DIVCONTAINERS SÃO ELEMENTOS QUALQUER 
//DE PÁGINA A QUAL POSSO
//ATRIBUIR DADOS QUALQUER (any)
        <DivCard> 
            <DivContainer>
            <Container>
        <ImgCar src = {image} alt='Um carro aí pokk'/>
            <Titulo>{nome}</Titulo>
            <Preco>{preco}</Preco>
            <Motor>{motor}</Motor>  
            </Container>
            </DivContainer>
        </DivCard> 

    )

}