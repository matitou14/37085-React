import React from 'react'
import { Link } from 'react-router-dom'


const ItemList = ({products}) => {
  return (
    <div>
            { products.map ( (product, index) => 
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
            
         </div>)}
</div> 
  )}

export default ItemList