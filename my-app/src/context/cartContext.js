import { createContext, useContext, useState } from 'react'

 const CartContext = createContext([])
    export const useCartContext = () => useContext (CartContext)


    const CartContextProvider = ({children}) => {
const [cartlist, setCartlist] = useState([])
const [quantity, setquantity] = useState(0)

const addItem = (prod) => {
  const idx = cartlist.findIndex((prod) => prod === prod.id) 
  if (idx === -1) {
    setCartlist([ ...cartlist, prod])
}else{
  cartlist[idx].quantity += prod.quantity
  setCartlist([...cartlist])
}
}
const totalCart = () => {
return  cartlist.reduce((acc, product) => acc + product.price * product.quantity, 0)
}

const totalQuantity = () => {
 return (cartlist.reduce((acum, product) => acum += product.quantity, 0))

}

const removeItem = (id) => {
    setCartlist(cartlist.filter(product => product.id !== id))
}

const clearCart = () => {

    setCartlist ([])
}
    


  return (

    <CartContext.Provider value={{
      
        cartlist,
        addItem,
        totalCart,
        totalQuantity,
        removeItem,
        clearCart,
        quantity,
        

    }}>
      {children}
    </CartContext.Provider>
  )
    }
export default CartContextProvider