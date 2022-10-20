import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
const ImputCount = () => {
    return (
        <>
        <Link to='/carrito'>
        <button className='btn__agregar__carrito' onClick= {() => console.log('Ir al Carrito')}>Ir al Carrito</button>;
        </Link>
        <Link to='/'>
        <button className='btn__agregar__carrito' onClick= {() => console.log('Ir al Carrito')}>Seguir Comprando</button>
        </Link>
        </>
    )
}
const ButtonCount = ({handleInter}) =>  {
    return (
        <button className='btn__agregar__carrito2' onClick= {handleInter}>Comprar</button>
    )
}
export const AgregarAlCarrito = () => {
  
    const [InputType, setInputType] = useState('button')
    const handleInter = () => {
        setInputType('input')
    }
    return (  
        <div>
       {  InputType === 'button' ? <ButtonCount handleInter={handleInter}/> : <ImputCount/>}
        </div>
  )

    }
