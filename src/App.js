import {BrowserRouter , Switch, Route} from 'react-router-dom'
import ItemListContainer from "./components/container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/container/ItemDetailContainer/ItemDetailContainer";
import ComponentePromesas from "./Clases/Clase6/ComponentePromesa";
import { NavBar } from './components/NavBar';
// import Cart from './components/Cart/Cart';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
    
    
  
    return (        
        <div className="App"  >
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path='/'>
                        <ItemListContainer  /> 
                    </Route>
                    <Route path='/categoria/:id' exact component={ItemListContainer} />                    
                    <Route exact path='/detalle/:id' component={ItemDetailContainer} />                    
                    <Route exact path='/cart' component={Cart} />                    
                </Switch>
            </BrowserRouter>          
        </div>        
    )
}

export default App;
