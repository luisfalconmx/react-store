import React from 'react'
import { CheckCircle } from 'react-feather'
import Image from '@components/Image'
import FeaturedImage from '@images/pexels-ivan-samkov.jpg'
import FeaturedImageWebp from '@images/pexels-ivan-samkov.jpg?as=webp'
import './index.pcss'

const Features = () => {
  const FeaturesList = [
    'Abierto las 24 horas',
    'Multiples formas de pago',
    'Entregas por medio de Uber Eats y Didi Food'
  ]

  return (
    <section className="Features">
      <div className="Features__Content">
        <h2 className="Features__Title">Pide todo desde tu celular o laptop</h2>
        <p className="Features__Description">
          Nuestro mayor compromiso es entregarte todos los productos que
          necesitas lo más rapido posible hasta la puerta de tu casa.
        </p>
        <ul className="Features__List">
          {FeaturesList.map((feature) => (
            <li className="Features__Item" key={feature}>
              <CheckCircle className="Features__Icon" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <Image
        className="Features__Image"
        src={FeaturedImage}
        srcSet={FeaturedImageWebp}
        alt="Photo by Ivan Samkov from Pexels"
      />
    </section>
  )
}

export default Features
