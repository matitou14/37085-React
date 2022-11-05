import React from 'react'
import './ItemList.scss'
import Item from '../Item/Item'


const ItemList = ({products}) => {
  return (
    <div className='section__card'>
            { products.map ( product => <Item key={product.id} product={product}/> )}
</div> 
  )}

export default ItemList