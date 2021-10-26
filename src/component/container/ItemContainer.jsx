import React, { Children } from "react";
import ItemCount from "./ItemCount";


export default function ItemListContainer({greeting}) { 
return(
    <div>
        {greeting}
        <ItemCount stocl = {8} initial={1}/>
    </div>
)
}