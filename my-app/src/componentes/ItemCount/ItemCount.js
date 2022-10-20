import { useState } from 'react';
import React from 'react'
import "./ItemCount.scss";


const ItemCount = () => {
 
  const [ cont, setCount] = useState(0);

  const suma = () => {
    setCount(cont + 1);
}
const resta = () => {
  setCount(cont - 1);
}  
  return (
   
    <div className='card__cont'>
        <button className='card__button' onClick={resta}>-</button>
          <div>{cont}</div> 
        <button className='card__button' onClick={suma}>+</button>
      </div>


  )
}

export default ItemCount