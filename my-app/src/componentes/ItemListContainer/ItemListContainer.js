
import React from "react";
import { gFetch } from "../helpers/gFetch";
// import ItemCount from "../ItemCount/ItemCount";
import{useState, useEffect} from 'react';
import {useParams } from "react-router-dom";
import "./ItemListContainer.scss"
import { Loader } from "../Loaders/Loader";
import ItemList from "../ItemList/ItemList";





function ItemListContainer() {
 const [products, setProducts] = useState([]);
 const [loading, setLoading ]= useState (true);
 const {idCategoria} = useParams()
  console.log(idCategoria)


    useEffect(() => {
        if (idCategoria) {
 gFetch()
.then(data => setProducts (data.filter(product => product.category === idCategoria)))
.catch(err => console.log(err))
.finally(() => setLoading(false))
        } else {gFetch()
            .then((data) => setProducts (data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
    }, [idCategoria]);

  return(
  <>
    <div> Pupinos kids  </div>
    {/* <div> <ItemCount /> </div> */}
    { loading  ? <div> <Loader /> </div>
    :
    <ItemList products={products} /> }     
 </>
  )
  


  }   
export default ItemListContainer
