import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalogue from "../screens/Catalogue";
import Car from "../screens/Car";
import Contacts from "../screens/Contacts";
import Home from "../screens/Home";
import { cars } from "../utils/cars"; //importação do array de CARS

export default function Rotas(){
    return(
        <Routes>
            <Route element={<Home/>}path="/"/>
            <Route element={<Contacts/>} path="/contacts"/>
            <Route element={<Catalogue/>} path="/catalogue"/>

           {cars.map ((car) =>{
                return(
                    <Route path={car.path} element={<Car nome={car.nome} preco={car.preco} 
                    motor={car.motor} image={car.image}/>} key={car.id}/> 
                    //mapeamento do array
                    // de {cars}
                    //para inserir
                    //os dados de todos os carros
                )
        }
           )
        }

        </Routes>
    )

}