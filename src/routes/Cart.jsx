import React, { useContext } from 'react'
import AppContext from '@context/AppContext'

const Cart = () => {
  const { cart } = useContext(AppContext)
  console.log('cart', cart)

  return (
    <div>
      <h1>Cart</h1>
      <p>this is a cart</p>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.product}</h2>
          <span>{item.id}</span>
          <p>{item.quantity}</p>
          <b>{item.price}</b>
        </div>
      ))}
    </div>
  )
}

export default Cart
