import React from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
const { idProducto } = useParams
console.log(idProducto);

  return (
    <div>
        <ItemDetail />
    </div>
  )
}
