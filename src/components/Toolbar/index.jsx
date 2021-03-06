import React, { useContext } from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { Trash } from 'react-feather'
import AppContext from '@context/AppContext'
import './index.pcss'

const Toolbar = ({ count = 0 }) => {
  const { deleteCart } = useContext(AppContext)

  let countText

  if (count === 0) {
    countText = 'Sin productos'
  }

  if (count === 1) {
    countText = '1 producto'
  }

  if (count > 1) {
    countText = `${count} productos`
  }

  const ToolbarIconClasses = classNames('Toolbar__Icon', {
    'Toolbar__Icon--Disabled': count === 0
  })

  return (
    <div className="Toolbar">
      <strong className="Toolbar__Counter">{countText}</strong>
      <Trash size={32} className={ToolbarIconClasses} onClick={deleteCart} />
    </div>
  )
}

Toolbar.propTypes = {
  count: propTypes.number
}

export default Toolbar
