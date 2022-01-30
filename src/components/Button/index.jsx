import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import './index.pcss'

const Button = ({
  children,
  className,
  type = 'primary',
  outline = false,
  onClick
}) => {
  const ButtonClasses = classNames('Button', className, {
    'Button--Primary': type === 'primary',
    'Button--Success': type === 'success',
    'Button--Error': type === 'error',
    'Button--Warning': type === 'warning',
    'Button--Disabled': type === 'disabled',
    'Button--Outline': outline,
    'Button--Normal': !outline
  })

  return (
    <button
      className={ButtonClasses}
      onClick={onClick}
      disabled={type === 'disabled'}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  type: propTypes.oneOf(['primary', 'success', 'error', 'warning', 'disabled']),
  outline: propTypes.bool,
  onClick: propTypes.func
}

export default Button
