import React, { useEffect } from 'react'
import ProductCard from '@components/ProductCard'
import useGetProducts from '@hooks/useGetProducts'
import './index.pcss'

const ProductsList = () => {
  const Products = useGetProducts()

  useEffect(() => {}, [Products])

  return (
    <section className="ProductsList">
      {Products.length <= 0 && (
        <>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </>
      )}
      {Products.length > 0 &&
        Products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
    </section>
  )
}

export default ProductsList
