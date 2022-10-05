import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
  <header className="header">
    <nav className='navbar'>
      <img className="navbar__logo" src="./assets/img/Pupinoss.png" alt="logo" />
      <input type="checkbox" className="input__nav" id="nav-toggle"/>
      <label htmlFor="nav-toggle"><i className="ri-menu-line"></i></label>
      <div className='navbar__menu'> 
        <ul className='navbar__list'>
          <li className='navbar__item'><a href="#" className='navbar__link'>Inicio</a></li>
          <li className='navbar__item'><a href="#" className='navbar__link'>Productos</a></li>
          <li className='navbar__item'><a href="#" className='navbar__link'>Contacto</a></li>
          <li className='navbar__item'><a href="#" className='item__carrito'> <CartWidget /> </a></li>  
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