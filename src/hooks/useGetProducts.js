import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetProducts = () => {
  const [products, setProducts] = useState([])

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
    setProducts(response.data)
  }, [])

  return products
}

export default useGetProducts
