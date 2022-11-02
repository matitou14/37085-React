import React from 'react'
import { useCartContext } from '../../../../context/cartContext'

export const CarritoPage = () => {
const { cartlist, clearCart, totalCart, removeItem } = useCartContext()
if (cartlist.length === 0) {
  return (
<>
<h1>Carrito vacio</h1>
</>
  )
}
const createOrder = async (e) => {
  e.preventDefault()
  const order = {
    buyer: {
      name: "Darth Vader",
      phone: "0303456",
      email: "ImYourFather@DeathStar.com",
    },
    items: cartlist.map(products => {
      const {id, name: name, price} = products
      return {id, name, price}
    }),
    total: totalCart(),
  }
 console.log(createOrder);

}

  return (
    <div className='carrito__render'>
     <h1> Carrito de compras</h1>
     <ul className='carrito__fin'> 
        {cartlist.map((product) => <li> <div> <img src={product.foto}/> </div> Nombre: {product.name} Categoria: {product.category} Cant: {product.cantidad}
        <button onClick={() => removeItem(product.id)}>X</button> </li>)}
    </ul>
     <h2> Total: ${ (totalCart ())}</h2> 
      <button onClick={(clearCart)} > Vaciar Carrito</button>
    </div>
  )
  }
