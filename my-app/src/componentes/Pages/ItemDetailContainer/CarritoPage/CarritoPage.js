import React, { useState } from 'react'
import { useCartContext } from '../../../../context/cartContext'
import { Link} from "react-router-dom";
import {getFirestore, collection, addDoc} from 'firebase/firestore'
import './CarritoPage.scss'


export const CarritoPage = () => {
  const [idShop, setIdShop] = useState('')
  const [dataForm, setDataForm] =useState ({
  name: '',
  phone: '',
  email: '',
})
const { cartlist, clearCart, totalCart, removeItem } = useCartContext()
if (cartlist.length === 0) {
  return (
<>
<h1>Carrito vacio</h1>
<Link to='/'>Volver a la tienda</Link>
</>
  )
}

const createOrder = (e) => {
  e.preventDefault()
  const order = {
        buyer: {
         name: dataForm.name, 
         phone: dataForm.phone,
         email: dataForm.email,
         },
         products: cartlist.map(products => {
         const {id, name: name, price,} = products   
         return {id,name, price,
          
          total: totalCart() }})
        
        }

            const db = getFirestore()
            const orders = collection(db, 'orders')
            addDoc(orders, order)
            .then(data => console.log(data))
            .catch(error => console.log(error))
            .finally(() => {clearCart()})
     
     
}

const handleInputChange = (e) => {
  console.log( e.target.value);
  console.log(e.target.name);
  setDataForm({ ...dataForm, [e.target.name]: e.target.value })
  
}

  return (
    <div className='carrito__render'>
     <h1> Carrito de compras</h1>
     
     <ul className='carrito__fin'> 
        {cartlist.map((product) => <li> <div className='card__detail'> <img className="img__cart" src={product.foto} width="80%" alt=" Producto foto"/> <div className='card__body'> Nombre: {product.name} Categoria: {product.category} Cant: {product.cantidad} </div> </div>
        <button onClick={() => removeItem(product.id)}>X</button> </li>)}
    </ul>
     <h2> Total: ${ (totalCart ())}</h2> 
    
    <form onSubmit={createOrder}>
    <input type="text" name='name' placeholder="Nombre" value={dataForm.name} onChange={handleInputChange} />
    <input type="text" name='phone' placeholder="Telefono" value={dataForm.phone} onChange={handleInputChange}/>
    <input type="text" name='email' placeholder="Email" value={dataForm.email} onChange={handleInputChange}/>  
    <button type="submit" >Comprar</button>
    </form>     
      <button onClick={(clearCart)} > Vaciar Carrito</button>
      
  </div>
  )
  }
