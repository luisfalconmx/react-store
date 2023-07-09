import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { Menu, X } from 'react-feather'
import Image from '@components/Image'
import Logo from '@images/react-logo.svg'
import './index.pcss'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const Links = [
    {
      text: 'Productos',
      route: '/'
    },
    {
      text: 'Carrito',
      route: '/carrito-de-compras'
    },
    {
      text: 'Repositorio',
      url: 'https://github.com/luisfalconmx/react-store'
    }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navbarNav = classNames('Navbar__Nav', {
    'Navbar__Nav--Active': isOpen
  })

  return (
    <header className="Navbar">
      <Link to="/" className="Navbar__Identity">
        <Image
          className="Navbar__Logo"
          src={Logo}
          alt="luisfalconmx logo oficial"
          width="40"
          height="40"
        />
        <span className="Navbar__Title">React Store</span>
      </Link>
      <Menu
        className="Navbar__Button Navbar__Button--Menu"
        size={32}
        onClick={toggleMenu}
      />
      <nav className={navbarNav}>
        <X
          className="Navbar__Button Navbar__Button--X"
          size={32}
          onClick={toggleMenu}
        />
        <ul className="Navbar__List">
          {Links.map(({ text, route, url }) => (
            <li className="Navbar__Item" key={text}>
              {url ? (
                <a
                  className="Navbar__Link"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text}
                </a>
              ) : (
                <Link className="Navbar__Link" onClick={toggleMenu} to={route}>
                  {text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
