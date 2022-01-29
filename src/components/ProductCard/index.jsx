import React, { useContext } from 'react'
import propTypes from 'prop-types'
import AppContext from '@context/AppContext'
import Button from '@components/Button'
import './index.pcss'

const ProductCard = ({ id, product, price, stock }) => {
  const { addToCart } = useContext(AppContext)

  const handleSubmit = (e) => {
    addToCart({ id, product, price })
  }

  return (
    <div className="ProductCard">
      <h2 className="ProductCard__Title">{product}</h2>
      <p className="ProductCard__Price">Precio: ${price}</p>
      {stock && <p>Stock: {stock}</p>}
      <p>id: {id}</p>
      <Button text="Agregar al carrito" onClick={handleSubmit}>
        Add to cart
      </Button>
    </div>
  )
}

ProductCard.propTypes = {
  id: propTypes.string.isRequired,
  product: propTypes.string,
  price: propTypes.string,
  stock: propTypes.number
}

export default ProductCard
