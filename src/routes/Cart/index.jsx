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
    setTotal(parseFloat(totalPrice).toFixed(2))
  }, [cart])

  return (
    <>
      <Hero
        title="Add products to your cart and complete your order"
        caption="Shopping Cart"
        image={CartCover}
        imageWebp={CartCoverWebp}
      />
      <div className="Cart__Container">
        <Toolbar count={cart.length} />
        {cart.length <= 0 && (
          <EmptyCard text="There are no products in your cart" />
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

        {cart.length > 0 && (
          <div className="Cart__Total">
            Total: <b className="Cart__TotalNumber">${total}</b>
          </div>
        )}

        <div className="Cart__Track">
          <Link to="/" className="Cart__Link">
            <Button className="Cart__Button" outline>
              See more products
            </Button>
          </Link>
          <Button
            className="Cart__Button"
            type={cart.length <= 0 ? 'disabled' : 'primary'}
          >
            Complete order
          </Button>
        </div>
      </div>
    </>
  )
}

export default Cart
