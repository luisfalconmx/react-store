import { useState } from 'react'

const useCart = () => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productExists = cart.find((item) => item.id === product.id)

    if (productExists) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            item.quantity = item.quantity + product.quantity
          }

          return item
        })
      )
    } else {
      setCart([...cart, product])
    }
  }

  const updateCart = (id, product) => {
    setCart(cart.map((item) => (item.id === product.id ? product : item)))
  }

  const deleteFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const deleteCart = () => {
    setCart([])
  }

  return {
    cart,
    addToCart,
    updateCart,
    deleteFromCart,
    deleteCart
  }
}

export default useCart
