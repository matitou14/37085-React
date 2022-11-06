import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/NavBar/Navbar';
import { CarritoPage } from './componentes/Pages/ItemDetailContainer/CarritoPage/CarritoPage';
import { NotFound404 } from './componentes/NotFound404/NotFound404';
import { Contact } from './componentes/Contacto/Contact';
import { ItemDetailContainer } from './componentes/Pages/ItemDetailContainer/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/cartContext';

 


function App() {
  
  
  return ( 
    <CartContextProvider>
    <BrowserRouter>
      <Navbar /> 
      <Routes> 
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CarritoPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/404" element={<NotFound404 />} />
        <Route path="*" element={<Navigate to='/404' />} />
       </Routes>
   </BrowserRouter>
   </CartContextProvider>
  ) 
    
   }

export default App;
