import React from "react";
import { cars } from "../../utils/cars";
import { DivCard, DivGrid, CarName, TitleCat } from "./style";
import { Link } from "react-router-dom";
//arquivo 

export default function Catalogue(){
    return(
        <>
        <TitleCat>
            <h2>Alguns dos nossos modelos mais procurados</h2>
        </TitleCat>
        <DivGrid>
            {cars?.map((car) => {
                return(
                    <DivCard key={car.id}>
                        <Link to={car.path}> <img src={car.image} alt="Erro" width={200}/></Link>
                    <CarName>{car.nome}</CarName>
                    </DivCard>
                )
            }
            
        )
            }
        </DivGrid>
        </>
    )

}