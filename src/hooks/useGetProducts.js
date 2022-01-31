import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetProducts = () => {
  const [products, setProducts] = useState([])

  // const API = 'https://my.api.mockaroo.com/products'
  // const API_KEY = '253a0410'

  const API = 'http://localhost:4000/products'
  const API_KEY = '58239'

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
