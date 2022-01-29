import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Image from '@components/Image'
import Button from '@components/Button'
import './index.pcss'

const Hero = ({ title, caption, image, imageWebp, video }) => {
  return (
    <div className="Hero">
      {video ? (
        <video className="Hero__Video" poster={image} muted autoPlay loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          className="Hero__Image"
          src={image}
          srcSet={imageWebp}
          alt={title}
        />
      )}
      <div className="Hero__Overlay" />
      <div className="Hero__Content">
        <small className="Hero__Caption">{caption}</small>
        <h1 className="Hero__Title">{title}</h1>
        <Link to="/productos">
          <Button text="Ver productos" />
        </Link>
      </div>
    </div>
  )
}

Hero.propTypes = {
  title: propTypes.string.isRequired,
  caption: propTypes.string.isRequired,
  image: propTypes.string,
  imageWebp: propTypes.string,
  video: propTypes.string
}

export default Hero
