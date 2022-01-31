import React from 'react'
import propTypes from 'prop-types'
import { ShoppingCart } from 'react-feather'
import './index.pcss'

const EmptyCard = ({ text }) => {
  return (
    <div className="EmptyCard">
      <ShoppingCart size={64} className="EmptyCard__Icon" />
      <span className="EmptyCard__Title">{text}</span>
    </div>
  )
}

EmptyCard.propTypes = {
  text: propTypes.string.isRequired
}

export default EmptyCard
