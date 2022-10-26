import React from 'react'
import { useCartContext } from '../../../../context/cartContext'

export const CarritoPage = () => {
const { cartlist, vaciarCarrito } = useCartContext()

  return (
    <div>
     <h1> Carrito de compras</h1>
     <ul> 
        {cartlist.map((product) => <li> Nombre: {product.name} Categoria: {product.category} Cant: {product.cantidad}</li> )}
      </ul>
      <button onClick={(vaciarCarrito)} > Vaciar Carrito</button>
    </div>
  )
  }
