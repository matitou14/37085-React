
import React from "react";
import { gFetch } from "../helpers/gFetch";
// import ItemCount from "../ItemCount/ItemCount";
import{useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import "./ItemListContainer.scss"
import { Loader } from "../Loaders/Loader";





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
      products.map ( (product, index) => 
      <div key={product.id} className ="wrapper">                        
      <Link to={`/detalle/${product.id}`}>     
            
                <div className="card">
                  <img src= {product.foto} alt="Foto producto" className="card__image"/>
                  <div className="card__body">
                    <h2 className="card__title">{product.name} </h2>
                    <p className="card__category">{product.category}</p>
                    <h3 className="card__price">{product.price}</h3>

      
                  </div>
                </div>
        </Link>
    
      </div>  )}     
 </>
  )
  


  }   
export default ItemListContainer
