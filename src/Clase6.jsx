import {useEffect, useState} from 'react'
import { getFetch } from '../../services/getFetch'

const ComponentePromesas = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then( res => {        
            console.log('llamada a api') // alguna accion con la respuesta  
            setProduct(res)
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))       
    },[])   
  
 
    console.log(product)
    return (
        <>
           <h2>Soy componentePromesas</h2>          
            
            { loading ? <h1>Cargando...</h1> :         
                    product.map(prod=> <div key={prod.id} className="card w-50 mt-5" >
                                                <div className="card-header">
                                                    {prod.name}
                                                </div>
                                                <div className="card-body">
                                                    <img src={prod.foto} alt='' />
                                                    {prod.price}
                                                </div>
                                                <div className="card-footer">
                                                    <button className="btn btn-outline-primary btn-block">
                                                        detalle del producto
                                                    </button>
                                                </div>
                    
                                          </div>
            )
            }
        </>
    )
}

export default ComponentePromesas
//   function getPersonas(id) {
//     if (id===undefined) {
//         return personas
//     }else{
//         return personas.find( persona=> persona.id === id)
//     }
// }

// .then( (respuesta) => {
        //     // throw new Error("Error")
        //     console.log("respuesta: ", respuesta)
        //     // return 1
        // })
        // .catch((err) => {
            //     console.log("ourrio un error", err);
            //     return "todo ok";
            // })
    // .then((valor) => {
        // console.log("valor", valor);
        // });
