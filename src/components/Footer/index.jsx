import React from 'react'
import { Link } from 'react-router-dom'
import Image from '@components/Image'
import Logo from '@images/react-logo.svg'
import { GitHub, Facebook, Instagram, Linkedin } from 'react-feather'
import './index.pcss'

const Footer = () => {
  const DEV_URL = 'https://www.luisfalconmx.dev'

  const SocialIcons = [
    {
      icon: <GitHub />,
      url: 'https://github.com/luisfalconmx/react-store'
    },
    {
      icon: <Facebook />,
      url: 'https://www.facebook.com/luisfalconmx.dev'
    },
    {
      icon: <Instagram />,
      url: 'https://www.instagram.com/luisfalconmx'
    },
    {
      icon: <Linkedin />,
      url: 'https://www.linkedin.com/in/luisfalconmx'
    }
  ]

  return (
    <footer className="Footer">
      <div className="Footer__Container">
        <Link className="Footer__Identity" to="/">
          <Image
            className="Footer__Logo"
            src={Logo}
            alt="luisfalconmx logo"
            width="40"
            height="40"
          />
          <span className="Footer__Title">React Store</span>
        </Link>
        <div className="Footer__Description">
          Single Page Application with React, React Router, PostCSS, Webpack,
          Docker and Docker Compose.
        </div>
        <div className="Footer__Leyend">
          Created with ❤️ by <a href={DEV_URL}>luisfalconmx</a>
        </div>
        <div className="Footer__Social">
          {SocialIcons.map(({ icon, url }) => (
            <a
              key={url}
              href={url}
              className="Footer__SocialIcon"
              target="_blank"
              rel="noreferrer"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
