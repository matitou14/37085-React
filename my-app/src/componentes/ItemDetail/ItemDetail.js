import React from 'react';

export const ItemDetail = ( {product}) => {
 console.log (product)

  return (
  <div 
      key={product.id}
      style={{ marginLeft: 100}}
      className='col-md-3'>                        
     
            <div className="card w-100 mt-5" >
                 <div className="card-header">
                      {`${product.name} - ${product.category}`}
                </div>
                <div className="card-body">
                    <img src={product.foto} alt='' className='w-50' />
                     {product.price}                                                            
                </div>
  
                <div className="card-footer">                                                        
                       
            </div>
    </div>
  </div>
  )}
 