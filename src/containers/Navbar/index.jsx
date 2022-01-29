import React from 'react'
import { Link } from 'react-router-dom'
import Image from '@components/Image'
import Logo from '@images/luisfalconmx-logo.png'
import LogoWebp from '@images/luisfalconmx-logo.png?as=webp'
import './index.pcss'

const Navbar = () => {
  const Links = [
    {
      text: 'Inicio',
      route: '/'
    },
    {
      text: 'Productos',
      route: '/productos'
    },
    {
      text: 'Carrito',
      route: '/carrito-de-compras'
    },
    {
      text: 'Contacto',
      route: '/not-found'
    }
  ]

  return (
    <header className="Navbar">
      <Link to="/" className="Navbar__Identity">
        <Image
          className="Navbar__Logo"
          src={Logo}
          srcSet={LogoWebp}
          alt="luisfalconmx logo oficial"
        />
        <span className="Navbar__Title">SPA Store</span>
      </Link>
      <nav className="Navbar__Nav">
        <ul className="Navbar__List">
          {Links.map(({ text, route }) => (
            <li className="Navbar__Item" key={text}>
              <Link className="Navbar__Link" to={route}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
