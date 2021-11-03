import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../../services/getFetch'
import {ItemList} from "./ItemList" 

const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getFetch
            .then( res => {        
                console.log('llamada a api') // alguna accion con la respuesta  
                setProduct(res.filter(prod => prod.categoria === id ))
            })    
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))              
        }else{
            getFetch
            .then( res => {        
                console.log('llamada a api') // alguna accion con la respuesta  
                setProduct(res)
            })    
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))  
        }
    },[id]) 
      
    console.log(id);

    return (
        <>            
            <ItemList product={product} />  
        </>
    )
}

export default ItemListContainer
