import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@containers/Layout'
import AppContext from '@context/AppContext'
import useCart from '@hooks/useCart'

// Import routes
const Home = lazy(() => import('@routes/Home'))
const Products = lazy(() => import('@routes/Products'))
const Cart = lazy(() => import('@routes/Cart'))
const NotFound = lazy(() => import('@routes/NotFound'))

const Router = () => {
  const cart = useCart()

  return (
    <AppContext.Provider value={cart}>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Products />} />
              <Route path="/carrito-de-compras" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default Router
