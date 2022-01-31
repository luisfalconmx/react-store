import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '@components/Hero'
import Toolbar from '@components/Toolbar'
import EmptyCard from '@components/EmptyCard'
import Button from '@components/Button'
import CheckoutCard from '@components/CheckoutCard'
import AppContext from '@context/AppContext'
import CartCover from '@images/carrito-cover.jpg'
import CartCoverWebp from '@images/carrito-cover.jpg?as=webp'
import './index.pcss'

const Cart = () => {
  const { cart } = useContext(AppContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const reducer = (previous, current) => {
      return previous + current
    }

    const prices = cart.map((item) => {
      const cleanPrice = item.price.replace('$', '')
      const price = parseFloat(cleanPrice).toFixed(2) * item.quantity
      return price
    })

    const totalPrice = prices.reduce(reducer, 0)
    setTotal(totalPrice)
  }, [cart])

  return (
    <>
      <Hero
        title="Agrega productos a tu carrito y completa tu orden"
        caption="Carrito de Compras"
        image={CartCover}
        imageWebp={CartCoverWebp}
      />
      <Toolbar count={cart.length} />
      {cart.length <= 0 && (
        <EmptyCard text="No tienes productos en tu carrito" />
      )}
      {cart.map((product) => (
        <CheckoutCard
          key={product.id}
          product={product}
          count={product.quantity}
          max={product.stock}
          increment={() => product.quantity + 1}
        />
      ))}
      <div className="Cart__Track">
        <Link to="/productos">
          <Button outline>Ver más productos</Button>
        </Link>
        <Button type={cart.length <= 0 ? 'disabled' : 'primary'}>
          Completar orden
        </Button>
      </div>
      tu carrito: {total}
    </>
  )
}

export default Cart
