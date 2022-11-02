import { createContext, useContext, useState } from 'react'

 const CartContext = createContext([])
    export const useCartContext = () => useContext (CartContext)


    const CartContextProvider = ({children}) => {
const [cartlist, setCartlist] = useState([])

const addItem = (producto) => {
  const idx = cartlist.findIndex((product) => producto.id === product.id) 
  if (idx === -1) {
    setCartlist([ ...cartlist, producto])
}else{
  cartlist[idx].cantidad += producto.cantidad
  setCartlist([...cartlist])
}
}
const totalCart = () => {
return  cartlist.reduce((acc, product) => acc + product.price * product.cantidad, 0)
}

const totalQuantity = () => {
return cartlist.reduce((acum, product) => acum += product.cantidad, 0)

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
        

    }}>
      {children}
    </CartContext.Provider>
  )
    }
export default CartContextProvider