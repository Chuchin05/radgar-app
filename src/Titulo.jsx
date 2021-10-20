// export const Item =() => {
//     return (
//         <>
//             <li> <a herf ="#"> Soy Item </a></li>
//         </>
//     )
// }
// export function Input (){
//     return(
//         <div>
//             <h2> Soy Input</h2>
//             <input type="text" placeholder="Hola soy Input"/>
//         </div>
//     )
// }
export const Titulo =({titulo, children})=>{
   console.log(titulo, children);
    return(
        <>
        <h2>{titulo}</h2>
        {children}
        </>
    )
}

