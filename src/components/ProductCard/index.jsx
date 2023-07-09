import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { CheckCircle, AlertCircle } from 'react-feather'
import Button from '@components/Button'
import Counter from '@components/Counter'
import AppContext from '@context/AppContext'
import './index.pcss'

const ProductCard = ({
  id,
  product,
  price,
  stock,
  description = 'The product description is not yet available.'
}) => {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useContext(AppContext)
  const navigate = useNavigate()

  const incrementQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleSubmit = async () => {
    await addToCart({ id, product, price, stock, quantity })
    navigate('/carrito-de-compras')
  }

  const ProductCardClasses = classNames('ProductCard', {
    'ProductCard--Disabled': stock <= 0
  })

  return (
    <div className={ProductCardClasses}>
      <span className="ProductCard__ID">{id ? `#${id}` : ''}</span>
      <h2 className="ProductCard__Title">{product}</h2>
      <strong className="ProductCard__Price">{price}</strong>
      {stock > 0 ? (
        <div className="ProductCard__Label ProductCard__Label--Success">
          <CheckCircle className="ProductCard__Icon" size={24} />
          <span className="ProductCard__LabelText">
            Available in stock ({stock})
          </span>
        </div>
      ) : (
        <div className="ProductCard__Label ProductCard__Label--Error">
          <AlertCircle className="ProductCard__Icon" size={24} />
          <span className="ProductCard__LabelText">Out of Stock</span>
        </div>
      )}
      <p className="ProductCard__Description">{description}</p>
      <div className="ProductCard__Actions">
        <Counter
          count={quantity}
          max={stock}
          decrement={decrementQuantity}
          increment={incrementQuantity}
          disabled={stock <= 0 || stock === undefined}
        />
        <Button
          className="ProductCard__Button"
          onClick={handleSubmit}
          type={stock <= 0 || stock === undefined ? 'disabled' : 'primary'}
        >
          Add to cart
        </Button>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  id: propTypes.string,
  product: propTypes.string,
  price: propTypes.string,
  stock: propTypes.number,
  description: propTypes.string
}

export default ProductCard
