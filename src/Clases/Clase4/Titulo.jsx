
export const Item = () => {
    return (
      <>
        <h2>Hola soy Item </h2>
      </>
    )
  }
  
  
export  function Input() {
    return (
      <div>
        <h2>Hola soy Input </h2>
        <input type="text" placeholder="hola soy input" />
      </div>
    )
  }

export const Titulo = ({nombre='Fede', titulo='El mejor', personanueva, mostrar}) => {

    console.log(nombre);
    console.log(titulo);
    console.log(personanueva);

    const {nombre1, titulo1} = personanueva
    mostrar()

  return (
    <>
      <h2>Hola soy Titulo {titulo1}</h2>
      <p>{nombre}</p>
    </>
  )
}
