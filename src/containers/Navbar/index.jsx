import React from 'react'
import { Link } from 'react-router-dom'
import './index.pcss'

const Navbar = () => (
  <header className="Navbar">
    <nav>
      <ul>
        <li>
          <Link to="/">inicio</Link>
        </li>
        <li>
          <Link to="/productos">productos</Link>
        </li>
        <li>
          <Link to="/carrito-de-compras">carrito de compras</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navbar
