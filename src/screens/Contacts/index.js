import React from "react";
import location from "../../assets/Images/img-location.jpg"
import Footer from "../../components/footer";
import { ImgContato } from "./style";

function Contacts(){
    return(
        <>
   
        <div style={{display:'flex', justifyContent: "center", alignItems: "center", height: '400px'}}>
            <ImgContato src={location} alt="Mapa da loja"/></div>
        <Footer/>
        </>
    )

}
export default Contacts