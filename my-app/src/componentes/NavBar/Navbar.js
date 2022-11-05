import React from 'react';
import { Link} from "react-router-dom";
import { useCartContext } from '../../context/cartContext';
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.scss";
const Navbar = () => {
  const {totalQuantity} = useCartContext()
  return (
  <header className="header">
    <nav className='navbar'>
    <img className="navbar__logo" src= "./assets/img/Pupinoss.png" alt="logo" />
      <input type="checkbox" className="input__nav" id="nav-toggle"/>
      <label htmlFor="nav-toggle"><i className="ri-menu-line"></i></label>
      <div className='navbar__menu'> 
        <ul className='navbar__list'>
          <li className='navbar__item'><Link to='/' className='navbar__link'>Inicio</Link></li>
          <li className='navbar__item'><Link to='/categoria/sillones' className='navbar__link'>Sillones</Link></li>
          <li className='navbar__item'><Link to='/categoria/catalogo'className='navbar__link'>Catalogo</Link></li>
          <li className='navbar__item'><Link to='/contact' className='navbar__link'>Contacto</Link></li>
          <div>
            {totalQuantity () !== 0 && totalQuantity ()}
          <li className='navbar__item'><Link to='/carrito' className='item__carrito'> <CartWidget /> </Link></li>  
          </div>
        
        </ul>
      
      </div>
      </nav>
        
  </header>  
  )
}

export default Navbar

