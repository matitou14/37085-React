import { useState } from 'react';
import React from 'react'
import "./ItemCount.scss";


const ItemCount = ({stock, init, onAdd}) => {
 
  const [ cont, setCount] = useState(init);

  const addItem = () => { if (cont < stock) {
      setCount(cont + 1);
    }
    
}
const subtractItem = () => {
  if (cont > 1) {
    setCount(cont - 1);
  }
}

const addtocart = () => {
onAdd(cont);
}
  return (
   
    <div className='card__cont'>
        <button className='card__button' onClick={subtractItem}>-</button>
          <div>{cont}</div> 
        <button className='card__button' onClick={addItem}>+</button>
        <div className='card__cont__car'>
        <button onClick={addtocart}> Agregar Al Carrito</button>
        </div>
      </div>


  )
}

export default ItemCount