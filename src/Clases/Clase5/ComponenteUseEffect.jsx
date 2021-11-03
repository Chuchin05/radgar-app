
import { useState, useEffect } from 'react';
import './App.css';
// import SuperForm from './clase4/EjemploUno';
// import {SuperButon} from './clase4/EjemploUno'



function ComponenteUseEffect({defaultName}) {
    // const state = 'esto es un estado que morira al finalizar la funcíon'
    const [name, setName] = useState('React Clase')
    useEffect(() => {
        console.log('App Montada')
        
    },[name])
    useEffect(() => {
        console.log('Recive la props', defaultName)
        
    },[defaultName])
    
    console.log(name);
    console.log('antes de renderizar');
    return (                     
        <div onClick={() => setName('react function')}>
            <p>{name}</p>
        </div>      
    );
}

export default ComponenteUseEffect;

// Este es el app que usamos para el ejemplo de la clases

import SuperForm from './clase5/SuperForm';
import { SuperButon } from './clase5/SuperForm'



function EcomerceApp() {
  const [estado, setEstado] = useState('')
  const [boleano, setBoleano] = useState(false)


  
  function llamadaApi() {
    console.log('llamada a api')
  }

  const cambioEstado=()=>{
    setBoleano(!boleano)
  }
  
  // useEffect(()=>{//ejcucion despues de cada rendering
  //   console.log('app montada despues del rendering')
  //   llamadaApi()
  // })

  useEffect(()=>{//componentDidMount(){} solo una vez despues del primero
    console.log('se ejecuta una sola vez')
    llamadaApi()
  }, [])

  useEffect(()=>{//componentDidMount(){} solo una vez despues del primero
    console.log('cambio de boleano')
    //document.addEventListener()
    llamadaApi()
    
  }, [estado, boleano])



   console.log('antes del rendering')
  return (
        <div className="App" onClick={()=>setEstado('Juan')}>          
            <h1>{estado}</h1>
              <button onClick={cambioEstado}>cambio de estado</button>       
            <SuperForm  title='Hola soy tilte' render={SuperButon} />
            {/* <SuperForm title='Hola soy form' render={SuperButon} />     */} 
            {/* <p>{state}</p> */}          
        </div>
  );
}

export default EcomerceApp;
