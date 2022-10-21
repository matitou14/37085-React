import { useCartContext } from '../../context/cartContext';
import { AgregarAlCarrito } from '../AgregarAlCarrito/AgregarAlCarrito';
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
                    {/* < ItemCount onAdd={onAdd} />
                    <AgregarAlCarrito /> */}
                 </div>
    </div>
    </>
  )}
 