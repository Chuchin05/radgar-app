import React, {useState} from "react";
import { Button,FormControl } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

export default function ItemCount ({stock,initial, onAdd}) {
    const [count,setCount] = useState(initial)

    const handbleClick=()=>{
        alert(`La cantidad Agregada es: ${count} mi rey `)
    }
    const restarClick=() =>{
        count > 1 ? setCount(count-1) : alert("Debe elegir al menos 1 producto")
    }
    const aumentarClick  = ()=>{
        count < parseInt(stock) ? setCount(count +1) : alert(`El Stock es de ${stock} Productos mi REY`)
    }

    return (
        <div>
            <InputGroup className="mb-2">
                 <Button variant="outline-secundary" onCLick={restarClick}>-</Button>
                 <FormControl className="Text-center" aria-label="Example text with two button addons" value={count}></FormControl>
                 <Button variant="outline-secundary" onClick={aumentarClick}>+</Button>
            </InputGroup>
            <Button variant="secundary" onClick={handbleClick}></Button>
        </div>
)
}
