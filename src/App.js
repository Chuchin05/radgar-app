import { useState, useEffect } from 'react';
import SuperForm from './SuperForm';
import { SuperButon } from './SuperButton';
// import logo from './logo.svg';
// import FeedbackMessage from './FeedBackMessage';
// import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
// va sin llaves porq cuando lo exportas como default no lleva
// import  {Navbar}  from './component/NavBar';
// import { Titulo } from './Titulo
// import { Image} from "react-bootstrap"
// import {ItemListContainer} from "./component/container/ItemListContainer"
// import {Imagen} from "./component/CartWidget"

//

// const Titulo = ({titulo})=>{
//   return(
//     <>
//     <h2>{titulo}</h2>
//     </>
//   )
// }

 const App = () => {
  // const nombre = "eugenio"
  // const apellido ="Carlos"
  const [bool, setBool] = useState(false)
  const [state, setstate] = useState("Soy estado")
  

  console.log("Siempre se asigna");
    // let title ="Soy form de app"
  const handleClick = ()=>{
    setBool(!bool)
    
    setstate("cambie")
  }
  

  
  useEffect(() => {
    alert("llamando a la API")
    
  }, [])
  
  console.log("Antes del render de App");
  return(
    
    <div className="App" onClick={handleClick}>
        HOla soy app
      {/* <Titulo titulo="">
        <ItemListContainer title ="Bienvenido al carrito de compras"/>
        <Navbar/>
      </Titulo>  */}
       <SuperForm title={state} SuperButon={SuperButon}>

         <p >asddddddd</p>
       </SuperForm>
       {/* <SuperButon/> */}
       
       </div>
      
      )
      
}

export default App;
