import React from 'react'
import { Link } from 'react-router-dom'
import Image from '@components/Image'
import Logo from '@images/luisfalconmx-logo.png'
import LogoWebp from '@images/luisfalconmx-logo.png?as=webp'
import { GitHub, Facebook, Instagram, Linkedin } from 'react-feather'
import './index.pcss'

const Footer = () => {
  const BEHANCE_URL = 'https://www.behance.net/adair00'

  const SocialIcons = [
    {
      icon: <GitHub />,
      url: 'https://github.com/luisfalconmx/react-store'
    },
    {
      icon: <Facebook />,
      url: 'https://www.facebook.com/luisfalconmx'
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
      <Link className="Footer__Identity" to="/">
        <Image
          className="Footer__Logo"
          src={Logo}
          srcSet={LogoWebp}
          alt="luisfalconmx logo"
        />
        <span className="Footer__Title">React Store</span>
      </Link>
      <div className="Footer__Description">
        Single Page Application with React, React Router, PostCSS, Webpack,
        Docker and Docker Compose.
      </div>
      <div className="Footer__Leyend">
        Diseñado con ❤️ por <a href={BEHANCE_URL}>Jesus Adair</a>
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
    </footer>
  )
}

export default Footer
