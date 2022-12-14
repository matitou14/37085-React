import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.scss';

export const ItemDetail = ({ product }) => {
  const [isCount, setIsCount] = useState(true);
  const { addItem } = useCartContext()
  const onAdd = (quantity) => {
    addItem({ ...product, quantity })
    setIsCount(false)
  }
  return (
    <>

      <div className='card__detail'>

        <img src={product.foto} alt="Foto producto" className="card__image__detail" />
        <div className="card__body">
          <h4 className="card__title">{product.name} </h4>
          <p className="card__category">{product.description}</p>
          <p className="card__price">${product.price}</p>
        


        </div>
      
        <div>
          {
          isCount ?
            < ItemCount onAdd={onAdd} stock={product.stock} init={1} />
            :
            <div className='card__btn__inter'>
              <Link to='/cart'>
                <button>Ir al Carrito</button>
              </Link>
              <Link to='/'>
                <button>Seguir Comprando</button>
              </Link>
            </div>}
          </div>
     </div> 
    </>
  )
}



