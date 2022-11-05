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
const { cartlist, clearCart, totalCart, removeItem, quantity } = useCartContext()


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

    const [erroresDatos, setErroresDatos] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    setErroresDatos(validacion(dataForm));
    if(Object.keys(erroresDatos).length===0){
      setIsSubmit(true)
    }
    setErroresDatos(validacion(dataForm));
 
    };

  const validacion = (valores) => {
    const errores = {};
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!valores.name) {
      errores.name = "Escribe tu nombre completo!";
  }
  if (!valores.email) {
      errores.email = "Correo es requerido!";
  } else if (!regex.test(valores.correo)) {
      errores.email = "Este no es un correo valido!";
  }
  return errores;
};

const handleInputChange = (e) => {
  console.log( e.target.value);
  console.log(e.target.name);
  setDataForm({ ...dataForm, [e.target.name]: e.target.value })
  
}

  return (
    <div className='carrito__render'>
     {idShop && <h2>Compra realizada con exito, su numero de orden es: {idShop}</h2> }

 {   cartlist.length === 0
            ?
          <div>     
            <h1>Carrito vacio</h1>
            <Link to='/'>Volver a la tienda</Link>
          </div>
            :
  
<>
     
     
     
     <ul className='carrito__fin'> 
        {cartlist.map((product) => <li> <div className='card__detail'> <img className="img__cart" src={product.foto} width="80%" alt=" Producto foto"/> <div className='card__body'> Nombre: {product.name} Categoria: {product.category} Cant: {product.quantity} </div> </div>
        <button onClick={() => removeItem(product.id)}>X</button> </li>)}
    </ul>
     <h2> Total: ${ (totalCart ())}</h2> 
    
    <form className= 'formulario' onSubmit={handleSubmit}>
    <Typography/>
      <TextField
          helperText="Ingrese su nombre"
          name="name"
          type="text"
          label="name"
          value={dataForm.name}
          onChange={handleInputChange}
          />
          {/* <p>{erroresDatos.nombre}</p> */}
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
      <button onClick={(clearCart)} > Vaciar Carrito</button>
      </>    
      }
    </div>)

 
    }
