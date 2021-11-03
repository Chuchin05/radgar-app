import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NabVar/NavBar';
import ItemCount from './components/ItemCount/ItemCount'


function EcomerceApp() {

    const onAdd =(count)=>{
        console.log(`la cantidad es : ${count}`)
        //alert(`la cantidad es : ${count}`)    
            
    }

    return (
        <div className="App" >  
                <NavBar />        
                <p>hola soy app</p>
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
                <p>hola soy app</p>
                <ItemCount initial={1} stock={6} onAdd={onAdd} />
                <p>hola soy app</p>
                <ItemCount initial={1} stock={4} onAdd={onAdd} />
                <p>hola soy app</p>
                <ItemCount initial={1} stock={5} onAdd={onAdd} />

        </div>
    );
}

export default EcomerceApp;
