import React, { useContext } from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import AppContext from '@context/AppContext'
import { CheckCircle, AlertCircle } from 'react-feather'
import Button from '@components/Button'
import './index.pcss'

const ProductCard = ({
  id,
  product,
  price,
  stock,
  description = 'La descripción del producto aún no está disponible en nuestra API o la información del producto se está actualizando.'
}) => {
  const { addToCart } = useContext(AppContext)
  const ProductCardClasses = classNames('ProductCard', {
    'ProductCard--Disabled': stock <= 0
  })

  const handleSubmit = () => {
    addToCart({ id, product, price, stock })
  }

  return (
    <div className={ProductCardClasses}>
      <span className="ProductCard__ID">{`#${id}`}</span>
      <h2 className="ProductCard__Title">{product}</h2>
      <strong className="ProductCard__Price">{price}</strong>
      {stock > 0 ? (
        <div className="ProductCard__Label ProductCard__Label--Success">
          <CheckCircle className="ProductCard__Icon" size={24} />
          <span className="ProductCard__LabelText">
            Disponible en stock ({stock})
          </span>
        </div>
      ) : (
        <div className="ProductCard__Label ProductCard__Label--Error">
          <AlertCircle className="ProductCard__Icon" size={24} />
          <span className="ProductCard__LabelText">Agotado</span>
        </div>
      )}
      <p className="ProductCard__Description">{description}</p>
      <div className="ProductCard__Actions">
        <Button
          className="ProductCard__Button"
          onClick={handleSubmit}
          type={stock <= 0 ? 'disabled' : 'primary'}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  id: propTypes.string.isRequired,
  product: propTypes.string,
  price: propTypes.string,
  stock: propTypes.number,
  description: propTypes.string
}

export default ProductCard
