import { useState } from "react";

export const SuperButon =({buttonText="Soy SuperBoton desde superbuton.jsx "}) =>{
    const [bool, setBool] = useState(false)
    
    // let booleano = false 
    

    const MostrarEnConsola = ()=>{
        console.log(bool);
        // booleano = !booleano
        setBool(!bool)
    }

    // console.log("Antes del render");
    return (
        <>
            <button onClick={MostrarEnConsola}>{buttonText}</button>
        </>
    )


}