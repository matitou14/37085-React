import React from 'react';
import { gFetch } from "../../../helpers/gFetch";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import'./ItemDetailContainer.scss'
import { ItemDetail } from '../../../ItemDetail/ItemDetail';
import { Loader } from '../../../Loaders/Loader';
import { AgregarAlCarrito} from '../../../AgregarAlCarrito/AgregarAlCarrito'; 


export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState (true);
const { idProducto } = useParams ()


useEffect(() => {
  if (idProducto) {
gFetch()
.then(data => setProduct (data.find(product => product.id === idProducto)))
.catch(err => console.log(err))
.finally(() => setLoading(false))
  } else { gFetch()
      .then((data) => setProduct (data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }
}, [idProducto]);



  return (
      <>
        {loading ? <h4> <Loader /> </h4>:
        < ItemDetail product = {(product)} />}
        
      </>
  )
}
