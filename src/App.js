// import logo from './logo.svg';
// import FeedbackMessage from './FeedBackMessage';
// import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
// va sin llaves porq cuando lo exportas como default no lleva
import  {Navbar}  from './component/NavBar';
import { Titulo } from './Titulo';
// import { Image} from "react-bootstrap"
import {AlertDismissible} from "./component/container/ItemListContainer"
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
    return(
     
      <Titulo titulo="">
        <AlertDismissible title ="Bienvenido al carrito de compras"/>
          <h2>Gaosds</h2>
        <Navbar/>
         
       
          
       </Titulo> 
      
    )

}

export default App;
