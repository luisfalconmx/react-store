import React, { useState, useEffect, useContext } from 'react'
import AppContext from '@context/AppContext'
import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([])
  const { addToCart } = useContext(AppContext)

  const API = process.env.API_ENDPOINT + '/products'
  const API_KEY = process.env.API_KEY

  useEffect(async () => {
    const axiosOptions = {
      method: 'get',
      url: API,
      headers: {
        'X-API-Key': API_KEY
      }
    }
    const response = await axios(axiosOptions)
    console.log(response)
    setProducts(response.data)
  }, [])

  return (
    <>
      <h1>Products</h1>
      {products.map((item) => (
        <div key={item.id}>
          <h2>{item.product}</h2>
          <p>{item.stock}</p>
          <p>{item.price}</p>
          <button onClick={() => addToCart(item)}>Add to cart</button>
        </div>
      ))}
    </>
  )
}

export default Products
