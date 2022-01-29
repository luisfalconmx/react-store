import React from 'react'
import propTypes from 'prop-types'

const Image = ({ src, srcSet, alt, width, height, className }) => {
  return (
    <picture className={className}>
      {srcSet && <source type="image/webp" srcSet={srcSet} />}
      <img src={src} alt={alt} width={width} height={height} />
    </picture>
  )
}

Image.propTypes = {
  src: propTypes.string.isRequired,
  srcSet: propTypes.string,
  alt: propTypes.string.isRequired,
  width: propTypes.string,
  height: propTypes.string,
  className: propTypes.string
}

export default Image
