import { createContext, useContext, useState } from 'react'

 const CartContext = createContext([])
    export const useCartContext = () => useContext (CartContext)


    const CartContextProvider = ({children}) => {
const [cartlist, setCartlist] = useState([])

const addItem = (producto) => {
    setCartlist([ ...cartlist , producto])
}


const vaciarCarrito = () => {

    setCartlist ([])
}

  return (
    <CartContext.Provider value={{
        cartlist,
        addItem,
        vaciarCarrito

    }}>
      {children}
    </CartContext.Provider>
  )
}
export default CartContextProvider