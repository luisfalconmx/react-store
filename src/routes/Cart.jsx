import React, { useContext } from 'react'
import AppContext from '@context/AppContext'
import ProductCard from '@components/ProductCard'

const Cart = () => {
  const { cart } = useContext(AppContext)

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Cart
