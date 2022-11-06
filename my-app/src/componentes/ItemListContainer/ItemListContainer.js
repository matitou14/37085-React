
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
 const {idCategory} = useParams()

useEffect(() => {
    const db = getFirestore ();
    const productCollection = collection (db, "products");
    const queryFilter = idCategory ? query(productCollection, where("category", "==", idCategory)) 
    : productCollection
     getDocs(queryFilter)
      .then(data => setProducts (data.docs.map(products => ({id: products.id, ...products.data()}))))
      .catch(error => console.log(error))
      .finally(() => setLoading(false)) 
    },[idCategory])

return(
  <>
    |
    { loading  ? <div> <Loader /> </div>
    :
    <ItemList products={products} /> }     
 </>
  )
  


  }  

export default ItemListContainer
