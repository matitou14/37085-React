import React from 'react';
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
  <header className="header">
    <nav className='navbar'>
      <Link to='/' className="navbar__logo">
      <img src="./assets/img/Pupinoss.png" alt="logo" />
      </Link>
      <input type="checkbox" className="input__nav" id="nav-toggle"/>
      <label htmlFor="nav-toggle"><i className="ri-menu-line"></i></label>
      <div className='navbar__menu'> 
        <ul className='navbar__list'>
          <li className='navbar__item'><Link to='/' className='navbar__link'>Inicio</Link></li>
          <li className='navbar__item'><Link to='/categoria/sillones' className='navbar__link'>Sillones</Link></li>
          <li className='navbar__item'><Link to='/categoria/RopaBebe'className='navbar__link'>Ropa Bebé</Link></li>
          <li className='navbar__item'><Link to='/contacto' className='navbar__link'>Contacto</Link></li>
          <li className='navbar__item'><Link to='/carrito' className='item__carrito'> <CartWidget /> </Link></li>  
        </ul>
      </div>
    </nav>
  </header>  
  )
}

export default Navbar






// / import React from 'react'
// // import CartWidget from './CartWidget/CartWidget'
// // // import "./NavBar/Navbar.css"

// // const Navbar = () => {
// //   return (
// //     <header>
// //         <nav className="items__nav" >
// //             <h1 className="logo__nav">Pupinos kids</h1>
// //                 <ul className='list__nav'>
// //                     <li className="links__nav"> 
// //                         <a href="" >Home</a>
// //                         <a href="" >Productos</a>
// //                         <a href="" >Contacto</a>
// //                         <a href="" ><CartWidget /></a>
// //                     </li>
// //                 </ul>  
// //         </nav> 
// //     </header>
// //   )
// // }

// // export default Navbar