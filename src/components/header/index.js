import React from "react";
import { NavHeader, TitleHeader, UlHeader, LiHeader, LinkHeader, } from "./style";
import { abas } from "../../utils/abas";

export default function Header(){
    return(
        <>
        <NavHeader> 
           <TitleHeader>Up<span style={{color: 'red'}}>Motors</span></TitleHeader>
        <UlHeader>
        {abas.map((aba) =>{ //aba vem a ser uma prop para linkar as propriedades
                            // de {abas}
            return(
                <LiHeader key={aba.id}><LinkHeader to={aba.rota}>{aba.aba}</LinkHeader></LiHeader>
            )
        }
        
    )
        }
        </UlHeader>

        </NavHeader>
     </>

    )
}
