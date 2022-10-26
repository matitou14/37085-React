import { useState } from 'react';
import React from 'react'
import "./ItemCount.scss";


const ItemCount = ({stock, init, onAdd}) => {
 
  const [ cont, setCount] = useState(init);

  const suma = () => { if (cont < stock) {
      setCount(cont + 1);
    }
    
}
const resta = () => {
  if (cont > 1) {
    setCount(cont - 1);
  }
}

const agregaCarrito = () => {
onAdd(cont);
}
  return (
   
    <div className='card__cont'>
        <button className='card__button' onClick={resta}>-</button>
          <div>{cont}</div> 
        <button className='card__button' onClick={suma}>+</button>
        <button onClick={agregaCarrito}> Agregar Al Carrito</button>
      </div>


  )
}

export default ItemCount