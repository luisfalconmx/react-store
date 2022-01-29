import React from 'react'
import propTypes from 'prop-types'
import './index.pcss'

const Button = ({ text = 'Button text' }) => {
  return <button className="Button">{text}</button>
}

Button.propTypes = {
  text: propTypes.string
}

export default Button
