import React from 'react'
import { useCartContext } from '../../../../context/cartContext'

export const CarritoPage = () => {
const { cartlist, vaciarCarrito } = useCartContext()

  return (
    <div className='carrito__render'>
     <h1> Carrito de compras</h1>
     <ul className='carrito__fin'> 
        {cartlist.map((product) => <li> <div> <img src={product.foto}/> </div> Nombre: {product.name} Categoria: {product.category} Cant: {product.cantidad}</li> )}
    </ul>
      <button onClick={(vaciarCarrito)} > Vaciar Carrito</button>
    </div>
  )
  }
