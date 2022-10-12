import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/NavBar/Navbar';
import { CarritoPage } from './componentes/Pages/ItemDetailContainer/CarritoPage/CarritoPage';
import { ItemDetailContainer } from './componentes/Pages/ItemDetailContainer/ItemDetailContainer';
import { NotFound404 } from './componentes/NotFound404/NotFound404';
import { Contacto } from './componentes/Contacto/Contacto';


function App() {
  return (

    <BrowserRouter>
      <Navbar /> 
      <Routes> 
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:idCategoria" element={<ItemDetailContainer />} />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<CarritoPage />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/404" element={<NotFound404 />} />
        <Route path="*" element={<Navigate to='/404' />} />
       </Routes>
   </BrowserRouter>
  ) 
    
   }

export default App;
