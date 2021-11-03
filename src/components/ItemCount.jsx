// import React, {useState} from "react";
// import { Button,FormControl } from "react-bootstrap";
// import { InputGroup } from "react-bootstrap";


// // function Contador () { 
    
// //     const [count,setCount] = useState(1)
    
// //     const sumar = ()=>{
        
// //     }
  
// // return(
// //     <div>
// //         <span>El contador esta en {count}</span>
// //         <button onClick={()=> setCount(count + 1)}>
// //             Incrementar contador
// //         </button>
// //     </div>
// // )
// // }

// export default function ItemCount ({stock,initial, onAdd}) {
//     const [count,setCount] = useState(initial)

//     // // const handbleClick=()=>{
//     // //     alert(`La cantidad Agregada es: ${count} mi rey `)
//     // }
//     const restarClick=() =>{
//         count > 1 ? setCount(count - 1) : alert("Debe elegir al menos 1 producto")
//     }
//     const aumentarClick  = ()=>{
//         count < parseInt(stock) ? setCount (count + 1) : alert(`El Stock es de ${stock} Productos mi REY`)
//     }
//     const carritoo = () =>{
//         alert(`El total de compra es de ${(count)}`)
//     }

//     return (
//         <div>
//             <InputGroup className="mb-3">
//                  <Button onClick={carritoo}>Agreagar al carrito</Button>
//                  <Button variant="warning" onCLick={restarClick}>-</Button>
//                  <FormControl className="Text-center" aria-label="Example text with two button addons" value={count}/>
//                  <Button variant="outline-primary" onClick={aumentarClick}>+</Button>
//             </InputGroup>
//         </div>
// )
// }
import { useState } from "react"
import { Button,FormControl } from "react-bootstrap"
import { InputGroup } from "react-bootstrap"



export default function ItemCount ({stock,initial, onAdd}) {
    const [count,setCount] =useState(1)
    
    
    const disminuirCount = ()=>{
        count > 1 ? setCount(count - 1) : alert("Debe elegir al menos 1 producto")
    }

    const aumentarCount = ()=>{
        setCount(count +1 )
        console.log("Agregue una producto");
    }
    const carrito =()=>[
        alert(`Agregaste al carrito un total de ${count} productos`)
    ]


    return(
        <div>
        <InputGroup className="mb-3">
                <>
                  <Button variant="warning" onClick={disminuirCount}>-</Button>
                  <FormControl className="Text-center" aria-label="Example text with two button addons" value={count}/>
                  <Button variant="warning" onClick={aumentarCount}>+</Button>
                  <hr />
                  <Button variant="primary" onClick={carrito}>Agreagar al carrito</Button> 
                </>
             </InputGroup>

        </div>
    )
} 
