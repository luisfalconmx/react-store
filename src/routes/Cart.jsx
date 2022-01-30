import React, { useContext, useState } from 'react'
import Hero from '@components/Hero'
import Toolbar from '@components/Toolbar'
import AppContext from '@context/AppContext'
import CartCover from '@images/carrito-cover.jpg'
import CartCoverWebp from '@images/carrito-cover.jpg?as=webp'

const Cart = () => {
  const { cart } = useContext(AppContext)
  const [localState] = useState(cart.length)

  return (
    <>
      <Hero
        title="Agrega productos a tu carrito y completa tu orden"
        caption="Carrito de Compras"
        image={CartCover}
        imageWebp={CartCoverWebp}
      />
      <Toolbar count={localState} />
    </>
  )
}

export default Cart
