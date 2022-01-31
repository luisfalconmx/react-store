import { useState } from 'react'

const useCart = () => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productExists = cart.find((item) => item.id === product.id)

    if (productExists) {
      const newData = cart.map((item) => {
        if (item.id === product.id) {
          const totalQuantity = item.quantity + product.quantity

          if (totalQuantity >= product.stock) {
            item.quantity = product.stock
            return item
          }

          item.quantity = totalQuantity
          return item
        }

        return item
      })

      setCart(newData)
    } else {
      setCart([...cart, product])
    }
  }

  const updateCart = (product) => {
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
