import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@components/Button'
import './index.pcss'

const CallToAction = () => {
  return (
    <section className="CallToAction">
      <h2 className="CallToAction__Title">¡Mira nuestros productos!</h2>
      <p className="CallToAction__Description">
        Contamos con una amplia lista de productos para que puedas elegir
        exactamente lo que necesitas
      </p>
      <Link to="/productos">
        <Button className="CallToAction__Button">Ver productos</Button>
      </Link>
    </section>
  )
}

export default CallToAction
