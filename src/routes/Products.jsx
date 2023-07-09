import React from 'react'
import Hero from '@components/Hero'
import ProductsList from '@containers/ProductsList'
import ProductsCover from '@images/products-cover.jpg'

const Products = () => {
  return (
    <>
      <Hero
        title="The best gadgets can you find with the lowest prices"
        caption="Products"
        image={ProductsCover}
      />
      <ProductsList />
    </>
  )
}

export default Products
