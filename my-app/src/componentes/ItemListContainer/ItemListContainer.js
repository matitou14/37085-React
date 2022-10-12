
import React from "react";
import { gFetch } from "../helpers/gFetch";
// import ItemCount from "../ItemCount/ItemCount";
import{useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";



function ItemListContainer() {
 const [products, setProducts] = useState([]);
 const [loading, setLoading ]= useState (true);
 const {idCategoria} = useParams(); 
 console.log(idCategoria);

    useEffect(() => {
        if (idCategoria) {
 gFetch()
.then((data) => setProducts (data.filter((product) => product.category === idCategoria)))
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
    <div> Hello </div>
    {/* <div> <ItemCount /> </div> */}
    { loading  ? <h2> cargando...</h2>
    :
      products.map ( (product, index) => <div 
      key={product.id}
      style={{ marginLeft: 100}}
      className='col-md-3'>                        
      <Link to={`/detalle/${product.id}`}>   
            <div className="card w-100 mt-5" >
                 <div className="card-header">
                      {`${product.name} - ${product.category}`}
                </div>
                <div className="card-body">
                    <img src={product.foto} alt='' className='w-50' />
                     {product.price}                                                            
                </div>
  
                <div className="card-footer">                                                        
                       {/* <button className="btn btn-outline-primary btn-block">
                  detalle del producto
                        </button> */}
                </div>
            </div>
      </Link>
     </div> )}
  </>
)}
export default ItemListContainer