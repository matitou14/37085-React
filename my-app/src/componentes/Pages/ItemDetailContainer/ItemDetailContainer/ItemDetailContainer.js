import React from 'react';
import { gFetch } from "../../../helpers/gFetch";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import'./ItemDetailContainer.scss'
import { ItemDetail } from '../../../ItemDetail/ItemDetail';
import { Loader } from '../../../Loaders/Loader';
import { getFirestore, doc, getDoc } from 'firebase/firestore';



export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState (true);
  const { idProducto } = useParams ()

useEffect(() => {
  const db = getFirestore ();
  const queryDoc = doc (db, "products", idProducto);
  getDoc(queryDoc)
  .then(data => setProduct ({id: data.id, ...data.data()}))
  .catch(error => console.log(error))
  .finally(() => setLoading(false))
},[])

  return (
      <>
        {loading ? <h4> <Loader /> </h4>:
        < ItemDetail product = {(product)} />}
        
      </>
  )
}
