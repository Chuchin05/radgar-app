export const SuperButon =({buttonText='Soy Boton'}) =>{
    
    
    //let bool=false


    const mostrarEnConsola = ()=>{
        console.log('bool');
        
    }

    // console.log('antes del render de button');
    return (
        <>
            <button onClick={mostrarEnConsola}>{buttonText}</button>
        </>
    )
}
