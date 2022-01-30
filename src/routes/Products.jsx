import React from 'react'
import Hero from '@components/Hero'
import ProductsList from '@containers/ProductsList'
import ProductsCover from '@images/products-cover.jpg'

const Products = () => {
  return (
    <>
      <Hero
        title="Todo nuestro catalogo de productos a los mejores precios"
        caption="Productos"
        image={ProductsCover}
      />
      <ProductsList />
    </>
  )
}

export default Products
