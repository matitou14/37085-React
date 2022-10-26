import { useCartContext } from '../../context/cartContext';

import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.scss';


export const ItemDetail = ( {product}) => {
 
const { addItem } = useCartContext()
const onAdd = (cantidad) => {
console.log('onAdd', cantidad);
addItem( { ...product, cantidad })

}
  return (
  <>
    
  <div className='card__detail'>                        
     
            <img src= {product.foto} alt="Foto producto" className="card__image__detail"/>
                  <div className="card__body">
                    <h4 className="card__title">{product.name} </h4>
                    <p className="card__category">{product.category}</p>
                    <button onClick={() => onAdd()} > Agregar Al Carrito</button>
                     
                    
                 </div>
                 < ItemCount onAdd={onAdd} stock={product.stock} init={1} />
    </div>
    </>
  )}
 