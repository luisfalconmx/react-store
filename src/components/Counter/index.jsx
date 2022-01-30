import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { Minus, Plus } from 'react-feather'
import './index.pcss'

const Counter = ({ count, max, decrement, increment, disabled = false }) => {
  const counterClasses = classNames('Counter', {
    'Counter--Disabled': disabled
  })

  return (
    <div className={counterClasses}>
      <button
        className="Counter__Button"
        onClick={decrement}
        disabled={disabled || count === 1}
      >
        <Minus size={24} className="Counter__Icon" />
      </button>

      <b className="Counter__Text">
        {count >= 2 ? `${count} Unidades` : `${count} Unidad`}
      </b>

      <button
        className="Counter__Button"
        onClick={increment}
        disabled={disabled || count === max}
      >
        <Plus size={24} className="Counter__Icon" />
      </button>
    </div>
  )
}

Counter.propTypes = {
  count: propTypes.number.isRequired,
  max: propTypes.number.isRequired,
  decrement: propTypes.func.isRequired,
  increment: propTypes.func.isRequired,
  disabled: propTypes.bool
}

export default Counter
