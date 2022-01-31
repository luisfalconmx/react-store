import React, { useContext, useState } from 'react'
import propTypes from 'prop-types'
import { Trash } from 'react-feather'
import Counter from '@components/Counter'
import Button from '@components/Button'
import AppContext from '@context/AppContext'
import './index.pcss'

const CheckoutCard = ({ product, count, max }) => {
  const { updateCart, deleteFromCart } = useContext(AppContext)
  const [quantity, setQuantity] = useState(count)

  const totalPrice = () => {
    const cleanPrice = product.price.replace('$', '')
    const price = parseFloat(cleanPrice)
    return price * quantity
  }

  const incrementQuantity = () => {
    if (quantity < max) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleUpdate = () => {
    product.quantity = quantity
    updateCart(product)
  }

  const handleDelete = () => {
    deleteFromCart(product.id)
  }

  return (
    <div className="CheckoutCard">
      <Trash size={24} className="CheckoutCard__Icon" onClick={handleDelete} />
      <h2 className="CheckoutCard__Title">{product.product}</h2>
      <span className="CheckoutCard__ID">{`#${product.id}`}</span>
      <strong className="CheckoutCard__Price">${totalPrice()}</strong>
      <p className="CheckoutCard__Description">
        La descripción del producto aún no está disponible en nuestra API o la
        información del producto se está actualizando.
      </p>
      <div className="CheckoutCard__Track">
        <Counter
          count={quantity}
          max={max}
          decrement={decrementQuantity}
          increment={incrementQuantity}
        />
        <Button
          className="CheckoutCard__Button"
          type={quantity === count ? 'disabled' : 'primary'}
          onClick={handleUpdate}
        >
          Actualizar
        </Button>
      </div>
    </div>
  )
}

CheckoutCard.propTypes = {
  product: propTypes.object.isRequired,
  count: propTypes.number.isRequired,
  max: propTypes.number.isRequired
}

export default CheckoutCard
