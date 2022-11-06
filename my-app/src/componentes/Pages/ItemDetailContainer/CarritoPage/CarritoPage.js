import React, { useState } from 'react'
import { useCartContext } from '../../../../context/cartContext'
import { Link} from "react-router-dom";
import {getFirestore, collection, addDoc, doc, updateDoc} from 'firebase/firestore'
import { TextField, Typography } from "@mui/material";
import './CarritoPage.scss'


export const CarritoPage = () => {
  const [idShop, setIdShop] = useState('')
  const [dataForm, setDataForm] =useState ({
  name: '',
  phone: '',
  email: '',
})
const { cartlist, clearCart, totalCart, removeItem, } = useCartContext()


const createOrder = (e) => {
  e.preventDefault()
  const order = {
        buyer: {
         name: dataForm.name, 
         phone: dataForm.phone,
         email: dataForm.email,
         },
         products: cartlist.map(products => {
         const {id, name, price, quantity} = products   
         return {id,name, price, quantity,
          
          total: totalCart() }})
        
        }

            const db = getFirestore()
            const orders = collection(db, 'orders')
            addDoc(orders, order)
            .then(data => setIdShop (data.id))
            .catch(error => console.log(error))
             .finally(() => {updateCart()})
            clearCart()
     
     
    }
    const updateCart = () => {
      CarritoPage.forEach((item) => {
        const updateStock = doc(getFirestore(), "products", item.id);
        updateDoc(updateStock, {stock: item.stock - item.cantidad});
    })
  }

    const [dataError, setDataError] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    setDataError(validate(dataForm));
    if(Object.keys(dataError).length===0){
      setIsSubmit(true)
    }
    setDataError(validate(dataForm));
 
    };

  const validate = (values) => {
    const error = {};
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.name) {
      error.name = "Escribe tu nombre completo!";
  }
  if (!values.email) {
      error.email = "Correo es requerido!";
  } else if (!regex.test(values.correo)) {
      error.email = "Este no es un correo valido!";
  }
  return error;
};

const handleInputChange = (e) => {
  console.log( e.target.value);
  console.log(e.target.name);
  setDataForm({ ...dataForm, [e.target.name]: e.target.value })
  
}

  return (
    <div className='cart__render'>
     {idShop && <h2>Compra realizada con exito, su numero de orden es: {idShop}</h2> }

 {   cartlist.length === 0
            ?
          <div className='cart__msg'>     
            <h1>Carrito vacio</h1>
            <Link to='/'>Volver a la tienda</Link>
          </div>
            :
  
<>
     
     
     
     <ul className='carrito__fin'> 
        {cartlist.map((product) => <li> <div className='card__detail'> <img className="img__cart" src={product.foto} width="80%" alt=" Producto foto"/> <div className='card__body'> Nombre: {product.name} Categoria: {product.category} Cant: {product.quantity} </div> </div>
        <button className='btn__remove' onClick={() => removeItem(product.id)}>Eliminar item</button> </li>)}
    </ul>
     <h2> Total: ${ (totalCart ())}</h2> 
    
    <form className= 'form' onSubmit={handleSubmit}>
    <Typography/>
      <TextField
          helperText="Ingrese su nombre"
          name="name"
          type="text"
          label="name"
          value={dataForm.name}
          onChange={handleInputChange}
          />
          <p>{dataError.name}</p>
      <TextField
          helperText="Ingrese su Email"
          name="email"
          type="email"                                                   
          label="email"
          required
          value={dataForm.email}
          onChange={handleInputChange}
          />
          {!isSubmit&&<button  type="submit">Registrate</button>}
          {isSubmit&&<button onClick={createOrder}>Finalizar Compra</button>}
    </form>     
      <button className='btn__remove1' onClick={(clearCart)} > Vaciar Carrito</button>
      </>    
      }
    </div>)

 
    }
