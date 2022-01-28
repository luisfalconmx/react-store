import React, { useContext } from 'react'
import AppContext from '@context/AppContext'

const Cart = () => {
  const { cart } = useContext(AppContext)
  console.log(cart)

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.product}</h2>
          <p>{item.stock}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Cart
