import React from 'react'

function Item ({product}) {
  return (
    <>
    <h1>{product.name}</h1>
    <button onClick={() => console.log("Muestra detalle")}> Detalle</button>
    <button onClick={() => console.log("Saluda") }>Salute</button>
    </>
  )
}

export default Item