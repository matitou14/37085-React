import React from 'react';
import { gFetch } from "../../../helpers/gFetch";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import'./ItemDetailContainer.scss'
import { ItemDetail } from '../../../ItemDetail/ItemDetail';
import { Loader } from '../../../Loaders/Loader';



export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState (true);
  const { idProducto } = useParams ()


useEffect(() => {
  
gFetch(idProducto)
.then(data =>  setProduct(data))
.catch(err => console.log(err))
.finally(() => setLoading(false))
  
}, [idProducto]);

console.log(product)

  return (
      <>
        {loading ? <h4> <Loader /> </h4>:
        < ItemDetail product = {(product)} />}
        
      </>
  )
}
