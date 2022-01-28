import React from 'react'
import useGetProducts from '@hooks/useGetProducts'
import ProductCard from '@components/ProductCard'

const Products = () => {
  const products = useGetProducts()

  return (
    <>
      <h1>Products</h1>
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </>
  )
}

export default Products
