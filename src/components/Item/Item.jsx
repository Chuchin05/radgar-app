import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({prod}) => {
    return (
        
        <div className="card w-25 mt-5" >
            <div className="card-header">
                {`${prod.name} - ${prod.categoria}`}
            </div>
            <div className="card-body">
                <img src={prod.foto} alt='' />
                {prod.price}
                
            </div>
            <div className="card-footer">
                <Link to={`/detalle/${prod.id}`}>
                    <button className="btn btn-outline-primary btn-block">
                        detalle del producto
                    </button>
                </Link>
            </div>

        </div>
       
    )
}

export default Item
