import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Rotas from "./Routes/routes";


function App() {
  return (
  <>
      <Header/>
  <div>
    <Rotas/>
    </div>
    </>
//para um componente ficar estático, é necessário chamá-lo no App
//para deixá-lo assim. Se eu sair de uma página para outra,
//o componente continuará no mesmo lugar
);
}

export default App;

