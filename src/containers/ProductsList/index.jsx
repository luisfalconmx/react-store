import React from 'react'
import ProductCard from '@components/ProductCard'
import useGetProducts from '@hooks/useGetProducts'
import './index.pcss'

const ProductsList = () => {
  const Products = useGetProducts()

  return (
    <section className="ProductsList">
      {Products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  )
}

export default ProductsList
