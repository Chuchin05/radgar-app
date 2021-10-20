// 1ro IMPORTS-- Requiero las librerias, comonentes o lo que necesite arriba de todo
// 2do Compónent-Desarrollo lo que necesito que haga el componente
// 3ro EXPORT- Exportar el componente para poder utilizarlo en otras partes del codigo
//  se intalaa boostrap

import { Imagen } from './CartWidget'
// import { AlertDismissible } from './container/ItemListContainer'

 export const Navbar = ()=>{
    
    return(
        <div className ="App">
            
            <Imagen/>
        </div>
    )
    
}
 