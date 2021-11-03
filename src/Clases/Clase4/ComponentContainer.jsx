import React from 'react'

const estados= ['js', 'React js', 'Component']


const Item = ({valor}) => {
    return (
        <button>{valor}</button>
    )
}


function ComponenteConteiner() {

    const items = estados.map(t => <Item valor={t}/>)
    //Es donde van las llamadas a las Apis
    
    return (
        <div>
            {items}
        </div>
    )
}

export default ComponenteConteiner
