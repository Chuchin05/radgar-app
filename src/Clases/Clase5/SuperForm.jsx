
export const SuperButon =({buttonText='Soy Boton'}) =>{
    const mostrarEnConsola = ()=>{
        console.log('Hola Camada');
    }
    return (
        <>
            <button onClick={mostrarEnConsola}>{buttonText}</button>
        </>
    )
}


export default function SuperForm (props){
    console.log(props);
    return (
        <>
            <h1>{props.title}</h1>
            {/* {props.children} */}
            {/* {props.render({buttonText: 'SuperFormButtom'})} */}
        </>
    )
}
