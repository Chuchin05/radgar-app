// 1ro IMPORTS-- Requiero las librerias, comonentes o lo que necesite arriba de todo
// 2do Compónent-Desarrollo lo que necesito que haga el componente
// 3ro EXPORT- Exportar el componente para poder utilizarlo en otras partes del codigo
//  se intalaa boostrap

import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {   
    return(
        <div>
           <Link to='/'>Logo</Link>       
           <Link to='/'>Home</Link>       
           <Link to='/categoria/gorras'>Gorras</Link>       
           <Link to='/categoria/remeras'>Remeras</Link>       
           <Link to='/cart'>Carrito</Link>     
                  
        </div>
    )
}
