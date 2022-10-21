import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/NavBar/Navbar';
import { CarritoPage } from './componentes/Pages/ItemDetailContainer/CarritoPage/CarritoPage';

import { NotFound404 } from './componentes/NotFound404/NotFound404';
import { Contacto } from './componentes/Contacto/Contacto';
import { ItemDetailContainer } from './componentes/Pages/ItemDetailContainer/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/cartContext';
 


function App() {
  
  
  return ( 
    <CartContextProvider>
    <BrowserRouter>
      <Navbar /> 
      <Routes> 
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<CarritoPage />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/404" element={<NotFound404 />} />
        <Route path="*" element={<Navigate to='/404' />} />
       </Routes>
   </BrowserRouter>
   </CartContextProvider>
  ) 
    
   }

export default App;
