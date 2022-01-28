import React, { useContext } from 'react'
import propTypes from 'prop-types'
import AppContext from '@context/AppContext'
import './index.pcss'

const ProductCard = ({ id, product, price, stock }) => {
  const { addToCart } = useContext(AppContext)

  const handleSubmit = (e) => {
    addToCart({ id, product, price })
  }

  return (
    <div className="ProductCard">
      <h3>{product}</h3>
      <p>Precio: ${price}</p>
      {stock && <p>Stock: {stock}</p>}
      <p>id: {id}</p>
      <button onClick={handleSubmit}>Add to cart</button>
    </div>
  )
}

ProductCard.propTypes = {
  id: propTypes.number.isRequired,
  product: propTypes.string,
  price: propTypes.string,
  stock: propTypes.number
}

export default ProductCard
