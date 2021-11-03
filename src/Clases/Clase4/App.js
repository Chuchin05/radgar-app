import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//esta traigo de la documentación }
import { Titulo, Input, Item } from './components/Tilulo.jsx'
import ComponenteConteiner from './components/NabVar/containers/ComponenteConteiner';

const Padre=({children})=>{
    console.log(children)
    return (
        <h1>{children}</h1>
    )
}

function App() {//Componentes contenedor  
    
    
  return (
      <>
          <div className="App">            
              <h1>Componente App</h1> 
          </div>
          {/* <Item />
          <Input />
          <Titulo 
            nombre={nombre} 
            titulo={titulo} 
            personanueva={persona}
            mostrar={mostrar}
           />
          <Titulo
            nombre={'Juan'} 
            titulo={titulo} 
            personanueva={persona}
            mostrar={mostrar}
            /> */}



            <Padre >
                <Titulo 
                    nombre={'Marcelo'} 
                    titulo={titulo} 
                    personanueva={persona}
                    mostrar={mostrar}
                />
            </Padre>



           {/* <ComponenteConteiner /> */}
      </>
  );
}

export default App;
