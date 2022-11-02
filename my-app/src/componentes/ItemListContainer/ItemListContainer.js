
import React from "react";
import{useState, useEffect} from 'react';
import {getFirestore, getDocs, collection,query, where } from 'firebase/firestore'
import {useParams } from "react-router-dom";
import "./ItemListContainer.scss"
import { Loader } from "../Loaders/Loader";
import ItemList from "../ItemList/ItemList";





function ItemListContainer() {
 const [products, setProducts] = useState([]);
 const [loading, setLoading ]= useState (true);
 const {idCategoria} = useParams()

useEffect(() => {
    const db = getFirestore ();
    const productCollection = collection (db, "products");

    if (idCategoria) {
    const queryFilter = query (productCollection, 
      where(("category"), "==", idCategoria));
    getDocs(queryFilter) 
    .then(data => setProducts (data.docs.map(products => ({id: products.id, ...products.data()}))))
    .catch(error => console.log(error))
    .finally(() => setLoading(false)) 
    } else {
      getDocs(productCollection)
      .then(data => setProducts (data.docs.map(products => ({id: products.id, ...products.data()}))))
      .catch(error => console.log(error))
      .finally(() => setLoading(false)) 
    }

},[])

return(
  <>
    <div> Pupinos kids  </div>
    { loading  ? <div> <Loader /> </div>
    :
    <ItemList products={products} /> }     
 </>
  )
  


  }  

export default ItemListContainer
