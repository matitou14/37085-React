import React from 'react'
import CartWidget from './CartWidget'
import "./Navbar.css"

const Navbar = () => {
  return (
    <header>
        <nav className="items__nav" >
            <h1 className="logo__nav">Pupinos kids</h1>
                <ul className='list__nav'>
                    <li className="links__nav"> 
                        <a href="" >Home</a>
                        <a href="" >Productos</a>
                        <a href="" >Contacto</a>
                        <a href="" ><CartWidget /></a>
                    </li>
                </ul>  
        </nav> 
    </header>
  )
}

export default Navbar