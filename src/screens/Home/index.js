import React from "react";
import { Link } from "react-router-dom";
import showRoom from "../../assets/Images/img-home.jpg"
import Footer from "../../components/footer";
import { DivGreeting, ImgHome } from "./style";


function Home(){
    return(
        <>
        <DivGreeting>
            <h2 style={{textShadow:'2px 2px #aaaa'}}>Bem vindo a <span style={{color: 'yellow'}}>Up</span><span style={{color:'red'}}>Motors</span></h2>
            <p>Visite o nosso <Link to="/catalogue"> catálogo</Link></p>
        </DivGreeting>
        <ImgHome src={showRoom} alt="Showroom dos carro"/>
        <div>
            <Footer/>
        </div>
        </>
//CRIAR PRIMEIRO AS TELAS COM AS PROPS, PARA DEPOIS COMPONENTIZAR (FOOTER) E DEPOIS ROTEAR
// CADA UMA COM OS ROUTERS E ESTILIZAR TODAS
    )
}
export default Home